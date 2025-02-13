import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import profilepic from '../images/reja-pic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Reza Nur Rochmat CV | Full Stack Software Engineer',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Reza Nur Rochmat`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Yogyakarta Indonesia based <strong className="text-stone-100">Full Stack Software Engineer</strong>,
        currently working at <strong className="text-stone-100">Vortex Buana Edumedia</strong> helping build a modern
        web, mobile-first, domain registrar and site builder.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1aPV-0P3RoDsOZk0WG8ywi9guzk1yP6qh/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced software engineer with 7 years of experience in designing and implementing complex software systems. I have developed expertise in designing and implementing complex software systems. I have a strong understanding of programming languages and frameworks such as Java, Spring Boot, Ruby, Rails, Javascript, React and ExpressJS.`,
  aboutItems: [
    {label: 'Location', text: 'Yogyakarta Indonesia', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Gadjah Mada Vocational School', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Vortex Buana Edumedia', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 6,
      },
      {
        name: 'Bootstrap',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Golang',
        level: 5,
      },
      {
        name: 'Spring Boot',
        level: 9,
      },
      {
        name: 'Ruby',
        level: 7,
      },
      {
        name: 'Ruby on Rails',
        level: 7,
      },
      {
        name: 'Postgres',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'Apache Kafka',
        level: 7,
      },
      {
        name: 'Redis',
        level: 7,
      },
    ],
  },
  {
    name: 'Software development',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'CI/CD',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'UIIGateway',
    description: 'Internal application system of UII.',
    url: 'https://gateway.uii.ac.id',
    image: porfolioImage1,
  },
  {
    title: 'Tax Application',
    description: 'Tax application of Pajak.io.',
    url: 'https://pajak.io',
    image: porfolioImage2,
  },
  {
    title: 'Training Management System',
    description: 'Training Management System of Toyota.',
    url: 'https://www.linkedin.com/company/pt-hilotech-karya-anak-indonesia/?originalSubdomain=id',
    image: porfolioImage3,
  },
  {
    title: 'Mentor and Backend Engineer',
    description: 'Student mentoring and built LMS Application.',
    url: 'https://www.binaracademy.com/',
    image: porfolioImage4,
  },
  {
    title: 'Mentor and Backend Engineer',
    description: 'Student mentoring and built LMS Application.',
    url: 'https://rakamin.com',
    image: porfolioImage5,
  },
  {
    title: 'Assessment Application',
    description: 'Built assessment application of Eduprime.',
    url: 'https://eduprime.io',
    image: porfolioImage6,
  },
  {
    title: 'Banking Application',
    description: 'Built banking application of Doku.',
    url: 'https://doku.com',
    image: porfolioImage7,
  },
  {
    title: 'Learning Platform',
    description: 'Built learning platform of Vortex.',
    url: 'https://vortex.so',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Feb, 2017',
    location: 'Gadjah Mada University',
    title: 'Computer and Information System',
    content: <p>GPA 3.10</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2022 - Dec 2024',
    location: 'Vortex Buana Edumedia',
    title: 'Senior Software Engineer',
    content: (
      <div>
        As Senior Software Engineer at Vortex my responsiblities is :
        <ul>
          <li>Managed more than 5 monorepos across 3 projects, ensuring streamlined development workflows and reducing deployment issues.</li>
          <li>EConducted Engineering Reviews to identify blockers, mentor engineers, and improve code quality, leading to a 20% reduction in review time.</li>
          <li>Authored the Engineering Handbook, creating a comprehensive resource for onboarding new engineers, reducing onboarding time by 30%.</li>
          <li>Mentored junior engineers in best practices for software development, improving their efficiency and code maintainability.</li>
          <li>Maintained and optimized core products, including Neon, ensuring high performance and reliability for users.</li>
          <li>Enhanced the developer experience by implementing a tagging mechanism in CI/CD pipelines, increasing deployment clarity and traceability.</li>
          <li>Recommended and advocated for Docker Swarm as a development environment, improving resource efficiency and team collaboration.</li>
          <li>Proposed the adoption of HashiCorp Vault for secure secret management, improving compliance with security standards.</li>
          <li>Set up error monitoring with Sentry, reducing debugging time and improving error resolution rates by 15%.</li>
          <li>Managed and monitored running containers using Portainer, improving container uptime and simplifying maintenance workflows.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Feb 2022 - Feb 2023',
    location: 'Binar Academy',
    title: 'Course Facilitator',
    content: (
      <div>
        <ul>
          <li>Mentored students in Fullstack Development, covering core technologies such as JavaScript, Node.js, React, Express, and PostgreSQL, to build modern web applications.</li>
          <li>Designed and delivered structured learning materials, including coding exercises, real-world projects, and hands-on labs, enhancing students practical skills and problem-solving abilities.</li>
          <li> Conducted regular code reviews and provided personalized feedback to help students improve code quality, follow best practices, and understand software development principles.</li>
          <li>Facilitated workshops on industry-relevant topics, including CI/CD pipelines, version control with Git, and RESTful API design, preparing students for real-world engineering challenges.</li>
          <li>Supported students in debugging, troubleshooting, and optimizing their code, fostering independence and critical thinking.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Apr 2022 - Jul 2022',
    location: 'Doku',
    title: 'Java Developer',
    content: (
      <div>
        <ul>
          <li>Developed and maintained the CreditCard Backbone API, enabling seamless integration with new payment channels to support expanded business operations.</li>
          <li>Ensured high system reliability and optimized performance for core payment processing.</li>
          <li>Implemented a new Check Status API to integrate the Bank Jago payment channel using Kafka, improving transaction processing efficiency.</li>
          <li>Enhanced real-time payment status updates by leveraging Redis for caching, reducing query response times.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Oct 2021 - Mar 2022',
    location: 'Eduprime',
    title: 'Java Developer',
    content: (
      <div>
        <ul>
          <li>Developed and implemented new features for the assessment product, enhancing functionality and user experience.</li>
          <li>Increased code reliability and maintainability by adding comprehensive unit tests for backend codebases.</li>
          <li>Integrated Docker for containerization, simplifying deployment processes and improving developer workflows.</li>
          <li>Configured CI/CD pipelines using Jenkins, automating testing and deployment, which reduced deployment time and errors.</li>
          <li>Segmented environments for testing and production, ensuring secure and isolated development processes.</li>
          <li>Advocated and implemented DevOps culture, fostering collaboration between development and operations teams and improving deployment efficiency.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Mar 2021 - Dec 2021',
    location: 'Rakamin Academy',
    title: 'Backend Engineer and Fullstack Mentor',
    content: (
      <div>
        <ul>
          <li>Designed and implemented new features for LMS products, enhancing functionality and improving the user experience for both educators and learners.</li>
          <li>Collaborated with cross-functional teams to identify feature requirements, ensuring alignment with user needs and business goals.</li>
          <li>Optimized backend performance for key LMS features, resulting in improved system responsiveness and scalability.</li>
          <li>Refactored existing codebases to adopt best practices, reducing technical debt and increasing maintainability.</li>
          <li>Mentored students in Fullstack Development, focusing on core backend technologies such as Java, Spring Boot, and PostgreSQL, as well as frontend tools like JavaScript, React, and Node.js, enabling them to build scalable and maintainable web applications.</li>
          <li>Designed and delivered structured learning materials, including coding exercises, Spring Boot microservices projects, and hands-on labs, enhancing students’ problem-solving abilities and real-world coding proficiency.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Sep 2019 - Feb 2023',
    location: 'Binar Academy',
    title: 'Course Faciliator and Backend Engineer',
    content: (
      <div>
        <ul>
          <li>Mentored students in Fullstack Development, focusing on core backend technologies such as Java, Spring Boot, and PostgreSQL, as well as frontend tools like JavaScript, React, and Node.js, enabling them to build scalable and maintainable web applications</li>
          <li>Designed and delivered structured learning materials, including coding exercises, Spring Boot microservices projects, and hands-on labs, enhancing students’ problem-solving abilities and real-world coding proficiency.</li>
          <li>Conducted code reviews with a focus on improving code quality, adherence to SOLID principles, and best practices for Spring-based applications, helping students adopt professional development standards.</li>
          <li>Facilitated workshops on RESTful API design using Spring Boot, CI/CD pipelines with Jenkins, and version control with Git, preparing students for engineering roles in industry.</li>
          <li>Designed and implemented new features for CMS products, improving usability and enabling better content management for end users.</li>
          <li>Collaborated with cross-functional teams to gather requirements and ensure feature alignment with business goals.</li>
          <li>Enhanced UI/UX by integrating dynamic components using modern frameworks (e.g., React, Vue.js).</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Jul 2020 - Jan 2021',
    location: 'Hilotech',
    title: 'Frontend Engineer',
    content: (
      <div>
        <ul>
          <li>Designed and developed a new frontend application for the Training Management System (TMS), enabling a seamless and user-friendly interface for administrators and users.</li>
          <li>Implemented new features in the TMS application to improve functionality and enhance the overall user experience.</li>
          <li>Optimized frontend performance through efficient state management and modular code design, reducing load times.</li>
          <li>Integrated responsive design principles to ensure compatibility across devices, improving accessibility for users on mobile and desktop platforms.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Apr 2020 - Aug 2020',
    location: 'Fintax',
    title: 'Java Developer',
    content: (
      <div>
        <ul>
          <li>Migrated core backend APIs from Ruby on Rails to Spring Boot, improving system performance, scalability, and maintainability.</li>
          <li>Designed and implemented new modules to integrate internal APIs with DJP Agent, streamlining data flow and ensuring seamless connectivity.</li>
          <li>Implemented Docker for containerization of the core API, enabling consistent deployment across multiple environments and reducing deployment errors.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Mar 2018 - Aug 2019',
    location: 'BSI UII',
    title: 'Fullstack Engineer',
    content: (
      <div>
        <ul>
          <li>Enhanced UIIPersonal modules, improving functionality and user experience for Human Resource Information Systems (HRIS).</li>
          <li>Optimized workflows within HRIS by identifying and resolving bottlenecks in existing modules.</li>
          <li>Improved development tools for UIIPersonal using Golang and Angular, increasing developer productivity and reducing bug occurrences in the application.</li>
          <li>Refined tools for managing microservices across multiple products in UIIGateway, ensuring seamless communication and integration between services.</li>
          <li>Streamlined microservices deployment by implementing scalable solutions, reducing downtime and improving service reliability by 20%.</li>
          <li>Introduced best practices for microservice monitoring and error handling, enhancing the observability and maintainability of systems.</li>
          <li>Enhanced and refined UIIPersonal modules on the frontend, ensuring a seamless and intuitive user experience by optimizing UI components and addressing performance bottlenecks.</li>
          <li> Collaborated closely with designers and stakeholders to align frontend features with user needs, improving satisfaction and usability.</li>
          <li>Optimized and refined development tools for UIIPersonal, streamlining workflows and reducing development time for both frontend and backend engineers.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Jul 2017 - Jan 2018',
    location: 'Indomerapi',
    title: 'Web Developer and Staff Support',
    content: (
      <div>
        <ul>
          <li>Designed and developed a new catalog website for product listings, improving user experience and enabling better product visibility.</li>
          <li>Built and deployed a new inventory management website, streamlining product tracking and reducing manual errors for internal operations.</li>
          <li>Collaborated with stakeholders to define requirements and ensure both websites met business needs efficiently.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Mar 2017 - Jun 2017',
    location: 'Golab',
    title: 'Web Developer',
    content: (
      <div>
        <ul>
          <li>Developed new features for a medical application, contributing to its core functionality and improving the user experience for healthcare professionals and patients.</li>
          <li>Collaborated with cross-functional teams to ensure the application met regulatory and security standards, ensuring patient data privacy.</li>
          <li>Conducted research and development on the backend stack using Rails, optimizing system performance and introducing best practices to improve scalability and maintainability.</li>
          <li>Contributed to the integration of new technologies, such as API improvements and database optimizations, increasing efficiency and reducing system bottlenecks.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Aug 2015 - Oct 2015',
    location: 'PT Aino Indonesia',
    title: 'Intern Web Developer',
    content: (
      <div>
        <ul>
          <li>Developed new features for a asset management application, contributing to its core functionality and improving the user experience.</li>
          <li>Collaborated with cross-functional teams to ensure the application met regulatory and bussiness flow.</li>
          <li>Enhanced application when use charts for better visualizations.</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Bian Pratama',
      text: `Reza is a quick learner, has strong communication skills, and is a great leader. He is able to adapt quickly to new technologies and consistently deliver high-quality work within tight timelines. Reza's communication skills are exceptional, making them a valuable collaborator and able to explain complex technical concepts to non-technical stakeholders.Reza is also a caring leader who values their team members and fosters a positive work environment. He takes the time to listen, provide guidance, and mentor others to help them grow. Kudos to you, mate!`,
      image:
        'https://media.licdn.com/dms/image/C5603AQF92ggM_HmAiQ/profile-displayphoto-shrink_100_100/0/1517612865319?e=1723680000&v=beta&t=crwJl_a296qAx05gZPk7nI4zDstIYZXuteSwq6IHxag',
    },
    {
      name: 'Jessica Tessalonika',
      text: 'Working with Reza was a blast! In our Team, he delivered top-notch service experiences for developers. Reza creativity, speed, and precision always stood out. His critical thinking added immense value, providing effective contributions and bringing forth intriguing ideas. Collaboration was a breeze with Reza in the team – a true team player! ',
      image:
        'https://media.licdn.com/dms/image/D5603AQEBJielgu9Jfg/profile-displayphoto-shrink_100_100/0/1695465071047?e=1723680000&v=beta&t=PWqPXwwOCO9SlNCbWO3aZ5pmYOPNKLKXK5pzZIfXUMI',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'rezanurrochmat@gmail.com',
      href: 'mailto:rezanurrochmat@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Yogyakarta, Indonesia',
      href: 'https://maps.app.goo.gl/tGWGWGJYkNpoqSmDA',
    },
    {
      type: ContactType.Instagram,
      text: '@rezanur13',
      href: 'https://www.instagram.com/rezanur13/',
    },
    {
      type: ContactType.Github,
      text: 'RezaNurRochmat13',
      href: 'https://github.com/RezaNurRochmat13',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/RezaNurRochmat13'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/reza-nur-rochmat/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rezanur13/'},
];
