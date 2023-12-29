// gitprofile.config.js

const config = {
  github: {
    username: 'lperezmo', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Data-stealer', 'nextjs', 'nextjs-app', 'gpseer'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'luis-perez-morales-763a951b1',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://luisperez.site',
    phone: '',
    email: 'lperezmo05@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1zVOgxefN1YSI3HlFC9Q3yIoT3ni6Aaly/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Git',
    'JavaScript',
    'Svelte',
    'HTML',
    'CSS',
    'Docker',
    'React.js',
    'Node.js',
    'MySQL',
    'Ruby',
  ],
  experiences: [
    {
      company: 'Hess Services',
      position: 'Lead Programmer',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://hess-services.com',
    },
    {
      company: 'University of Oregon Graduate School',
      position: 'Graduate Employee',
      from: 'July 2019',
      to: 'December 2021',
      companyLink: 'https://chemistry.uoregon.edu/graduate/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Oregon Graduate School',
      degree: 'Master of Science',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Linfield College',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Hess Services Store',
      description:
        'E-Commerce Website',
      imageUrl: 'https://cdn11.bigcommerce.com/s-ibpaqma25h/images/stencil/250x100/hess-logo-blue-large_1679416785__98785.original.png',
      link: 'https://hess-services.store',
    },
    {
      title: 'Internal Applications',
      description:
        'Internal Python/SQL-based tools to increase overall productivity and make repetitive tasks faster.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
      link: 'https://luis.site',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

//   // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
};

export default config;
