// my-portfolio/data/content.js

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
export const navbarContent = {
  logoText: 'پورتفولیو',
  mobileMenuAriaLabel: 'منوی موبایل',
  navItems: [
    { name: 'خانه',        path: '/',         icon: 'home'        },
    { name: 'درباره من',   path: '/about',    icon: 'person'      },
    { name: 'نمونه کارها', path: '/projects', icon: 'work'        },
    { name: 'تماس',        path: '/contact',  icon: 'mail'        },
  ],
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export const footerContent = {
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
  contactEmail: 'mahdiehsrwork@gmail.com',
  contactPhone: '09331960478',
  contactPhoneRaw: '+989331960478',
  contactLocation: 'کردستان، ایران',
  socialLinks: [
    { icon: 'code', url: 'https://github.com',        label: 'گیت‌هاب',  color: '#181717' },
    { icon: 'work', url: 'https://linkedin.com',      label: 'لینکدین',  color: '#0A66C2' },
    { icon: 'send', url: 'https://t.me',              label: 'تلگرام',   color: '#26A5E4' },
    { icon: 'mail', url: 'mailto:info@example.com',   label: 'ایمیل',    color: '#EA4335' },
  ],
};

// ─────────────────────────────────────────────
// LAYOUT / METADATA
// ─────────────────────────────────────────────
export const siteMetadata = {
  title: 'پورتفولیوی من - توسعه‌دهنده وب',
  description: 'نمونه‌کارها و پروژه‌های من در زمینه توسعه وب، طراحی رابط کاربری و برنامه‌نویسی',
  keywords: ['توسعه وب', 'برنامه‌نویسی', 'React', 'Next.js', 'طراحی UI/UX', 'فول استک'],
  authorName: 'مهدیه صفری',
  ogTitle: 'پورتفولیوی من',
  ogDescription: 'نمونه‌کارها و پروژه‌های من',
  ogLocale: 'fa_IR',
};

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export const homeContent = {
  hero: {
    badge: 'خوش آمدید به پورتفولیوی من',
    greeting: 'سلام، من مهدیه صفری',
    greetingSuffix: 'هستم',
    ctaPrimary: 'مشاهده نمونه کارها',
    ctaSecondary: 'تماس با من',
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
    sectionTitle: 'چرا من را انتخاب کنید؟',
    sectionSubtitle: 'ویژگی‌های کلیدی که من ارائه می‌دهم',
    items: [
      { icon: 'code',           title: 'کدنویسی تمیز',  description: 'نوشتن کد استاندارد، قابل نگهداری و بهینه'          },
      { icon: 'design_services',title: 'طراحی زیبا',    description: 'ایجاد رابط‌های کاربری جذاب و مدرن'                 },
      { icon: 'speed',          title: 'عملکرد بالا',   description: 'بهینه‌سازی سرعت و کارایی وب‌سایت‌ها'               },
      { icon: 'phone_android',  title: 'واکنش‌گرا',     description: 'سازگار با تمام دستگاه‌ها و صفحه‌نمایش‌ها'          },
    ],
  },
  cta: {
    title: 'آماده شروع پروژه‌ای جدید هستید؟',
    subtitle: 'بیایید با هم چیزی فوق‌العاده بسازیم',
    buttonText: 'همین الان شروع کنیم',
  },
};

// ─────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────
export const aboutContent = {
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
      { title: 'شروع سفر برنامه‌نویسی',    description: 'آشنایی با HTML, CSS و JavaScript و شروع یادگیری توسعه وب'              },
      { title: 'توسعه مهارت‌های Back-end', description: 'یادگیری Node.js و تبدیل شدن به توسعه‌دهنده Full Stack'                    },
    ],
  },
  values: {
    sectionTitle: 'ارزش‌های من',
    sectionSubtitle: 'اصولی که راهنمای کار من هستند',
    items: [
      { icon: 'lightbulb', title: 'خلاقیت',         description: 'ایجاد راه‌حل‌های نوآورانه و خلاقانه برای مسائل پیچیده'      },
      { icon: 'verified',  title: 'کیفیت',           description: 'تعهد به ارائه کدی با بالاترین کیفیت و استانداردها'           },
      { icon: 'school',    title: 'یادگیری مستمر',   description: 'همیشه به‌روز ماندن با آخرین تکنولوژی‌ها و روندها'            },
      { icon: 'handshake', title: 'همکاری تیمی',     description: 'باور به قدرت کار تیمی و تبادل دانش'                          },
    ],
  },
  cta: {
    title: 'بیایید با هم کار کنیم!',
    subtitle: 'آماده شروع یک پروژه جدید هستم. بیایید چیزی فوق‌العاده بسازیم',
    buttonText: 'تماس با من',
  },
};

// ─────────────────────────────────────────────
// CONTACT PAGE
// ─────────────────────────────────────────────
export const contactContent = {
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
};

// ─────────────────────────────────────────────
// PROJECTS PAGE
// ─────────────────────────────────────────────
export const projectsContent = {
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
};

// ─────────────────────────────────────────────
// PROJECT DETAIL PAGE
// ─────────────────────────────────────────────
export const projectDetailContent = {
  notFound: {
    title: 'پروژه یافت نشد',
    subtitle: 'متأسفانه پروژه مورد نظر شما یافت نشد',
    backButton: 'بازگشت به پروژه‌ها',
  },
  backLink: 'بازگشت به پروژه‌ها',
  infoLabels: {
    date:     'تاریخ انجام',
    duration: 'مدت زمان',
    role:     'نقش من',
    client:   'کارفرما',
  },
  sections: {
    about:        'درباره پروژه',
    technologies: 'تکنولوژی‌های استفاده شده',
    features:     'ویژگی‌های کلیدی',
    challenges:   'چالش‌ها',
    results:      'نتایج',
    links:        'لینک‌های پروژه',
  },
  links: {
    live:   'مشاهده پروژه آنلاین',
    github: 'مشاهده کد در GitHub',
  },
  navigation: {
    allProjects:    'همه پروژه‌ها',
    similarProject: 'پروژه مشابه می‌خواهید؟',
  },
};

// ─────────────────────────────────────────────
// RESUME PAGE
// ─────────────────────────────────────────────
export const resumeContent = {
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
    currentBadge:         'در حال حاضر',
    responsibilitiesLabel: 'مسئولیت‌ها:',
  },
  education: {
    gpaLabel: 'معدل:',
  },
};