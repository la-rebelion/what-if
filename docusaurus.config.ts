import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'What If',
  tagline: 'A collection of short narratives inspired by Sci-Fi and thriller best sellers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://what-if.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'la-rebelion', // Usually your GitHub org/user name.
  projectName: 'what-if', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  customFields: {
    // custom environment config
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false, // Optional: disable the docs plugin
        // {
        //   sidebarPath: './sidebars.ts',
        // },
        blog:  //false, // Optional: disable the blog plugin
        {
          showReadingTime: true,
          routeBasePath: '/', // Serve the blog at the site's root
          path: './blog',
          postsPerPage: 4,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          blogSidebarCount: 0
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-14KN7FGN5Y',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/what-if-quest.jpeg',
    navbar: {
      title: 'What If In',
      logo: {
        alt: 'What If Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'leadershipSidebar',
        //   position: 'left',
        //   label: 'Leadership',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/tags/leadership',
          label: 'Leadership',
          position: 'left',
        },
        // @todo add wiin characters
        // {
        //   to: '/characters',
        //   label: 'Characters',
        //   position: 'left',
        // },
        {
          href: 'https://www.buymeacoffee.com/larebelion',
          label: 'Add Cafeine ☕',
          position: 'right',
        },
        {
          label: 'Newsletter',
          position: 'right',
          to: '/' //'/newsletter',
        },
        {
          href: 'https://github.com/la-rebelion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {
              label: 'Leadership',
              to: '/' //'/leadership',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn Follow',
              href: 'https://https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adrianescutia',
            },
            {
              label: 'Add Caffeine',
              href: 'https://www.buymeacoffee.com/larebelion',
            },
            {
              label: 'LinkedIn Company',
              href: 'https://www.linkedin.com/company/larebelion-labs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://rebelion.la',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/la-rebelion',
            },
            {
              label: 'K1s Terminal',
              href: 'https://k1s.sh',
            },
            {
              label: 'APICove',
              href: 'https://apicove.com',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} What If. By La Rebelion.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: 'https://js.hsforms.net/forms/embed/v2.js',
      async: true,
    },
  ],
};

export default config;
