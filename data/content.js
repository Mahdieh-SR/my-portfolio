// my-portfolio/data/content.js

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
export const navbarContent = {
  fa: {
    logoText: 'پورتفولیو',
    logoRole: 'توسعه‌دهنده وب',
    mobileMenuAriaLabel: 'منوی موبایل',
    availabilityBadge: 'آماده همکاری',
    ctaText: 'بیایید همکاری کنیم',
    langSwitchLabel: 'EN',
    navItems: [
      { name: 'خانه',        path: '/',         icon: 'home'        },
      { name: 'درباره من',   path: '/about',    icon: 'person'      },
      { name: 'نمونه کارها', path: '/projects', icon: 'work'        },
      { name: 'تماس',        path: '/contact',  icon: 'mail'        },
    ],
  },
  en: {
    logoText: 'Portfolio',
    logoRole: 'Web Developer',
    mobileMenuAriaLabel: 'Mobile menu',
    availabilityBadge: 'Available for work',
    ctaText: "Let's work together",
    langSwitchLabel: 'FA',
    navItems: [
      { name: 'Home',     path: '/',         icon: 'home'   },
      { name: 'About',    path: '/about',    icon: 'person' },
      { name: 'Projects', path: '/projects', icon: 'work'   },
      { name: 'Contact',  path: '/contact',  icon: 'mail'   },
    ],
  },
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export const footerContent = {
  fa: {
    brandTitle: 'پورتفولیوی من',
    brandDescription: 'توسعه‌دهنده وب با تمرکز بر ساخت تجربیات دیجیتال خلاقانه و کاربردی. علاقه‌مند به یادگیری تکنولوژی‌های جدید و حل مسائل پیچیده.',
    quickLinksTitle: 'دسترسی سریع',
    servicesTitle: 'خدمات',
    contactTitle: 'ارتباط با من',
    copyrightSuffix: 'تمامی حقوق محفوظ است',
    builtWith: 'ساخته شده با',
    builtWithTech: 'و Next.js',
    quickLinks: [
      { name: 'خانه',        path: '/'         },
      { name: 'درباره من',   path: '/about'    },
      { name: 'رزومه',       path: '/resume'   },
      { name: 'نمونه کارها', path: '/projects' },
      { name: 'تماس',        path: '/contact'  },
    ],
    services: [
      'طراحی و توسعه وب‌سایت',
      'برنامه‌نویسی Front-end',
      'برنامه‌نویسی Back-end',
      'طراحی رابط کاربری',
    ],
    contactLocation: 'کردستان، ایران',
    socialLinks: [
      { icon: 'code', url: 'https://github.com',        label: 'گیت‌هاب',  color: '#181717' },
      { icon: 'work', url: 'https://linkedin.com',      label: 'لینکدین',  color: '#0A66C2' },
      { icon: 'send', url: 'https://t.me',              label: 'تلگرام',   color: '#26A5E4' },
      { icon: 'mail', url: 'mailto:info@example.com',   label: 'ایمیل',    color: '#EA4335' },
    ],
  },
  en: {
    brandTitle: 'My Portfolio',
    brandDescription: 'Web developer focused on building creative and practical digital experiences. Passionate about learning new technologies and solving complex problems.',
    quickLinksTitle: 'Quick Links',
    servicesTitle: 'Services',
    contactTitle: 'Get in Touch',
    copyrightSuffix: 'All rights reserved',
    builtWith: 'Built with',
    builtWithTech: 'and Next.js',
    quickLinks: [
      { name: 'Home',     path: '/'         },
      { name: 'About',    path: '/about'    },
      { name: 'Resume',   path: '/resume'   },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact',  path: '/contact'  },
    ],
    services: [
      'Website Design & Development',
      'Front-end Development',
      'Back-end Development',
      'UI Design',
    ],
    contactLocation: 'Kurdistan, Iran',
    socialLinks: [
      { icon: 'code', url: 'https://github.com',        label: 'GitHub',   color: '#181717' },
      { icon: 'work', url: 'https://linkedin.com',      label: 'LinkedIn', color: '#0A66C2' },
      { icon: 'send', url: 'https://t.me',              label: 'Telegram', color: '#26A5E4' },
      { icon: 'mail', url: 'mailto:info@example.com',   label: 'Email',    color: '#EA4335' },
    ],
  },
};

// contactEmail / contactPhone / contactPhoneRaw are not language-specific
export const footerContact = {
  contactEmail: 'mahdiehsrwork@gmail.com',
  contactPhone: '09331960478',
  contactPhoneRaw: '+989331960478',
};

// ─────────────────────────────────────────────
// LAYOUT / METADATA
// ─────────────────────────────────────────────
export const siteMetadata = {
  fa: {
    title: 'پورتفولیوی من - توسعه‌دهنده وب',
    description: 'نمونه‌کارها و پروژه‌های من در زمینه توسعه وب، طراحی رابط کاربری و برنامه‌نویسی',
    keywords: ['توسعه وب', 'برنامه‌نویسی', 'React', 'Next.js', 'طراحی UI/UX', 'فول استک'],
    authorName: 'مهدیه صفری',
    ogTitle: 'پورتفولیوی من',
    ogDescription: 'نمونه‌کارها و پروژه‌های من',
    ogLocale: 'fa_IR',
  },
  en: {
    title: 'My Portfolio - Web Developer',
    description: 'My portfolio and projects in web development, UI design and programming',
    keywords: ['web development', 'programming', 'React', 'Next.js', 'UI/UX design', 'full stack'],
    authorName: 'Mahdieh Safari',
    ogTitle: 'My Portfolio',
    ogDescription: 'My portfolio and projects',
    ogLocale: 'en_US',
  },
};

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export const homeContent = {
  fa: {
    hero: {
      badge: 'خوش آمدید به پورتفولیوی من',
      greetingPrefix: 'سلام، من',
      greetingSuffix: 'هستم',
      ctaPrimary: 'مشاهده نمونه کارها',
      ctaSecondary: 'تماس با من',
      aiLabel: 'هوش مصنوعی',
    },
    skills: [
      { name: 'React',       icon: 'code'          },
      { name: 'Next.js',     icon: 'rocket_launch' },
      { name: 'JavaScript',  icon: 'javascript'    },
      { name: 'TypeScript',  icon: 'settings'      },
      { name: 'Node.js',     icon: 'dns'           },
      { name: 'Tailwind',    icon: 'palette'       },
    ],
    stats: [
      { number: '50+',  label: 'پروژه موفق',   icon: 'folder'   },
      { number: '5+',   label: 'سال تجربه',    icon: 'schedule' },
      { number: '30+',  label: 'مشتری راضی',   icon: 'groups'   },
      { number: '100%', label: 'رضایت',        icon: 'verified' },
    ],
    features: {
      sectionTag: 'چرا من؟',
      sectionTitle: 'چرا من را انتخاب کنید؟',
      sectionSubtitle: 'ویژگی‌های کلیدی که من ارائه می‌دهم',
      items: [
        { icon: 'code',            title: 'کدنویسی تمیز',  description: 'نوشتن کد استاندارد، قابل نگهداری و بهینه'          },
        { icon: 'design_services', title: 'طراحی زیبا',    description: 'ایجاد رابط‌های کاربری جذاب و مدرن'                 },
        { icon: 'speed',           title: 'عملکرد بالا',   description: 'بهینه‌سازی سرعت و کارایی وب‌سایت‌ها'               },
        { icon: 'phone_android',   title: 'واکنش‌گرا',     description: 'سازگار با تمام دستگاه‌ها و صفحه‌نمایش‌ها'          },
      ],
    },
    cta: {
      title: 'آماده شروع پروژه‌ای جدید هستید؟',
      subtitle: 'بیایید با هم چیزی فوق‌العاده بسازیم',
      buttonText: 'همین الان شروع کنیم',
    },
  },
  en: {
    hero: {
      badge: 'Welcome to my portfolio',
      greetingPrefix: "Hi, I'm",
      greetingSuffix: '',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact Me',
      aiLabel: 'AI',
    },
    skills: [
      { name: 'React',       icon: 'code'          },
      { name: 'Next.js',     icon: 'rocket_launch' },
      { name: 'JavaScript',  icon: 'javascript'    },
      { name: 'TypeScript',  icon: 'settings'      },
      { name: 'Node.js',     icon: 'dns'           },
      { name: 'Tailwind',    icon: 'palette'       },
    ],
    stats: [
      { number: '50+',  label: 'Successful Projects', icon: 'folder'   },
      { number: '5+',   label: 'Years of Experience', icon: 'schedule' },
      { number: '30+',  label: 'Happy Clients',       icon: 'groups'   },
      { number: '100%', label: 'Satisfaction',        icon: 'verified' },
    ],
    features: {
      sectionTag: 'Why Me?',
      sectionTitle: 'Why Choose Me?',
      sectionSubtitle: 'Key strengths I bring to every project',
      items: [
        { icon: 'code',            title: 'Clean Code',        description: 'Writing standardized, maintainable and optimized code'      },
        { icon: 'design_services', title: 'Beautiful Design',  description: 'Crafting engaging, modern user interfaces'                  },
        { icon: 'speed',           title: 'High Performance',  description: 'Optimizing website speed and efficiency'                    },
        { icon: 'phone_android',   title: 'Responsive',        description: 'Compatible with every device and screen size'               },
      ],
    },
    cta: {
      title: 'Ready to start a new project?',
      subtitle: "Let's build something amazing together",
      buttonText: 'Get Started Now',
    },
  },
};

// ─────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────
export const aboutContent = {
  fa: {
    hero: {
      title: 'درباره من',
      subtitle: 'بیشتر با من و مسیر حرفه‌ای‌ام آشنا شوید',
    },
    sections: [
      {
        icon: 'person',
        title: 'درباره من',
        content: 'من یک توسعه‌دهنده فول استک با تجربه در زمینه طراحی و توسعه وب هستم. علاقه‌مند به یادگیری تکنولوژی‌های جدید و ایجاد تجربیات کاربری منحصر به فرد.',
      },
      {
        icon: 'favorite',
        title: 'علایق و اهداف',
        content: 'علاقه‌مند به توسعه محصولات دیجیتال که تاثیر مثبت در زندگی افراد داشته باشند. هدف من ایجاد راه‌حل‌های نوآورانه و کاربرپسند با استفاده از جدیدترین تکنولوژی‌ها است.',
      },
      {
        icon: 'rocket_launch',
        title: 'فلسفه کاری',
        content: 'باور دارم که کد خوب، کدی است که قابل خواندن، نگهداری و توسعه باشد. همیشه سعی می‌کنم بهترین شیوه‌ها را دنبال کنم و از الگوهای طراحی مناسب استفاده کنم.',
      },
    ],
    journey: {
      sectionTitle: 'سفر من',
      sectionSubtitle: 'از شروع تا امروز',
      items: [
        { year: 'مهر ۱۴۰۴',     title: 'شروع مسیر برنامه‌نویسی',   description: 'با گذروندن یک دوره فشرده، پایه‌های HTML، CSS و JavaScript رو یاد گرفتم و خیلی زود با React آشنا شدم.' },
        { year: 'زمستان ۱۴۰۴',  title: 'تسلط بر React و Next.js', description: 'با تمرین مستمر روی پروژه‌های واقعی، مهارت‌هام رو در React، Next.js و TypeScript تقویت کردم و به سمت توسعه Full Stack با Node.js حرکت کردم.' },
        { year: '۱۴۰۵ - اکنون', title: 'شروع فعالیت فریلنسری',     description: 'الان به‌صورت فریلنس روی پروژه‌های وب کار می‌کنم؛ از جمله همین وب‌سایت پورتفولیو و یک وب‌سایت قنادی که با Next.js توسعه دادم.' },
      ],
    },
    values: {
      sectionTitle: 'ارزش‌های من',
      sectionSubtitle: 'اصولی که راهنمای کار من هستند',
      items: [
        { icon: 'lightbulb', title: 'خلاقیت',        description: 'ایجاد راه‌حل‌های نوآورانه و خلاقانه برای مسائل پیچیده'      },
        { icon: 'verified',  title: 'کیفیت',          description: 'تعهد به ارائه کدی با بالاترین کیفیت و استانداردها'           },
        { icon: 'school',    title: 'یادگیری مستمر',  description: 'همیشه به‌روز ماندن با آخرین تکنولوژی‌ها و روندها'            },
        { icon: 'handshake', title: 'همکاری تیمی',    description: 'باور به قدرت کار تیمی و تبادل دانش'                          },
      ],
    },
    cta: {
      title: 'بیایید با هم کار کنیم!',
      subtitle: 'آماده شروع یک پروژه جدید هستم. بیایید چیزی فوق‌العاده بسازیم',
      buttonText: 'تماس با من',
    },
  },
  en: {
    hero: {
      title: 'About Me',
      subtitle: 'Learn more about me and my professional journey',
    },
    sections: [
      { icon: 'person',        title: 'About Me',          content: "I'm a full-stack developer with experience in web design and development. I'm passionate about learning new technologies and building unique user experiences." },
      { icon: 'favorite',      title: 'Interests & Goals', content: "I'm driven by building digital products that make a positive difference in people's lives. My goal is to create innovative, user-friendly solutions using modern technologies." },
      { icon: 'rocket_launch', title: 'Work Philosophy',   content: "I believe good code is code that's readable, maintainable, and built to grow. I follow best practices and apply the right design patterns for the job." },
    ],
    journey: {
      sectionTitle: 'My Journey',
      sectionSubtitle: 'From the beginning to today',
      items: [
        { year: 'October 2025',    title: 'Starting My Programming Journey', description: 'Through an intensive course, I learned the fundamentals of HTML, CSS, and JavaScript, and quickly moved on to React.' },
        { year: 'Winter 2025–26',  title: 'Mastering React & Next.js',       description: 'Through consistent practice on real projects, I strengthened my skills in React, Next.js, and TypeScript, and moved toward full-stack development with Node.js.' },
        { year: '2026 – Present',  title: 'Going Freelance',                 description: 'I now work as a freelance web developer. My recent work includes this portfolio site and a full-stack confectionery e-commerce site built with Next.js.' },
      ],
    },
    values: {
      sectionTitle: 'My Values',
      sectionSubtitle: 'The principles that guide my work',
      items: [
        { icon: 'lightbulb', title: 'Creativity',            description: 'Building innovative, creative solutions to complex problems' },
        { icon: 'verified',  title: 'Quality',                description: 'Committed to delivering code of the highest quality and standards' },
        { icon: 'school',    title: 'Continuous Learning',    description: 'Always staying current with the latest technologies and trends' },
        { icon: 'handshake', title: 'Collaboration',          description: 'A belief in the power of teamwork and shared knowledge' },
      ],
    },
    cta: {
      title: "Let's work together!",
      subtitle: "Ready to start a new project. Let's build something great together.",
      buttonText: 'Contact Me',
    },
  },
};

// ─────────────────────────────────────────────
// CONTACT PAGE
// ─────────────────────────────────────────────
export const contactContent = {
  fa: {
    hero: {
      title: 'ارتباط با من',
      subtitle: 'آماده همکاری و پاسخگویی به سوالات شما هستم',
    },
    infoSection: {
      title: 'اطلاعات تماس',
      socialTitle: 'شبکه‌های اجتماعی',
      availabilityTitle: 'آمادگی همکاری',
    },
    contactMethods: [
      { icon: 'mail',        title: 'ایمیل', color: '#EA4335' },
      { icon: 'call',        title: 'تلفن',  color: '#34A853' },
      { icon: 'location_on', title: 'آدرس',  color: '#4285F4' },
    ],
    socialLinks: [
      { icon: 'code', label: 'گیت‌هاب',  color: '#181717' },
      { icon: 'work', label: 'لینکدین',  color: '#0A66C2' },
      { icon: 'send', label: 'تلگرام',   color: '#26A5E4' },
      { icon: 'mail', label: 'ایمیل',    color: '#EA4335' },
    ],
    form: {
      title: 'ارسال پیام',
      description: 'لطفا فرم زیر را تکمیل کنید تا در اسرع وقت پاسخ شما را بدهم',
      fields: {
        name:    { label: 'نام *',      placeholder: 'نام شما'                    },
        email:   { label: 'ایمیل *',    placeholder: 'example@email.com'          },
        subject: { label: 'موضوع *',    placeholder: 'موضوع پیام را وارد کنید'    },
        message: { label: 'پیام *',     placeholder: 'پیام خود را اینجا بنویسید...' },
      },
      submitButton:    'ارسال پیام',
      submittingButton: 'در حال ارسال...',
      successMessage:  'پیام شما با موفقیت ارسال شد. به زودی پاسخ خواهم داد',
      validation: {
        nameRequired:    'لطفا نام خود را وارد کنید',
        emailRequired:   'لطفا ایمیل خود را وارد کنید',
        emailInvalid:    'فرمت ایمیل صحیح نیست',
        subjectRequired: 'لطفا موضوع را وارد کنید',
        messageRequired: 'لطفا پیام خود را وارد کنید',
        messageTooShort: 'پیام باید حداقل ۱۰ کاراکتر باشد',
      },
    },
  },
  en: {
    hero: {
      title: 'Get in Touch',
      subtitle: "Ready to collaborate and answer your questions",
    },
    infoSection: {
      title: 'Contact Information',
      socialTitle: 'Social Media',
      availabilityTitle: 'Availability',
    },
    contactMethods: [
      { icon: 'mail',        title: 'Email',   color: '#EA4335' },
      { icon: 'call',        title: 'Phone',   color: '#34A853' },
      { icon: 'location_on', title: 'Address', color: '#4285F4' },
    ],
    socialLinks: [
      { icon: 'code', label: 'GitHub',   color: '#181717' },
      { icon: 'work', label: 'LinkedIn', color: '#0A66C2' },
      { icon: 'send', label: 'Telegram', color: '#26A5E4' },
      { icon: 'mail', label: 'Email',    color: '#EA4335' },
    ],
    form: {
      title: 'Send a Message',
      description: "Please fill out the form below and I'll get back to you as soon as possible",
      fields: {
        name:    { label: 'Name *',    placeholder: 'Your name'                 },
        email:   { label: 'Email *',   placeholder: 'example@email.com'         },
        subject: { label: 'Subject *', placeholder: 'Enter the subject'         },
        message: { label: 'Message *', placeholder: 'Write your message here...' },
      },
      submitButton:    'Send Message',
      submittingButton: 'Sending...',
      successMessage:  "Your message was sent successfully. I'll reply soon.",
      validation: {
        nameRequired:    'Please enter your name',
        emailRequired:   'Please enter your email',
        emailInvalid:    'Invalid email format',
        subjectRequired: 'Please enter a subject',
        messageRequired: 'Please enter your message',
        messageTooShort: 'Message must be at least 10 characters',
      },
    },
  },
};

// ─────────────────────────────────────────────
// PROJECTS PAGE
// ─────────────────────────────────────────────
export const projectsContent = {
  fa: {
    hero: {
      title: 'نمونه کارهای من',
      subtitle: 'مجموعه‌ای از پروژه‌های موفق و خلاقانه که با تخصص و دقت طراحی و توسعه داده‌ام',
    },
    filter: {
      label: 'فیلتر بر اساس:',
      countSuffix: 'پروژه یافت شد',
    },
    card: {
      viewDetails: 'مشاهده جزئیات',
      viewDetailsOverlay: 'مشاهده جزئیات',
    },
    emptyState: {
      title: 'پروژه‌ای یافت نشد',
      subtitle: 'در این دسته‌بندی پروژه‌ای وجود ندارد',
      resetButton: 'نمایش همه پروژه‌ها',
    },
    categoryLabels: {
      all:     'همه',
      web:     'وب',
      mobile:  'موبایل',
      desktop: 'دسکتاپ',
    },
  },
  en: {
    hero: {
      title: 'My Projects',
      subtitle: "A collection of successful, creative projects I've designed and developed with care",
    },
    filter: {
      label: 'Filter by:',
      countSuffix: 'projects found',
    },
    card: {
      viewDetails: 'View Details',
      viewDetailsOverlay: 'View Details',
    },
    emptyState: {
      title: 'No projects found',
      subtitle: 'There are no projects in this category',
      resetButton: 'Show all projects',
    },
    categoryLabels: {
      all:     'All',
      web:     'Web',
      mobile:  'Mobile',
      desktop: 'Desktop',
    },
  },
};

export const categoryKeys = ['all', 'web', 'mobile', 'desktop'];

// ─────────────────────────────────────────────
// PROJECT DETAIL PAGE
// ─────────────────────────────────────────────
export const projectDetailContent = {
  fa: {
    notFound: {
      title: 'پروژه یافت نشد',
      subtitle: 'متأسفانه پروژه مورد نظر شما یافت نشد',
      backButton: 'بازگشت به پروژه‌ها',
    },
    backLink: 'بازگشت به پروژه‌ها',
    liveLink: 'مشاهده سایت زنده',
    lightbox: {
      close: 'بستن',
      prev: 'عکس قبلی',
      next: 'عکس بعدی',
    },
    infoLabels: {
      date:     'تاریخ انجام',
      duration: 'مدت زمان',
      role:     'نقش من',
      client:   'کارفرما',
    },
    sections: {
      about:        'درباره پروژه',
      gallery:      'تصاویر پروژه',
      technologies: 'تکنولوژی‌های استفاده شده',
      features:     'ویژگی‌های کلیدی',
      challenges:   'چالش‌ها',
      results:      'نتایج',
    },
    navigation: {
      allProjects:    'همه پروژه‌ها',
      similarProject: 'پروژه مشابه می‌خواهید؟',
    },
  },
  en: {
    notFound: {
      title: 'Project not found',
      subtitle: "Sorry, we couldn't find the project you're looking for",
      backButton: 'Back to Projects',
    },
    backLink: 'Back to Projects',
    liveLink: 'View Live Site',
    lightbox: {
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
    },
    infoLabels: {
      date:     'Date',
      duration: 'Duration',
      role:     'My Role',
      client:   'Client',
    },
    sections: {
      about:        'About the Project',
      gallery:      'Project Gallery',
      technologies: 'Technologies Used',
      features:     'Key Features',
      challenges:   'Challenges',
      results:      'Results',
    },
    navigation: {
      allProjects:    'All Projects',
      similarProject: 'Want a similar project?',
    },
  },
};

// ─────────────────────────────────────────────
// RESUME PAGE
// ─────────────────────────────────────────────
export const resumeContent = {
  fa: {
    hero: {
      title:          'رزومه من',
      subtitle:       'تجربیات، مهارت‌ها و دستاوردهای حرفه‌ای',
      downloadButton: 'دانلود رزومه PDF',
    },
    sections: {
      experience:     'تجربیات کاری',
      education:      'تحصیلات',
      skills:         'مهارت‌های تخصصی',
      languages:      'زبان‌ها',
      certifications: 'گواهینامه‌ها',
      awards:         'دستاوردها و جوایز',
    },
    skillCategories: {
      frontend: 'Front-end Development',
      backend:  'Back-end Development',
      tools:    'ابزارها و تکنولوژی‌ها',
    },
    experience: {
      currentBadge:          'در حال حاضر',
      responsibilitiesLabel: 'مسئولیت‌ها:',
    },
    education: {
      gpaLabel: 'معدل:',
    },
  },
  en: {
    hero: {
      title:          'My Resume',
      subtitle:       'Experience, skills and professional achievements',
      downloadButton: 'Download PDF Resume',
    },
    sections: {
      experience:     'Work Experience',
      education:      'Education',
      skills:         'Skills',
      languages:      'Languages',
      certifications: 'Certifications',
      awards:         'Awards',
    },
    skillCategories: {
      frontend: 'Front-end Development',
      backend:  'Back-end Development',
      tools:    'Tools & Technologies',
    },
    experience: {
      currentBadge:          'Current',
      responsibilitiesLabel: 'Responsibilities:',
    },
    education: {
      gpaLabel: 'GPA:',
    },
  },
};
