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
    summary: `ParallelChain Lab has created a secure and high-performing blockchain platform. 
      As a software engineer and the lead front-end developer, my role involved building and managing a team to develop the front-end architecture for the ParallelChain network. 
      I supervised a team of over five front-end developers and spent most of my time writing code. 
      My work included creating a block explorer, a native wallet, and developer tools with documentation to assist other developers in building on the ParallelChain network. 
      Additionally, I was responsible for hiring and onboarding new engineers and optimizing engineering processes to enhance developer efficiency.`,
    highlights: [
      'Led a team of 5 developers in the design and development of a block-explorer and crypto-wallet for a layer 1 blockchain platform.',
      'Utilized React/Next.js for web application development and Expo/RN for mobile application development.',
      'Successfully completed the development of mainnet-block-explorer within a tight deadline by employing effective project management techniques and optimizing team efforts.',
      'Published multiple libraries to npm and actively contributed to the open-source community.',
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Employed a divide-and-conquer mindset to reorganize efforts and complete development work in the face of a manpower shortage.',
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
      'Developed a proof-of-concept using computer vision techniques for a facial recognition model',
      'Used React-native to develop a mobile application and NodeJS to create a middleware between the mobile application and the Python microservice.',
      'Conducted user-research and sentiment analysis.',
      'Created application prototypes using Figma.',
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
      'Developed a mobile application using React Native for iOS and Android platforms.',
      'Worked with Java Sprint Boot to add new features to the server and change database configurations and user-authentication logic.',
      'Conducted user sentiment analysis to improve app user experience.',
      'Developed a content management system using ReactJS which was used to add new content and manage app content by the content management team.',
      'Worked with WordPress to add new content and features to the company website.',
    ],
  },
  {
    name: 'First Code Academy',
    position: 'STEM Instructor',
    url: 'https://www.firstcodeacademy.com/en',
    startDate: '2019-05-01',
    endDate: '2019-08-01',
    highlights: [
      'Taught students aged 6-18 years how to use HTML/CSS/JS to develop responsive websites, Unity to build games and Arduino to build robots.',
    ],
  },
];

export default work;
