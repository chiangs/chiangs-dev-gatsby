interface Book {
  title: string;
  author: string;
  link: string;
}

interface Community {
  name: string;
  role?: string;
  url: string;
}

const firstName = `Stephen`;
const middleName = `E.`;
const lastName = `Chiang`;
const fullName = `${firstName} ${middleName} ${lastName}`;

const reading: Book[] = [
  {
    title: `Form Design Patterns`,
    author: ``,
    link: ``,
  },
  {
    title: `Refactoring UI`,
    author: ``,
    link: ``,
  },
];

const communities: Community[] = [
  {
    name: `Dev.to`,
    role: `Tag moderator - #javascript`,
    url: `dev.to`,
  },
];
