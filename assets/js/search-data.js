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
  },{id: "news-i-am-co-hosting-this-season-of-the-public-power-underground-podcast",
          title: 'I am co-hosting this season of the Public Power Underground podcast.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-my-presentation-at-the-harvard-energy-policy-seminar-on-the-future-of-resource-adequacy-in-a-decarbonized-grid-is-available-online-summary-recording-slides",
          title: 'My presentation at the Harvard Energy Policy Seminar on The Future of Resource...',
          description: "",
          section: "News",},{id: "news-invited-to-present-on-demand-participation-in-electricity-markets-at-the-european-future-power-market-platform",
          title: 'Invited to present on demand participation in electricity markets at the European Future...',
          description: "",
          section: "News",},{id: "news-submitted-commentary-on-the-australian-transmission-access-reform",
          title: 'Submitted commentary on the Australian transmission access reform',
          description: "",
          section: "News",},{id: "news-my-paper-on-long-run-pricing-in-markets-with-non-convexities-has-won-the-2024-informs-best-paper-in-energy-award",
          title: 'My paper on long-run pricing in markets with non-convexities has won the 2024...',
          description: "",
          section: "News",},{id: "news-a-new-working-paper-on-electricity-market-design-and-risk-focusing-on-participatory-active-demand-is-available-we-also-have-an-expanded-policy-brief-on-participatory-demand-and-new-large-loads",
          title: 'A new working paper on electricity market design and risk, focusing on participatory...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%6C%65%69%67%68.%62%79%65%72%73@%66%74%69%63%6F%6E%73%75%6C%74%69%6E%67.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/conleighbyers", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=OYdt4ykAAAAJ", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/conleighbyers.bsky.social", "_blank");
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
