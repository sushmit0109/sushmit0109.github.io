// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "peer-reviewed publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "invited talks, conference presentations, and press coverage",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "writing, photos, and collages",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "gallery-when-ai-meets-behavioral-science",
          title: 'when AI meets behavioral science',
          description: "dangers, opportunities, and open questions",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_ai_besci/";
            },},{id: "gallery-la-gara-di-pattinaggio",
          title: 'la gara di pattinaggio',
          description: "my Italian children&#39;s book",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_gara_patt/";
            },},{id: "gallery-middle",
          title: 'middle',
          description: "retain your connectedness, regain your autonomy",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_middle/";
            },},{id: "gallery-using-neuroscience-to-predict-the-post-covid-world",
          title: 'using neuroscience to predict the post-Covid world',
          description: "a UCL BIT seminar featuring Leigh Caldwell",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_predicting_with_neuro/";
            },},{id: "gallery-second-brain-is-the-new-third-eye",
          title: '“second brain” is the new third eye',
          description: "thoughts about the future of BCI",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_second_brain/";
            },},{id: "gallery-what-s-in-a-streak",
          title: 'what’s in a streak?',
          description: "on why people care about maintaining a streak",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/blog_streaks/";
            },},{id: "gallery-collage-a-gift-to-london",
          title: 'collage - a gift to london',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_a_gift_to_london/";
            },},{id: "gallery-collage-the-big-m",
          title: 'collage - the big m',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_big_m/";
            },},{id: "gallery-collage-durmiente",
          title: 'collage - durmiente',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_durmiente/";
            },},{id: "gallery-collage-fi",
          title: 'collage - fi',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_fi/";
            },},{id: "gallery-collage-la-sorcière",
          title: 'collage - la sorcière',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_la_sorciere/";
            },},{id: "gallery-collage-la-mamma-è-sempre-la-mamma",
          title: 'collage - la mamma è sempre la mamma',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_mamma/";
            },},{id: "gallery-collage-manichino",
          title: 'collage - manichino',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_manichino/";
            },},{id: "gallery-collage-the-unfillable-gap-of-dreams",
          title: 'collage - the unfillable gap of dreams',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_unfillable_gap/";
            },},{id: "gallery-collage-viva-la-vida",
          title: 'collage - viva la vida',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/collage_viva_la_vida/";
            },},{id: "gallery-photo-butterfly",
          title: 'photo - butterfly',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_kathmandu_butterfly/";
            },},{id: "gallery-photo-new-delhi",
          title: 'photo - new delhi',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_new_delhi/";
            },},{id: "gallery-photo-orchha",
          title: 'photo - orchha',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_orchha/";
            },},{id: "gallery-photo-papi-o-clock",
          title: 'photo - papi o’clock',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_papi_o_clock/";
            },},{id: "gallery-photo-tagland-la",
          title: 'photo - tagland la',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_tagland_la_pass/";
            },},{id: "gallery-photo-taj-mahal",
          title: 'photo - taj mahal',
          description: "",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/photo_taj_mahal/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/gaiamolinaro.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%69%61%6D%6F%6C%69%6E%61%72%6F@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gaiamolinaro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gaiamolinaro", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fQnpU6IAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/gaia_molinaro", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
