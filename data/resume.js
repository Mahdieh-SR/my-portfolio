// data/resume.js

export const education = [
  {
    degree: 'کارشناسی زبان و ادبیات انگلیسی',
    field: 'زبان و ادبیات انگلیسی',
    university: 'دانشگاه کردستان',
    location: 'کردستان، ایران',
    startDate: '۱۳۹۸',
    endDate: '۱۴۰۱',
    gpa: '—',
    description: 'تسلط بر زبان انگلیسی که در کنار مهارت‌های برنامه‌نویسی، امکان طراحی و تولید محتوای وب‌سایت‌های انگلیسی‌زبان رو هم فراهم می‌کنه'
  }
];

export const experience = [
  {
    position: 'توسعه‌دهنده وب فریلنس',
    company: 'فعالیت مستقل (فریلنس)',
    location: 'کردستان، ایران',
    startDate: 'مهر ۱۴۰۴',
    endDate: 'حال حاضر',
    current: true,
    description: 'طراحی و توسعه وب‌سایت به‌صورت فریلنس با تمرکز بر React و Next.js و ساخت رابط‌های کاربری مدرن',
    responsibilities: [
      'طراحی و توسعه کامل وب‌سایت از صفر با Next.js و React',
      'پیاده‌سازی رابط کاربری واکنش‌گرا و هماهنگ با هویت بصری هر پروژه',
      'مدیریت ساختار و محتوای پروژه به شکلی تمیز و قابل نگهداری',
      'ارتباط مستقیم با کارفرما برای دریافت نیازمندی‌ها و ارائه نتیجه نهایی'
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS']
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
  { name: 'فارسی', level: 'زبان مادری', proficiency: 100 },
  { name: 'انگلیسی', level: 'پیشرفته (لیسانس ادبیات انگلیسی)', proficiency: 95 }
];

export const certifications = [];

export const awards = [];