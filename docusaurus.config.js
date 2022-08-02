const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'WIMP Wiki',
  tagline: 'Where Is My Professor?',
  url: 'http://wimp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Ptidejteam', // Usually your GitHub org/user name.
  projectName: 'wimp-wiki', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WIMP',
        logo: {
          alt: 'WIMP logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ptidejteam/wimp_webserver',
            label: 'Student Part Github',
            position: 'right',
          },
          {
            href: 'https://github.com/ptidejteam/industry',
            label: 'Teacher Part Github',
            position: 'right',
          },
          {
            href: 'https://github.com/ptidejteam/wimp-wiki/',
            label: 'Wiki GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture/architecture',
              },
              {
                label: 'Teacher Guide',
                to: '/docs/teacher/teacher',
              },
              {
                label: 'Student Guide',
                to: '/docs/student/student',
              },
              {
                label: 'Admin Guide',
                to: '/docs/admin/admin',
              },
              {
                label: 'Deployment',
                to: '/docs/deploy_wimp',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Ptidej - Website',
                href: 'https://www.ptidej.net/',
              },
              {
                label: 'Ptidej - Chat',
                href: 'https://chat.ptidej.net/group/project-showcase-smarthome',
              },
              {
                label: 'Ptidej - Blog',
                href: 'https://blog.ptidej.net/ghost/#/site',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Ptidej - GitHub',
                href: 'https://github.com/ptidejteam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WIMP, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
