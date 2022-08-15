import loveletters from '../assets/img/js.webp';
import weatherbyday from '../assets/img/weatherbyday.PNG';
import gathr from '../assets/img/gathr.png';
import crochet from '../assets/img/crochet.webp';
import uplift from '../assets/img/uplift.png';

export default [
  {
    id: 1,
    colSpan: 5,
    title: 'Gathr',
    subtitle: 'plan, host, gather',
    link: 'https://gathr.herokuapp.com/',
    github: 'https://github.com/Rbenney15/gathr',
    titleColor: '#fefae0ff',
    articleClass: 'text-light bg-light',
    divClass: 'text-light',
    bgImg: gathr,
    bgTransform: 'scale(1.4)',
    icons: [
      {
        i: "bi-link-45deg",
        t: "live"
      },
      {
        i: "bi-code-square",
        t: "MERN"
      }
    ]
  },
  {
    id: 2,
    colSpan: 7,
    title: 'Weather by Day',
    subtitle: 'cosmological calendar',
    link: 'https://abel-baker.github.io/weather-by-day/',
    github: 'https://github.com/abel-baker/weather-by-day',
    titleColor: '#48CFAD',
    articleClass: 'text-dark bg-light',
    divClass: 'text-dark',
    bgImg: weatherbyday,
    icons: [
      {
        i: "bi-link-45deg",
        t: "live"
      },
      {
        i: "bi-code-square",
        t: "javascript"
      }
    ]
  },
  {
    id: 3,
    colSpan: 4,
    title: 'Crochet',
    subtitle: 'Tunisian crochet',
    titleColor: '#fefae0ff',
    articleClass: 'text-white bg-dark',
    divClass: 'text-white',
    bgImg: crochet,
    icons: [
      {
        i: "bi-geo-alt",
        t: "irl"
      },
      {
        i: "bi-code-square",
        t: "yarn"
      }
    ]
  },
  {
    id: 4,
    colSpan: 5,
    title: 'Love Letters',
    subtitle: 'discord bot',
    articleClass: 'text-light bg-dark',
    divClass: 'text-light',
    bgImg: loveletters,
    icons: [
      {
        i: "bi-code-square",
        t: "js"
      }
    ]
  },
  {
    id: 5,
    colSpan: 3,
    title: 'UpLift',
    subtitle: 'full-stack workout tracker',
    link: 'https://uplift-srb.herokuapp.com/',
    github: 'https://github.com/Rbenney15/UpLift',
    titleColor: 'rgb(170, 194, 240)',
    articleClass: 'text-dark bg-white',
    divClass: 'text-dark',
    bgImg: uplift,
    bgFilter: 'brightness(1.2) blur(2px)',
    icons: [
      {
        i: "bi-link-45deg",
        t: "live"
      },
      {
        i: "bi-code-square",
        t: "mysql2"
      }
    ]
  },
];
