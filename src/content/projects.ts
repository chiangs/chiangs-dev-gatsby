interface Project {
  name: string;
  customer: string;
  description: string;
  technologies: string[];
  url?: string;
  repo?: string;
}

const examples: Project[] = [];

const projects: Project[] = [
  {
    name: `PWEX - Petec Well Experience`,
    customer: `Equinor`,
    description: `Full-stack web application solution for reporting experiences on wellbores of the Johan Sverdrup project`,
    technologies: [`React`, `TypeScript`, `C# .NET Core`, `Azure AD`, `Azure Table & Blob`],
  },
  {
    name: `Oslo Taxi`,
    customer: `Oslo Taxi`,
    description: `Web app for ordering taxis`,
    technologies: [`Angular`, `Umbraco`, `C# .NET`],
    url: `oslotaxi.no`,
  },
  {
    name: `Taxifix`,
    customer: `Taxifix`,
    description: `Web app for ordering taxis`,
    technologies: [`Angular`, `Umbraco`, `C# .NET`],
    url: `taxifix.no`,
  },
  {
    name: `Tilrettelagt Transport`,
    customer: `Rogaland Taxi`,
    description: `Web app for viewing transport dispensation details`,
    technologies: [`Angular`],
  },
];
