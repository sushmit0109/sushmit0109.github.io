#!/usr/bin/env python3
import datetime
import os
import re
import sys

try:
    import requests
    from bs4 import BeautifulSoup
    import yaml
except ImportError as exc:
    print("Missing dependency:", exc, file=sys.stderr)
    print("Install with: pip install requests beautifulsoup4 pyyaml", file=sys.stderr)
    sys.exit(1)

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_FILE = os.path.join(REPO_ROOT, '_config.yml')
OUTPUT_FILE = os.path.join(REPO_ROOT, '_data', 'scholar_metrics.yml')
USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

METRIC_KEYS = {
    'Citations': ('citations_all', 'citations_recent'),
    'h-index': ('hindex_all', 'hindex_recent'),
    'i10-index': ('i10index_all', 'i10index_recent'),
}


def read_scholar_url():
    with open(CONFIG_FILE, 'r', encoding='utf-8') as stream:
        config = yaml.safe_load(stream)

    author = config.get('author', {})
    url = author.get('googlescholar')
    if not url:
        raise ValueError('No google scholar URL found in _config.yml under author.googlescholar')
    return url


def normalize_int(value):
    value = re.sub(r'[^0-9]', '', value)
    return int(value or 0)


def parse_metrics(html):
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table', id='gsc_rsb_st')
    if table is None:
        raise ValueError('Unable to find metrics table on Scholar page')

    metrics = {}
    for row in table.find_all('tr'):
        cells = row.find_all('td')
        if len(cells) != 3:
            continue

        label = cells[0].get_text(strip=True)
        values = [cells[1].get_text(strip=True), cells[2].get_text(strip=True)]
        if label in METRIC_KEYS:
            metrics[METRIC_KEYS[label][0]] = normalize_int(values[0])
            metrics[METRIC_KEYS[label][1]] = normalize_int(values[1])

    if not metrics:
        raise ValueError('Metrics table parsed but no known rows were found')

    return metrics


def fetch_profile(url):
    response = requests.get(url, headers={'User-Agent': USER_AGENT, 'Accept-Language': 'en-US,en;q=0.9'})
    response.raise_for_status()
    return response.text


def write_metrics(data, url):
    output = {
        'profile_url': url,
        'updated_at': datetime.datetime.utcnow().replace(microsecond=0).isoformat() + 'Z',
        **data,
    }
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        yaml.safe_dump(output, out, sort_keys=False)

    print(f'Wrote Scholar metrics to {OUTPUT_FILE}')


def main():
    url = read_scholar_url()
    html = fetch_profile(url)
    metrics = parse_metrics(html)
    write_metrics(metrics, url)


if __name__ == '__main__':
    main()
