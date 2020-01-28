interface Technology {
  name: string;
  docURL: string;
  // projURL: string;
}

interface Software {
  name: string;
  url: string;
}

interface Hardware {
  name: string;
  specs?: string;
  url: string;
}

const frontEnd: Technology[] = [
  {
    name: `HTML5`,
    docURL: ``,
  },
  {
    name: `CSS3`,
    docURL: ``,
  },
  {
    name: `SASS`,
    docURL: ``,
  },
  {
    name: `JavaScript`,
    docURL: ``,
  },
  {
    name: `TypeScript`,
    docURL: ``,
  },
  {
    name: `React`,
    docURL: ``,
  },
  {
    name: `Angular`,
    docURL: ``,
  },
  {
    name: `Markdown`,
    docURL: ``,
  },
  {
    name: `GatsbyJS`,
    docURL: ``,
  },
  {
    name: `Storybook`,
    docURL: ``,
  },
  {
    name: `Jest`,
    docURL: ``,
  },
  {
    name: `Enzyme`,
    docURL: ``,
  },
  {
    name: `DOM / React / Angular Testing-Libary`,
    docURL: ``,
  },
];

const backEnd: Technology[] = [
  {
    name: `C# .NET Core`,
    docURL: ``,
  },
];

const technologiesSvcs: Technology[] = [
  {
    name: `Git & GitHub`,
    docURL: ``,
  },
  {
    name: `Azure Cloud and AD`,
    docURL: ``,
  },
  {
    name: `Netlify`,
    docURL: ``,
  },
  {
    name: `Contenful`,
    docURL: ``,
  },
  {
    name: `REST`,
    docURL: ``,
  },
  {
    name: `GraphQL`,
    docURL: ``,
  },
];

const software: Software[] = [
  {
    name: `Visual Studio Code`,
    url: ``,
  },
  {
    name: `Figma`,
    url: ``,
  },
  {
    name: `HyperJS`,
    url: ``,
  },
  {
    name: `Postman`,
    url: ``,
  },
  {
    name: `Insomnia`,
    url: ``,
  },
  {
    name: `Jira`,
    url: ``,
  },
  {
    name: `Notion`,
    url: ``,
  },
  {
    name: `Slack`,
    url: ``,
  },
  {
    name: `Spotify`,
    url: ``,
  },
  {
    name: `Lightroom`,
    url: ``,
  },
];

const hardware: Hardware[] = [
  {
    name: `Razer Blade 15`,
    url: ``,
  },
  {
    name: `Macbook Pro 15`,
    url: ``,
  },
  {
    name: `Logitech MX Master 2`,
    url: ``,
  },
  {
    name: `Logitech MX Vertical`,
    url: ``,
  },
  {
    name: `Tofu60 (e-white) w/ DZ60RGB, GMK Dark, custom SummitCable`,
    specs: `Gateron Inks (red) lubed with Krytox 205g0`,
    url: ``,
  },
  {
    name: `Master & Dynamic MW60`,
    url: ``,
  },
];
