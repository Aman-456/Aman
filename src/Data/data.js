import { list1 } from "./image";
const {
  homedecore,
  MeenaBazaar,
  singlepage,
  hosting,
  portfolio,
  blackjack,
  JustAsk,
  crofundsme,
  buisnessPortfolio,
  spoflex,
  playintraverseio,
  directportal,
  mysterymadness,
  aztechzone,
  // Crofundsmeprod,
} = list1;
// const { homedecore, MeenaBazaar,  , singlepage, hosting, portfolio, blackjack, JustAsk, crofundsme, spoflex, Memo } = list1
const data = [
  {
    url: "https://play.intraverse.io/",
    title: "Intraverse",
    img: playintraverseio,
    description: "Web3 DAPP",
    tag: [
      "Web3",
      "FullStack",
      "React-Js",
      "Javascript",
      "ANTD",
      "Firebase",
      "SCSS",
    ],
    id: "intraverse",
  },
  {
    url: "https://aztechzone.com/",
    title: "AZ Techzone",
    img: aztechzone,
    description: "MERN Stack web app",
    tag: [
      "Web3",
      "FullStack",
      "React-Js",
      "Javascript",
      "MUI",
      "bootstrap",
      "Express",
      "Mongodb",
    ],
    id: "aztechzone",
  },
  {
    url: "https://directportal.vercel.app/",
    title: "Direct Portal",
    img: directportal,
    description: "Projects Managment software for PK (development)",
    tag: ["FullStack", "React-Js", "Javascript", "MUI", "Express", "Mongodb"],
    id: "directportal",
  },
  {
    url: "https://mysterymadness.co/",
    title: "Mystery Madness",
    img: mysterymadness,
    description:
      "Web3 based quiz dapp integrated with solana and ethereum chains",
    tag: ["FullStack", "NextJs", "Tailwind", "Firebase"],
    id: "mysterymadness",
  },
  // {
  //   url: "https://justask.netlify.app/",
  //   title: "JustAsk!",
  //   img: JustAsk,
  //   description: "Mern FORUM app",
  //   tag: [
  //     "FullStack",
  //     "MERN",
  //     "React-Js",
  //     "Javascript",
  //     "Chakra-UI",
  //     "Html5",
  //     "SCSS",
  //     "Quora Clone",
  //   ],
  //   id: "JustAsk",
  // },
  {
    url: "http://199.192.23.58:5001",
    title: "Spoflex",
    img: spoflex,
    description: "Mern SPORTS FORUM  (in Development)",
    tag: ["FullStack", "MERN", "React-Js", "ANT-D", "BOOSTRAP"],
    id: "Spoflex",
  },

  {
    url: "https://crofundsme.netlify.app/",
    title: "CrofundsMe FrontEnd",
    img: crofundsme,
    description: "React CrowdFunding App",
    tag: ["FrontEnd", "React-Js", "Javascript", "ANT-D", "Html5", "SCSS"],
    id: "crofundsme",
  },
  // {
  //   url: "https://crofundsme.org/",
  //   title: "CrofundsMe",
  //   img: Crofundsmeprod,
  //   description: "MERN CrowdFunding App",
  //   tag: ["FrontEnd", "React-Js", "Javascript", "ANT-D", "Html5", "SCSS"],
  //   id: "crofundssme",
  // },
  {
    url: "https://usama-gamify.netlify.app/",
    title: "Buisness/Game Portfolio",
    img: buisnessPortfolio,
    description:
      "It is business Portolio, or It can be used as an individual Portfolio",
    tag: ["FullStack", "MERN", "ANTD", "SCSS"],
    id: "Buisness/Game Portfolio",
  },
  {
    url: "https://foodpoint.netlify.app/",
    title: "Food Point",
    img: homedecore,
    description: "Client ReactJs WebApp with Login Authentication",
    tag: ["FrontEnd", "ReactJs", "Firebase", "SCSS"],
    id: "foodpoint",
  },
  {
    url: "https://the-sellpoint.netlify.app/",
    title: "MEENA BAZAAR",
    img: MeenaBazaar,
    description: "React WebApp for online shopping",
    tag: ["FrontEnd", "Amzaone-clone", "ReactJs", "SCSS"],
    id: "kabaar",
  },
  // {
  //   url: "https://workoutmemo.netlify.app",
  //   title: "Mern Memo App",
  //   img: Memo,
  //   description: "MERN App for creating memos, todolist, workout etc",
  //   tag: ["FullStack", "MERN", "ReactJs", "CSS3"],
  //   id: "Memo",
  // },

  {
    url: "https://react-portfolio01.netlify.app/",
    title: "Portfolio",
    img: portfolio,
    description: "A Dummy SuperFast Portfolio with Scroll-Snap ",
    tag: ["ReactJs", "SCSS"],
    id: "portfolio",
  },
  {
    url: "https://1pager.netlify.app/",
    title: "Landing Page 1",
    img: singlepage,
    description: "A demo landing Template for Business Company",
    tag: ["FrontEnd", "Html5", "css3"],
    id: "singlepage",
  },
  {
    url: "https://landingpage-hosting.netlify.app/",
    title: " Landing Page 2",
    img: hosting,
    description: "A dummy Landing Page of Hosting Company ",
    tag: ["FrontEnd", "Html5", "Css3"],
    id: "hosting",
  },
  {
    url: "https://blackjack-pokergame.netlify.app/",
    title: "Black Jack Game",
    img: blackjack,
    // img: "",
    description: "A simple Vanilla js game with a bit css touch ",
    tag: ["FrontEnd", "Html5", "Css3", "Javascript"],
    id: "BlackJack",
  },
];

export default data;

export const educationdata = [
  {
    datestart: "JAN-2023",
    dateend: "NOW",
    des: "MERN Stack Developer at INTELGENCY , NUST Islamabad",
  },
  {
    datestart: "APRIL-10",
    dateend: "JAN-2023",
    des: "JR. React-Js Developer at INTELGENCY , NUST Islamabad",
  },
  {
    datestart: "OCT-20",
    dateend: "january-21",
    des: "WEB intern at T4Tutorials.com",
  },
  {
    datestart: "Practice",
    dateend: "from 2k19",
    des: "Started Practice in Web development",
  },
  {
    datestart: "2018",
    dateend: "2022",
    des: "Enrolled in Bachleor's in computer science    ",
  },
];

export const aboutme = (
  <div className="margin3">
    I have been in this field for quiet some time and with each day I strive for
    more and better. I am in love with this field. I take inspiration from
    resources out there on the internet and tries to make something out of it My
    Motto and my speciality is web devlopment , by taking any given desingn I
    turn it into reality
  </div>
);
