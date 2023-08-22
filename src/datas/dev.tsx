export interface Dev {
  name: string
  img: string
  paths?: Array<{ label: string, url: string }>
  version: string
  techStack: string[]
  description: string
}

export const myDev: Record<string, Dev> = {
  Dev_1: {
    name: 'Multimedia Web APP',
    img: './img/multimedia.png',
    paths: [
      { label: 'Web', url: 'https://ardy-multimedia-app.netlify.app/' },
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/multimedia-app.git' }
    ],
    version: '0.1.0',
    techStack: ['ReactJS', 'CSS'],
    description: 'Learning and introduction to ReactJS.'
  },

  Dev_2: {
    name: 'Predator',
    img: './img/porto-2.png',
    paths: [
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/Predator.git' }
    ],
    version: '0.1.0',
    techStack: ['HTML', 'Tailwind CSS', 'Javascript'],
    description: 'Learning about HTML, CSS, and Javascript.'
  },
  Dev_3: {
    name: 'Diary APP',
    img: './img/mobile-diary.png',
    paths: [
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/Mobile-Reactnative-LifeDiary.git' }
    ],
    version: '0.1.0',
    techStack: ['React Native', 'CSS'],
    description: 'Learning and introduction to React Native'
  },
  Dev_4: {
    name: 'Bookbuzz',
    img: './img/porto-3.png',
    paths: [
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/React-Bookbuzz.git' }
    ],
    version: '0.1.0',
    techStack: ['ReactJS', 'Tailwind CSS', 'ExpressJS', 'Typescript', 'MySQL'],
    description: 'Final Project Bootcamp harisenin.com.'
  },
  Dev_5: {
    name: 'Ardy Yusuf 2023',
    img: './img/porto-4.png',
    paths: [
      { label: 'Web', url: 'https://ardyyusuf.web.app/' },
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/portofolio-2023.git' }
    ],
    version: '0.1.0',
    techStack: ['ReactJS', 'Tailwind CSS', 'Typescript'],
    description: 'Web development portofolio.'
  },
  Dev_6: {
    name: 'Widget Web APP',
    img: './img/widget-web-app.png',
    paths: [
      { label: 'Web', url: 'https://bluegreen-bountyplanner-app.netlify.app/' },
      { label: 'Git', url: 'https://github.com/ardy-yusuf-wibawa/planner-app.git' }
    ],
    version: '0.1.0',
    techStack: ['ReactJS', 'CSS'],
    description:
      'Frontend-development for widget-app.'
  }
}
