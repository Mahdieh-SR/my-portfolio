// data/resume.js

export const education = [
  {
    university: { fa: 'دانشگاه کردستان', en: 'University of Kurdistan' },
    location: { fa: 'کردستان، ایران', en: 'Kurdistan, Iran' },
    startDate: { fa: '۱۳۹۸', en: '2019' },
    endDate: { fa: '۱۴۰۱', en: '2022' },
    gpa: '—',
    fa: {
      degree: 'کارشناسی زبان و ادبیات انگلیسی',
      field: 'زبان و ادبیات انگلیسی',
      description: 'تسلط بر زبان انگلیسی که در کنار مهارت‌های برنامه‌نویسی، امکان طراحی و تولید محتوای وب‌سایت‌های انگلیسی‌زبان رو هم فراهم می‌کنه'
    },
    en: {
      degree: "Bachelor's in English Language and Literature",
      field: 'English Language and Literature',
      description: 'Fluency in English, which — combined with my development skills — allows me to design and produce content for English-language websites.'
    }
  }
];

export const experience = [
  {
    location: { fa: 'کردستان، ایران', en: 'Kurdistan, Iran' },
    startDate: { fa: 'مهر ۱۴۰۴', en: 'October 2025' },
    endDate: { fa: 'حال حاضر', en: 'Present' },
    current: true,
    technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    fa: {
      position: 'توسعه‌دهنده وب فریلنس',
      company: 'فعالیت مستقل (فریلنس)',
      description: 'طراحی و توسعه وب‌سایت به‌صورت فریلنس با تمرکز بر React و Next.js و ساخت رابط‌های کاربری مدرن',
      responsibilities: [
        'طراحی و توسعه کامل وب‌سایت از صفر با Next.js و React',
        'پیاده‌سازی رابط کاربری واکنش‌گرا و هماهنگ با هویت بصری هر پروژه',
        'مدیریت ساختار و محتوای پروژه به شکلی تمیز و قابل نگهداری',
        'ارتباط مستقیم با کارفرما برای دریافت نیازمندی‌ها و ارائه نتیجه نهایی'
      ]
    },
    en: {
      position: 'Freelance Web Developer',
      company: 'Self-Employed (Freelance)',
      description: 'Freelance web design and development with a focus on React and Next.js, building modern user interfaces.',
      responsibilities: [
        'Designing and developing complete websites from scratch with Next.js and React',
        "Building responsive interfaces aligned with each project's visual identity",
        'Managing project structure and content in a clean, maintainable way',
        'Working directly with clients to gather requirements and deliver the final product'
      ]
    }
  }
];

export const skills = {
  frontend: [
    { name: 'React', level: 90, icon: 'code' },
    { name: 'Next.js', level: 88, icon: 'rocket_launch' },
    { name: 'JavaScript', level: 92, icon: 'javascript' },
    { name: 'TypeScript', level: 80, icon: 'settings' },
    { name: 'HTML/CSS', level: 90, icon: 'html' },
    { name: 'Tailwind CSS', level: 85, icon: 'palette' }
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: 'dns' }
  ],
  tools: [
    { name: 'Git & GitHub', level: 80, icon: 'code_blocks' },
    { name: 'VS Code', level: 90, icon: 'code' }
  ]
};

export const languages = [
  { fa: { name: 'فارسی', level: 'زبان مادری' }, en: { name: 'Persian', level: 'Native' }, proficiency: 100 },
  { fa: { name: 'انگلیسی', level: 'پیشرفته (لیسانس ادبیات انگلیسی)' }, en: { name: 'English', level: 'Advanced (B.A. in English Literature)' }, proficiency: 95 }
];

export const certifications = [];

export const awards = [];
