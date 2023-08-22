interface Projects {
  name: string
  dateStart: string
  dateFinish: string
  progress: string
  description: string
}

export const myCV: Record<string, Projects> = {
  CV_1: {
    name: 'Harisenin.com',
    dateStart: 'February 4th, 2023',
    dateFinish: 'May 21st, 2023',
    progress: 'First Bootcamp',
    description:
      'Stepping into the world of web development was like opening the door to a whole new universe of possibilities. Little did I know that my journey at Full-Stack Development harisenin.com would be an exhilarating adventure, filled with captivating solo web development projects and thrilling collaborative team endeavors. From crafting websites on my own to diving headfirst into dynamic group projects, this immersive experience has truly been a catalyst for my personal and professional growth. The knowledge and skills I gained during Full-Stack Development harisenin.com have transformed me into a confident and versatile Full-stack Developer, poised to conquer the ever-evolving digital landscape. Join me as I share my incredible journey and the valuable lessons learned along the way on harisenin.com. '
  },
  CV_2: {
    name: 'Predator',
    dateStart: './img/porto-2.png',
    dateFinish: './img/porto-2.png',
    progress: '0.1.0',
    description:
      'Website ini dibuat pada saat mengikuti kelas bootcamp Harisenin.com sebagai tugas ketika sudah menyelesaikan pembelajaran mengenai HTML, CSS dan Javascript. '
  },
  CV_3: {
    name: 'Bookbuzz',
    dateStart: './img/porto-3.png',
    dateFinish: './img/porto-3.png',
    progress: '0.1.0',
    description: 'Website ini dibuat sebagai syarat tugas akhir kelompok 9'
  },
  CV_4: {
    name: 'Ardy Yusuf 2023',
    dateStart: './img/porto-4.png',
    dateFinish: './img/porto-4.png',
    progress: '0.1.0',
    description:
      'Website ini dibuat sebagai tugas pembelajaran ReactJS dan sekaligus sebagai portofolio kegiatan selama 2023 ini'
  }
}
