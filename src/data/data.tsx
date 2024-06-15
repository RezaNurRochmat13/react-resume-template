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
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  name: `I'm Reza Nur Rochmat.`,
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
      href: '/assets/resume.pdf',
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
  description: `Hello folks. 
My name Reza Nur Rochmat. You can call me Reza or Reja.
I live in Yogyakarta Indonesia. As a software engineer with 5 years of experience, I have developed expertise in designing and implementing complex software systems. I have a strong understanding of programming languages and frameworks such as Java, Spring Boot, and React. 

In my previous roles, I have experience in software development methodologies such as Agile, Scrum, and using CI/CD methodology which has enabled me to efficiently manage project timelines and budgets. 

I am passionate about staying up-to-date with emerging technologies and trends, and regularly seek out opportunities to expand my skillsets.`,
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
    date: 'Dec 2022 - Present',
    location: 'Vortex Buana Edumedia',
    title: 'Senior Software Engineer',
    content: (
      <div>
        As Senior Software Engineer at Vortex my responsiblities is :
        <ul>
          <li>Manage 5++ monorepos project across 3 different project</li>
          <li>Enhance developer experience using tagging mechanism on CI/CD</li>
          <li>Suggest for using Docker Swarm for development</li>
          <li>Suggest using Vault for storing secret management</li>
          <li>Provide "Engineering Reviews" for helping blockers on each engineers </li>
          <li>
            Create "Engineering Handbook" on onboard accomodating for new engineers - Mentoring junior engineer for
            using best practice on development
          </li>
          <li>Add new features on internal some products</li>
          <li>Setup logging using Grafana-Loki stack</li>
          <li>Setup error management using Sentry</li>
          <li>Handle running container using Portainer</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Apr 2022 - Jul 2022',
    location: 'Doku',
    title: 'Java Developer',
    content: (
      <p>
        <ul>
          <li>Develop adding module on Credit Card backbone project</li>
          <li>Develop add payment channel on kafka listener</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Oct 2021 - Mar 2022',
    location: 'Eduprime',
    title: 'Java Developer',
    content: (
      <p>
        <ul>
          <li>Develop new features on assessment product</li>
          <li>Adding unit test for backend codebases</li>
          <li>Adding docker and configure CI/CD using Jenkins</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Mar 2021 - Dec 2021',
    location: 'Rakamin Academy',
    title: 'Backend Engineer and Fullstack Mentor',
    content: (
      <p>
        <ul>
          <li>Develop new features on LMS application</li>
          <li>Sharing knowledge on student bootcamp</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Sep 2019 - Feb 2023',
    location: 'Binar Academy',
    title: 'Course Faciliator and Backend Engineer',
    content: (
      <p>
        <ul>
          <li>Develop new features on LMS application</li>
          <li>Sharing knowledge on student bootcamp</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Jul 2020 - Jan 2021',
    location: 'Hilotech',
    title: 'Frontend Engineer',
    content: (
      <p>
        <ul>
          <li>Develop new application Training Management Systems</li>
          <li>Develop new features on TMS</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Apr 2020 - Aug 2020',
    location: 'Fintax',
    title: 'Java Developer',
    content: (
      <p>
        <ul>
          <li>Rewritting existing some functionality module</li>
          <li>Connect from existing backend to third parties application</li>
          <li>Adding new docker for easy deployment</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Mar 2018 - Aug 2019',
    location: 'BSI UII',
    title: 'Fullstack Engineer',
    content: (
      <p>
        <ul>
          <li>Develop new features on internal systems</li>
          <li>Develop adding documentation for development process</li>
          <li>Develop new application HCM</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Jul 2017 - Jan 2018',
    location: 'Indomerapi',
    title: 'Web Developer and Staff Support',
    content: (
      <p>
        <ul>
          <li>Develop new website catalog product</li>
          <li>Troubleshooting internal employee personal computer</li>
          <li>Develop new website inventory product</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'Mar 2017 - Jun 2017',
    location: 'Golab',
    title: 'Web Developer',
    content: (
      <p>
        <ul>
          <li>Develop new features medical application</li>
          <li>Research and development backend stack</li>
        </ul>
      </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
