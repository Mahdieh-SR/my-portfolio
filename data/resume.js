// data/resume.js

export const education = [
  {
    degree: 'کارشناسی ارشد مهندسی کامپیوتر',
    field: 'نرم‌افزار',
    university: 'دانشگاه تهران',
    location: 'تهران، ایران',
    startDate: '۱۳۹۸',
    endDate: '۱۴۰۰',
    gpa: '۱۸.۵ از ۲۰',
    description: 'تمرکز بر معماری نرم‌افزار، الگوریتم‌ها و یادگیری ماشین'
  },
  {
    degree: 'کارشناسی مهندسی کامپیوتر',
    field: 'نرم‌افزار',
    university: 'دانشگاه صنعتی شریف',
    location: 'تهران، ایران',
    startDate: '۱۳۹۴',
    endDate: '۱۳۹۸',
    gpa: '۱۷.۸ از ۲۰',
    description: 'پایه‌های برنامه‌نویسی، پایگاه داده و شبکه‌های کامپیوتری'
  }
];

export const experience = [
  {
    position: 'توسعه‌دهنده Senior Full Stack',
    company: 'شرکت فناوری پیشرو',
    location: 'تهران، ایران',
    startDate: 'مهر ۱۴۰۱',
    endDate: 'حال حاضر',
    current: true,
    description: 'توسعه و نگهداری اپلیکیشن‌های وب مقیاس‌پذیر با استفاده از React، Next.js و Node.js',
    responsibilities: [
      'رهبری تیم توسعه ۵ نفره و مدیریت پروژه‌های پیچیده',
      'طراحی معماری فرانت‌اند و بک‌اند برای پروژه‌های جدید',
      'بهینه‌سازی عملکرد و کاهش ۴۰٪ زمان بارگذاری صفحات',
      'پیاده‌سازی CI/CD و استقرار خودکار با Docker و Kubernetes',
      'مستندسازی کد و آموزش اعضای جدید تیم'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Docker', 'AWS']
  },
  {
    position: 'توسعه‌دهنده Front-end',
    company: 'استودیو طراحی دیجیتال',
    location: 'تهران، ایران',
    startDate: 'خرداد ۱۴۰۰',
    endDate: 'شهریور ۱۴۰۱',
    current: false,
    description: 'توسعه رابط کاربری وب‌سایت‌ها و اپلیکیشن‌های وب با React و Vue.js',
    responsibilities: [
      'تبدیل طرح‌های Figma به کدهای واکنش‌گرا و بهینه',
      'همکاری نزدیک با طراحان UI/UX برای بهبود تجربه کاربری',
      'پیاده‌سازی انیمیشن‌ها و تعاملات پیشرفته با Framer Motion',
      'بهینه‌سازی SEO و افزایش ۶۰٪ ترافیک ارگانیک',
      'تست و رفع باگ‌های سازگاری در مرورگرهای مختلف'
    ],
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'Redux']
  },
  {
    position: 'توسعه‌دهنده Junior Full Stack',
    company: 'شرکت نرم‌افزاری نوآوران',
    location: 'تهران، ایران',
    startDate: 'مهر ۱۳۹۹',
    endDate: 'اردیبهشت ۱۴۰۰',
    current: false,
    description: 'شروع کار حرفه‌ای و یادگیری تکنولوژی‌های مدرن توسعه وب',
    responsibilities: [
      'توسعه ویژگی‌های جدید برای پلتفرم مدیریت محتوا',
      'رفع باگ‌ها و بهبود کیفیت کد موجود',
      'یادگیری و پیاده‌سازی بهترین شیوه‌های برنامه‌نویسی',
      'مشارکت در جلسات برنامه‌ریزی Agile و Sprint Planning',
      'نوشتن تست‌های واحد با Jest و React Testing Library'
    ],
    technologies: ['JavaScript', 'React', 'Express.js', 'PostgreSQL', 'Git']
  }
];

export const skills = {
  frontend: [
    { name: 'React', level: 95, icon: 'code' },
    { name: 'Next.js', level: 90, icon: 'rocket_launch' },
    { name: 'TypeScript', level: 88, icon: 'settings' },
    { name: 'Vue.js', level: 85, icon: 'javascript' },
    { name: 'HTML/CSS', level: 98, icon: 'html' },
    { name: 'Tailwind CSS', level: 92, icon: 'palette' },
    { name: 'Material UI', level: 90, icon: 'design_services' },
    { name: 'Framer Motion', level: 85, icon: 'animation' }
  ],
  backend: [
    { name: 'Node.js', level: 90, icon: 'dns' },
    { name: 'Express.js', level: 88, icon: 'route' },
    { name: 'MongoDB', level: 85, icon: 'storage' },
    { name: 'PostgreSQL', level: 82, icon: 'database' },
    { name: 'REST API', level: 93, icon: 'api' },
    { name: 'GraphQL', level: 80, icon: 'share' },
    { name: 'Firebase', level: 87, icon: 'local_fire_department' }
  ],
  tools: [
    { name: 'Git & GitHub', level: 95, icon: 'code_blocks' },
    { name: 'Docker', level: 82, icon: 'widgets' },
    { name: 'VS Code', level: 98, icon: 'code' },
    { name: 'Figma', level: 88, icon: 'design_services' },
    { name: 'Postman', level: 90, icon: 'send' },
    { name: 'Jest', level: 85, icon: 'science' }
  ]
};

export const languages = [
  { name: 'فارسی', level: 'زبان مادری', proficiency: 100 },
  { name: 'انگلیسی', level: 'پیشرفته', proficiency: 85 },
  { name: 'عربی', level: 'متوسط', proficiency: 60 }
];

export const certifications = [
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'دی ۱۴۰۲',
    credential: 'UC-XXXXXX'
  },
  {
    title: 'Node.js Developer Certification',
    issuer: 'MongoDB University',
    date: 'آذر ۱۴۰۲',
    credential: 'M001-XXXXX'
  },
  {
    title: 'Advanced CSS and Sass',
    issuer: 'Udemy',
    date: 'آبان ۱۴۰۲',
    credential: 'UC-YYYYYY'
  }
];

export const awards = [
  {
    title: 'رتبه اول مسابقه برنامه‌نویسی ACM ICPC',
    issuer: 'دانشگاه تهران',
    date: 'آبان ۱۴۰۱',
    description: 'حل موفقیت‌آمیز مسائل الگوریتمی پیچیده در مسابقه ملی'
  },
  {
    title: 'بهترین پروژه نوآورانه سال',
    issuer: 'شرکت فناوری پیشرو',
    date: 'اسفند ۱۴۰۱',
    description: 'توسعه سیستم مدیریت هوشمند با استفاده از یادگیری ماشین'
  },
  {
    title: 'کارمند برتر فصل',
    issuer: 'استودیو طراحی دیجیتال',
    date: 'مهر ۱۴۰۱',
    description: 'عملکرد درخشان در پروژه‌های مهم و افزایش رضایت مشتریان'
  }
];