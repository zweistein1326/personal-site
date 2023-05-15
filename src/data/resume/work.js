/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ParallelChain Lab',
    position: 'Software Engineer',
    url: 'https://smileidentity.com',
    startDate: '2022-04-01',
    endDate: '2023-04-01',
    summary: `ParallelChain Lab builds a high performance, scalable, and secure blockchain platform. As a Software Engineer,
     I worked on developing a front-end block explorer and native wallet for the ParallelChain network. 
     I also worked on developing developer tools and documentation to help developers build on the ParallelChain network. As the lead front-end engineer on the team, my responsibility was to build a front-end team and develop a front-end architecture for the ParallelChain network.
     I led a 5+ person front-end team and spent >50% of my time writing code.`,
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery.',
      'Lead re-design of ParallelChain Explorer for inference. Built a wallet and added new features for interacting with the network.',
      'Developed developer tools: cli, npm libraries and documentation to help developers build on the ParallelChain network.',
    ],
  },
  {
    name: 'PayPhone',
    position: 'Co-founder & C.T.O.',
    url: 'http://www.payphone.hk',
    startDate: '2020-04-01',
    endDate: '2021-11-01',
    summary: 'PayPhone is a company that enables payments using facial-recognition technology for enabling faster checkouts in supermarkets.',
    highlights: [
      'Created a mobile-based Proof of Concept application for enabling facial recognition payments.',
      'Developed a facial-recognition model using open-source libraries and trained it on a custom dataset.',
      'Spearheaded efforts to raise funds for hiring full-time employees and conduct further R&D.',
    ],
  },
  {
    name: 'ROJU',
    position: 'Software Engineering Intern',
    url: 'http://roju.app',
    startDate: '2020-11-01',
    endDate: '2020-04-01',
    summary: 'ROJU is a sport-tech startup that provides online training to users who want to learn new jump rope skills and techniques.',
    highlights: [
      'Responsible for converting design sheets into an actionable mobile application using React Native & Expo.',
      'Create user journeys from user stories and wireframes. Used Google Analytics to track user journeys and improve user experience.',
      'Developed a Content Management System (CMS) for managing content internally and on the mobile application.',
      'Responsible for writing business logic and integrating the mobile application with the CMS.',
      'Maintained website and DNS records using AWS Route 53.',
    ],
  },
  {
    name: 'First Code Academy',
    position: 'STEM Instructor',
    url: 'https://www.firstcodeacademy.com/en',
    startDate: '2019-05-01',
    endDate: '2019-08-01',
    highlights: [
      'Taught students aged 6-18 years old how to code in Python, JavaScript, and Scratch.',
      'Developed a curriculum for teaching students how to build different robots with Arduino.',
      'Developed a curriculum for teaching students how to use Unity to build basic games.',
    ],
  },
];

export default work;
