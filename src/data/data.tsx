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
      <div>
        <ul>
          <li>Develop adding module on Credit Card backbone project</li>
          <li>Develop add payment channel on kafka listener</li>
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
          <li>Develop new features on assessment product</li>
          <li>Adding unit test for backend codebases</li>
          <li>Adding docker and configure CI/CD using Jenkins</li>
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
          <li>Develop new features on LMS application</li>
          <li>Sharing knowledge on student bootcamp</li>
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
          <li>Develop new features on LMS application</li>
          <li>Sharing knowledge on student bootcamp</li>
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
          <li>Develop new application Training Management Systems</li>
          <li>Develop new features on TMS</li>
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
          <li>Rewritting existing some functionality module</li>
          <li>Connect from existing backend to third parties application</li>
          <li>Adding new docker for easy deployment</li>
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
          <li>Develop new features on internal systems</li>
          <li>Develop adding documentation for development process</li>
          <li>Develop new application HCM</li>
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
          <li>Develop new website catalog product</li>
          <li>Troubleshooting internal employee personal computer</li>
          <li>Develop new website inventory product</li>
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
          <li>Develop new features medical application</li>
          <li>Research and development backend stack</li>
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
