# 🎨 پروژه پورتفولیوی شخصی

یک وب‌سایت پورتفولیوی مدرن و حرفه‌ای با Next.js 15، React 19 و Material Design 3

## ✨ ویژگی‌ها

- 🎨 طراحی مدرن بر اساس Material Design 3
- 📱 کاملاً واکنش‌گرا (Responsive) برای تمام دستگاه‌ها
- ⚡ بهینه‌سازی شده برای عملکرد بالا
- 🌐 پشتیبانی کامل از زبان فارسی با فونت‌های وزیرمتن و یکان
- 🎭 انیمیشن‌های روان و جذاب
- ♿ قابلیت دسترسی (Accessibility)
- 🔍 بهینه‌سازی SEO
- 🎯 UI/UX بهینه و کاربرپسند

## 🛠️ تکنولوژی‌های استفاده شده

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: CSS-in-JS (Styled JSX)
- **Design System**: Material Design 3
- **Fonts**: Vazirmatn & Yekan
- **Icons**: Material Symbols

## 📦 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js نسخه 18 یا بالاتر
- npm یا yarn

### مراحل نصب

1. کلون کردن پروژه یا دانلود فایل‌ها

2. نصب وابستگی‌ها:
```bash
npm install
```

3. اجرای پروژه در حالت توسعه:
```bash
npm run dev
```

4. باز کردن مرورگر و مراجعه به:
```
http://localhost:3000
```

## 📁 ساختار پروژه

```
my-portfolio/
├── app/                    # صفحات و route‌های اصلی
│   ├── layout.js          # Layout اصلی
│   ├── page.js            # صفحه اصلی (Home)
│   ├── globals.css        # استایل‌های سراسری
│   ├── about/             # صفحه درباره من
│   │   └── page.js
│   ├── resume/            # صفحه رزومه
│   │   └── page.js
│   ├── projects/          # صفحات پروژه‌ها
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   └── contact/           # صفحه تماس
│       └── page.js
├── components/            # کامپوننت‌های قابل استفاده مجدد
│   ├── Navbar.js         # نوار ناوبری
│   └── Footer.js         # فوتر
├── data/                 # داده‌های استاتیک
│   ├── personal.js       # اطلاعات شخصی
│   ├── resume.js         # سوابق و تجربیات
│   └── projects.js       # لیست پروژه‌ها
├── utils/                # توابع کمکی
│   └── helpers.js        # توابع utility
└── public/               # فایل‌های عمومی
    └── images/
        └── projects/     # تصاویر پروژه‌ها
```

## 🎨 سفارشی‌سازی

### تغییر رنگ‌ها

رنگ‌های Material Design 3 در فایل `app/globals.css` تعریف شده‌اند:

```css
:root {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-secondary: #625B71;
  /* ... */
}
```

### ویرایش اطلاعات شخصی

فایل `data/personal.js` را باز کنید و اطلاعات خود را ویرایش کنید:

```javascript
export const personalInfo = {
  name: 'نام شما',
  title: 'عنوان شغلی',
  email: 'ایمیل شما',
  // ...
};
```

### اضافه کردن پروژه‌ها

پروژه‌های خود را در فایل `data/projects.js` اضافه کنید:

```javascript
{
  id: 'project-id',
  title: 'عنوان پروژه',
  shortDescription: 'توضیح کوتاه',
  description: 'توضیح کامل',
  category: 'وب',
  technologies: ['React', 'Node.js'],
  // ...
}
```

### اضافه کردن تصاویر

تصاویر پروژه‌های خود را در پوشه `public/images/projects/` قرار دهید.

## 🚀 ساخت برای تولید (Production)

```bash
npm run build
npm start
```

## 📝 دستورات مفید

- `npm run dev` - اجرای پروژه در حالت توسعه
- `npm run build` - ساخت نسخه بهینه شده
- `npm start` - اجرای نسخه تولید
- `npm run lint` - بررسی کد با ESLint

## 🌐 استقرار (Deployment)

### Vercel (پیشنهادی)

1. اکانت [Vercel](https://vercel.com) بسازید
2. پروژه را به GitHub push کنید
3. پروژه را در Vercel import کنید

```bash
# یا با Vercel CLI
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

## 📚 منابع یادگیری

- [مستندات Next.js](https://nextjs.org/docs)
- [مستندات React](https://react.dev)
- [راهنمای Material Design 3](https://m3.material.io)
- [فونت وزیرمتن](https://github.com/rastikerdar/vazirmatn)

## ✅ چک‌لیست قبل از استقرار

- [ ] تمام اطلاعات شخصی ویرایش شده
- [ ] تصاویر پروژه‌ها اضافه شده
- [ ] لینک‌های شبکه‌های اجتماعی به‌روز شده
- [ ] تست در مرورگرهای مختلف
- [ ] بررسی عملکرد با Lighthouse
- [ ] SEO بهینه‌سازی شده

## 🤝 مشارکت

برای مشارکت در این پروژه:

1. Fork کنید
2. یک branch جدید بسازید
3. تغییرات را commit کنید
4. Push کنید
5. یک Pull Request باز کنید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 📞 پشتیبانی

برای هرگونه سوال یا مشکل:
- ایمیل: info@example.com
- GitHub Issues: [لینک]

---

ساخته شده با ❤️ و Next.js

**نکته**: این یک پروژه نمونه است. لطفاً قبل از استفاده در محیط تولید، تمام اطلاعات را سفارشی‌سازی کنید.