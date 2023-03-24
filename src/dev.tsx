interface Dev {
  name: string
  img: string
  version: string
  ingredients: string[]
  description: string
}

export const myDev: Record< string, Dev > = {
  Dev_1: {
    name: 'Hello World 5/02/2023',
    img: './img/porto-1.png',
    version: '0.1.0',
    ingredients: [
      'HTML ',
      'CSS'
    ],
    description:
      'Website ini dibuat pada saat pertama kali mengikuti bootcamp HTML harsenin.com '
  },
  Dev_2: {
    name: 'Predator',
    img: './img/porto-2.png',
    version: '0.1.0',
    ingredients: [
      'HTML ',
      'Tailwind CSS ',
      'Javascript'
    ],
    description:
      'Website ini dibuat pada saat mengikuti kelas bootcamp Harisenin.com sebagai tugas ketika sudah menyelesaikan pembelajaran mengenai HTML, CSS dan Javascript. '
  },
  Dev_3: {
    name: 'Bookbuzz',
    img: './img/porto-3.png',
    version: '0.1.0',
    ingredients: [
      'HTML ',
      'Tailwind CSS ',
      'Javascript'
    ],
    description:
      'Website ini dibuat sebagai syarat tugas akhir kelompok 9'
  },
  Dev_4: {
    name: 'Ardy Yusuf 2023',
    img: './img/porto-4.png',
    version: '0.1.0',
    ingredients: [
      'HTML ',
      'Tailwind CSS ',
      'ReactJS'
    ],
    description:
      'Website ini dibuat sebagai tugas pembelajaran ReactJS dan sekaligus sebagai portofolio kegiatan selama 2023 ini'
  }
}
