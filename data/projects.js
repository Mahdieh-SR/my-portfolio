// data/projects.js

export const projects = [
  {
    id: 'portfolio-website',
    categoryKey: 'web',
    images: ['/images/projects/portfolio1.png', '/images/projects/portfolio2.png', '/images/projects/portfolio3.png'],
    technologies: ['Next.js', 'React', 'JavaScript', 'CSS (Material Design 3)'],
    date: { fa: '۱۴۰۵', en: '2026' },
    liveUrl: '[آدرس سایت روی Railway]',
    githubUrl: null,
    fa: {
      title: 'وب‌سایت نمونه‌کار شخصی (همین سایت)',
      shortDescription: 'پورتفولیوی شخصی با طراحی Material Design و پشتیبانی کامل از راست‌چین',
      description: 'همین وب‌سایتی که در حال مشاهده آن هستید؛ یک پورتفولیوی شخصی با Next.js که برای معرفی خودم، نمایش نمونه‌کارها، رزومه و راه ارتباطی طراحی و توسعه دادم. تمرکز اصلی روی طراحی تمیز بر پایه Material Design 3، پشتیبانی کامل از زبان فارسی و راست‌چین (RTL)، و ساختاری قابل نگهداری با جداسازی کامل محتوا از کامپوننت‌ها بوده.',
      duration: 'پروژه در حال توسعه مستمر',
      role: 'طراح و توسعه‌دهنده',
      client: 'پروژه شخصی',
      features: [
        'صفحات خانه، درباره من، نمونه‌کارها، رزومه و تماس',
        'طراحی مینیمال بر پایه Material Design 3 با تم رنگی اختصاصی',
        'پشتیبانی کامل از فارسی و چیدمان راست‌چین (RTL)',
        'جداسازی محتوا از کامپوننت‌ها برای مدیریت و به‌روزرسانی آسان',
        'فرم تماس با اعتبارسنجی کامل فیلدها',
        'طراحی کاملاً واکنش‌گرا برای موبایل و دسکتاپ'
      ],
      challenges: [
        'پیاده‌سازی صحیح چیدمان راست‌چین در کنار آیکون‌ها و فرم‌ها',
        'طراحی یک سیستم رنگ و تایپوگرافی یکپارچه برای کل سایت'
      ]
    },
    en: {
      title: 'Personal Portfolio Website (This Site)',
      shortDescription: 'A personal portfolio built with Material Design and full right-to-left (RTL) support',
      description: "The site you're viewing right now — a personal portfolio built with Next.js to introduce myself, showcase my work, and share my resume and contact details. The focus was on a clean design based on Material Design 3, full Persian and right-to-left (RTL) support, and a maintainable structure that keeps content fully separated from components.",
      duration: 'Ongoing development',
      role: 'Designer & Developer',
      client: 'Personal Project',
      features: [
        'Home, About, Projects, Resume, and Contact pages',
        'Minimal design based on Material Design 3 with a custom color theme',
        'Full Persian language and right-to-left (RTL) layout support',
        'Content separated from components for easy management and updates',
        'Contact form with complete field validation',
        'Fully responsive design for mobile and desktop'
      ],
      challenges: [
        'Correctly implementing right-to-left layout alongside icons and forms',
        'Designing a unified color and typography system across the entire site'
      ]
    }
  },
  {
    id: 'bakery-shirin',
    categoryKey: 'web',
    images: ['/images/projects/bakery1.png', '/images/projects/bakery2.png', '/images/projects/bakery3.png'],
    technologies: ['Next.js', 'React', 'JavaScript', 'CSS', 'Prisma', 'PostgreSQL'],
    date: { fa: '۱۴۰۵', en: '2026' },
    liveUrl: 'https://shirini-shop.vercel.app/',
    githubUrl: null,
    fa: {
      title: 'قنادی شیرین',
      shortDescription: 'یک وب‌سایت فروشگاهی فول‌استک برای یک قنادی، با پایگاه داده واقعی، احراز هویت و داشبورد کاربری',
      description: 'یک وب‌سایت فروشگاهی فول‌استک که با Next.js طراحی و توسعه دادم. برخلاف یک سایت نمایشی ساده، این پروژه روی یک بک‌اند واقعی اجرا می‌شه: پایگاه داده PostgreSQL با Prisma، سیستم کامل احراز هویت (ثبت‌نام و ورود کاربر)، و مسیرهای API اختصاصی برای مدیریت محصولات و سفارش‌ها. این سایت شامل صفحه اصلی با اسلایدر تبلیغاتی، بخش «داستان ما»، صفحه لیست محصولات، صفحات اختصاصی هر محصول و داشبورد کاربری است.',
      duration: '۳ هفته',
      role: 'طراح و توسعه‌دهنده فول‌استک',
      client: 'پروژه شخصی',
      features: [
        'معماری فول‌استک با Next.js (یکپارچه‌سازی فرانت‌اند و بک‌اند)',
        'پایگاه داده PostgreSQL با استفاده از Prisma ORM',
        'سیستم کامل احراز هویت: ثبت‌نام، ورود کاربر و داشبورد اختصاصی',
        'مسیرهای API اختصاصی برای مدیریت محصولات، دسته‌بندی‌ها و سفارش‌ها',
        'اسلایدر تبلیغاتی و بخش «داستان ما» در صفحه اصلی',
        'صفحه لیست محصولات با تصاویر، قیمت و برچسب تخفیف',
        'صفحه اختصاصی هر محصول با تصاویر، توضیحات و شمارنده تعداد',
        'طراحی هماهنگ با هویت بصری گرم قنادی (رنگ طلایی و کرم)'
      ],
      challenges: [
        'طراحی اسکیمای پایگاه داده برای محصولات، دسته‌بندی‌ها، کاربران و سفارش‌ها',
        'پیاده‌سازی احراز هویت و محافظت از مسیرهای داشبورد کاربر',
        'هماهنگ کردن رنگ‌بندی و طراحی با حس گرم و سنتی یک قنادی'
      ]
    },
    en: {
      title: 'Shirini Confectionery',
      shortDescription: 'A full-stack e-commerce website for a confectionery shop, with a real database, authentication, and user dashboard',
      description: 'A full-stack e-commerce website I designed and developed with Next.js. Unlike a static showcase site, this project runs on a real backend: a PostgreSQL database with Prisma, a full authentication system (user sign-up and login), and custom API routes for managing products and orders. It features a homepage with a promotional slider, an "Our Story" section, a product listing page, dedicated product pages, and a user dashboard.',
      duration: '3 weeks',
      role: 'Full-Stack Designer & Developer',
      client: 'Personal Project',
      features: [
        'Full-stack architecture with Next.js (integrated frontend and backend)',
        'PostgreSQL database with Prisma ORM',
        'Complete authentication system: sign-up, login, and user dashboard',
        'Custom API routes for managing products, categories, and orders',
        'Promotional slider and "Our Story" section on the homepage',
        'Product listing page with images, pricing, and discount badges',
        'Dedicated product pages with images, descriptions, and a quantity counter',
        'Design aligned with the warm visual identity of a confectionery (gold and cream palette)'
      ],
      challenges: [
        'Designing the database schema for products, categories, users, and orders',
        'Implementing authentication and protecting user dashboard routes',
        'Matching the color scheme and design to the warm, traditional feel of a confectionery'
      ]
    }
  },
];
