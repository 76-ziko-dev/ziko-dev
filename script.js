/* =========================================================
   Ziko Developer — script.js
   Handles: i18n (AR/EN + RTL/LTR), mobile menu, header state,
   scroll progress, active nav, direction-aware reveal animations,
   counters, custom cursor, back-to-top, contact form -> WhatsApp.
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     1. Translations dictionary
     --------------------------------------------------------- */
  const translations = {
    "nav.home": { ar: "الرئيسية", en: "Home" },
    "nav.services": { ar: "الخدمات", en: "Services" },
    "nav.why": { ar: "لماذا أنا", en: "Why Me" },
    "nav.portfolio": { ar: "أعمالي", en: "Portfolio" },
    "nav.contact": { ar: "تواصل معي", en: "Contact" },

    "whatsapp.short": { ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" },

    "hero.title1": { ar: "اصنع موقعك الاحترافي", en: "Build Your Professional" },
    "hero.title2": { ar: "وطور حضورك على الإنترنت", en: "Website & Grow Online" },
    "hero.desc": {
      ar: "أقوم بتصميم وبرمجة مواقع إلكترونية عصرية، سريعة، ومتجاوبة مع جميع الأجهزة، تعكس هوية علامتك التجارية وتساعدك على الوصول لعملائك بثقة.",
      en: "I design and build modern, fast, fully responsive websites that reflect your brand identity and help you reach your customers with confidence."
    },
    "hero.btn1": { ar: "ابدأ الآن", en: "Start Now" },
    "hero.btn2": { ar: "شاهد أعمالي", en: "View My Work" },
    "hero.stat1": { ar: "مشروع منجز", en: "Projects done" },
    "hero.stat2": { ar: "رضا العملاء", en: "Client satisfaction" },
    "hero.stat3": { ar: "ساعة زمن استجابة", en: "Hour response time" },

    "services.title": { ar: "الخدمات التي أقدمها", en: "Services I Offer" },
    "services.subtitle": {
      ar: "حلول برمجية متكاملة تناسب مشروعك، مهما كان حجمه أو مجاله",
      en: "Complete web solutions tailored to your project, whatever its size or field"
    },
    "service1.title": { ar: "إنشاء المواقع الإلكترونية", en: "Website Creation" },
    "service1.desc": { ar: "مواقع مصممة من الصفر تعكس هوية مشروعك بتصميم عصري وأداء قوي.", en: "Websites built from scratch that reflect your brand with modern design and strong performance." },
    "service2.title": { ar: "مواقع المتاجر الإلكترونية", en: "E-commerce Websites" },
    "service2.desc": { ar: "متاجر إلكترونية متكاملة لعرض وبيع منتجاتك بسهولة وأمان.", en: "Complete online stores to showcase and sell your products easily and securely." },
    "service3.title": { ar: "تصميم متجاوب بالكامل", en: "Responsive Design" },
    "service3.desc": { ar: "موقعك يظهر بشكل مثالي على الهاتف، التابلت، والحاسوب دون أي مشاكل.", en: "Your site looks perfect on phones, tablets, and desktops with zero issues." },
    "service4.title": { ar: "إعادة تصميم المواقع", en: "Website Redesign" },
    "service4.desc": { ar: "تجديد موقعك القديم بتصميم حديث وأداء أسرع دون فقدان محتواك.", en: "Refresh your outdated site with modern design and faster performance, without losing your content." },

    "why.title": { ar: "لماذا تختارني؟", en: "Why Choose Me?" },
    "why.subtitle": {
      ar: "لأنني لا أبيع لك موقعاً فقط، بل شريكاً تقنياً يهتم بنجاح مشروعك.",
      en: "Because I don't just sell you a website — I become a technical partner invested in your success."
    },
    "why1.title": { ar: "تصميم عصري", en: "Modern Design" },
    "why1.desc": { ar: "واجهات أنيقة تواكب أحدث اتجاهات التصميم العالمية.", en: "Clean interfaces that follow the latest global design trends." },
    "why2.title": { ar: "متجاوب على الهاتف والحاسوب", en: "Responsive on Phone & PC" },
    "why2.desc": { ar: "تجربة استخدام سلسة على جميع الأجهزة والشاشات.", en: "A smooth experience across every device and screen size." },
    "why3.title": { ar: "أداء فائق السرعة", en: "Fast Performance" },
    "why3.desc": { ar: "مواقع محسّنة تفتح بسرعة وتحافظ على زوارك.", en: "Optimized sites that load fast and keep your visitors engaged." },
    "why4.title": { ar: "تجربة مستخدم احترافية", en: "Professional UI/UX" },
    "why4.desc": { ar: "تصميم مدروس يسهّل على الزائر إيجاد ما يبحث عنه.", en: "Thoughtful design that helps visitors find what they need instantly." },
    "why5.title": { ar: "أسعار مناسبة", en: "Affordable Prices" },
    "why5.desc": { ar: "حلول تناسب ميزانيتك دون التنازل عن الجودة.", en: "Solutions that fit your budget without compromising quality." },
    "why6.title": { ar: "تواصل مباشر ومستمر", en: "Direct Communication" },
    "why6.desc": { ar: "أكون معك في كل خطوة من بداية المشروع حتى تسليمه.", en: "I stay with you at every step, from kickoff to final delivery." },

    "portfolio.title": { ar: "أعمال منجزة بعناية", en: "Work Built With Care" },
    "portfolio.subtitle": {
      ar: "نماذج من مشاريع قمت بتطويرها لعملاء من مختلف المجالات",
      en: "Examples of projects I've developed for clients across different fields"
    },
    "portfolio.view": { ar: "عرض المشروع", en: "View Project" },
    "tag.store": { ar: "متجر إلكتروني", en: "Online Store" },
    "tag.portfolio": { ar: "بورتفوليو", en: "Portfolio" },
    "tag.business": { ar: "موقع شركة", en: "Business Site" },
    "tag.creator": { ar: "صفحة مبدع", en: "Creator Page" },
    "project1.name": { ar: "متجر أنوار", en: "Anwar Store" },
    "project1.cat": { ar: "تجارة إلكترونية", en: "E-commerce" },
    "project2.name": { ar: "استوديو لمسة", en: "Lamsa Studio" },
    "project2.cat": { ar: "أعمال إبداعية", en: "Creative Studio" },
    "project3.name": { ar: "مجموعة أطلس العقارية", en: "Atlas Real Estate Group" },
    "project3.cat": { ar: "عقارات", en: "Real Estate" },
    "project4.name": { ar: "قناة نور التقنية", en: "Nour Tech Channel" },
    "project4.cat": { ar: "صانع محتوى", en: "Content Creator" },

    "how.title": { ar: "كيف نعمل معاً", en: "How It Works" },
    "how.subtitle": {
      ar: "مسار واضح وبسيط من الفكرة إلى موقع جاهز للانطلاق",
      en: "A clear, simple path from your idea to a website ready to launch"
    },
    "step1.title": { ar: "تواصل معي", en: "Contact Me" },
    "step1.desc": { ar: "راسلني عبر واتساب لنتحدث عن فكرة مشروعك.", en: "Message me on WhatsApp to talk through your project idea." },
    "step2.title": { ar: "أخبرني باحتياجاتك", en: "Tell Me What You Need" },
    "step2.desc": { ar: "نحدد معاً الأهداف، التصميم، والخصائص المطلوبة.", en: "Together we define the goals, design, and features required." },
    "step3.title": { ar: "أبني موقعك", en: "I Build Your Website" },
    "step3.desc": { ar: "أطوّر الموقع وأسلمه لك جاهزاً للعمل بثقة.", en: "I develop your site and deliver it ready to go, with confidence." },

    "pricing.title": { ar: "الأسعار", en: "Pricing" },
    "pricing.text": {
      ar: "الثمن حسب نوع الموقع والخصائص التي تريدها",
      en: "Price depends on the website type and features you need"
    },
    "pricing.btn": { ar: "احصل على عرض سعر", en: "Get a Quote" },

    "contact.title": { ar: "لنبدأ مشروعك القادم", en: "Let's Start Your Next Project" },
    "contact.subtitle": {
      ar: "تواصل معي الآن وسأرد عليك في أقرب وقت لمناقشة تفاصيل موقعك.",
      en: "Reach out now and I'll get back to you shortly to discuss your website details."
    },
    "contact.whatsapp": { ar: "تواصل معي عبر واتساب", en: "Contact Me on WhatsApp" },
    "contact.instagram": { ar: "إنستغرام", en: "Instagram" },
    "contact.formNote": {
      ar: "هذا النموذج لا يرسل بيانات إلى أي خادم، سيتم فتح واتساب مباشرة برسالتك.",
      en: "This form doesn't send data to any server — it opens WhatsApp directly with your message."
    },
    "form.name": { ar: "الاسم", en: "Name" },
    "form.namePh": { ar: "اسمك الكامل", en: "Your full name" },
    "form.message": { ar: "الرسالة", en: "Message" },
    "form.messagePh": { ar: "أخبرني عن مشروعك...", en: "Tell me about your project..." },
    "form.send": { ar: "إرسال عبر واتساب", en: "Send via WhatsApp" },

    "footer.text": { ar: "أبني مواقع تليق بمشروعك.", en: "Building websites your project deserves." },
    "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" }
  };

  const WHATSAPP_NUMBER = "212698335680";

  /* ---------------------------------------------------------
     2. Language handling
     --------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll(".lang-btn");

  function applyLanguage(lang) {
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.textContent = translations[key][lang];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[key]) el.setAttribute("placeholder", translations[key][lang]);
    });

    langButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("ziko_lang", lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });

  const savedLang = localStorage.getItem("ziko_lang") || "ar";
  applyLanguage(savedLang);

  /* ---------------------------------------------------------
     3. Loader
     --------------------------------------------------------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader.classList.add("hidden"), 350);
  });

  /* ---------------------------------------------------------
     4. Header scrolled state + scroll progress + back-to-top
     --------------------------------------------------------- */
  const header = document.getElementById("header");
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function onScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    header.classList.toggle("scrolled", scrollTop > 30);
    scrollProgress.style.width = progress + "%";
    backToTop.classList.toggle("visible", scrollTop > 500);
  }
  window.addEventListener("scroll", onScrollUI, { passive: true });
  onScrollUI();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------------------------------------------------
     5. Mobile menu
     --------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  /* ---------------------------------------------------------
     6. Smooth scroll + active nav link on scroll
     --------------------------------------------------------- */
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id], .hero[id]");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((sec) => navObserver.observe(sec));

  /* ---------------------------------------------------------
     7. Scroll-direction aware reveal animations
     --------------------------------------------------------- */
  let lastScrollY = window.scrollY;
  let scrollDirection = "down";

  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.scrollY;
      scrollDirection = currentY > lastScrollY ? "down" : "up";
      lastScrollY = currentY <= 0 ? 0 : currentY;
    },
    { passive: true }
  );

  const revealEls = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (reduceMotion) {
          entry.target.classList.add("is-visible");
          return;
        }
        if (entry.isIntersecting) {
          entry.target.classList.remove("reverse-out");
          entry.target.classList.add("is-visible");
        } else if (scrollDirection === "up") {
          // Reverse the reveal naturally when scrolling back up past a section
          entry.target.classList.add("reverse-out");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------
     8. Animated counters
     --------------------------------------------------------- */
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.done) return;
        el.dataset.done = "true";

        const target = parseInt(el.getAttribute("data-count"), 10);
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
        }
        if (reduceMotion) {
          el.textContent = target;
        } else {
          requestAnimationFrame(tick);
        }
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => counterObserver.observe(el));

  /* ---------------------------------------------------------
     9. Custom cursor (desktop only)
     --------------------------------------------------------- */
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (isFinePointer && !reduceMotion) {
    document.body.classList.add("has-cursor");
    const cursorDot = document.getElementById("cursorDot");
    const cursorRing = document.getElementById("cursorRing");

    let ringX = 0, ringY = 0;
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
      ringX = e.clientX; ringY = e.clientY;
    });

    function animateRing() {
      const rect = cursorRing.getBoundingClientRect();
      const currentX = rect.left + rect.width / 2 || ringX;
      const currentY = rect.top + rect.height / 2 || ringY;
      const nextX = currentX + (ringX - currentX) * 0.18;
      const nextY = currentY + (ringY - currentY) * 0.18;
      cursorRing.style.left = nextX + "px";
      cursorRing.style.top = nextY + "px";
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    document.querySelectorAll("a, button, .service-card, .project-card").forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
    });
  }

  /* ---------------------------------------------------------
     10. Contact form -> opens WhatsApp with the message
     (front-end only — no backend, nothing is "sent" silently)
     --------------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.elements["name"].value.trim();
    const message = contactForm.elements["message"].value.trim();
    const currentLang = htmlEl.getAttribute("lang") || "ar";

    if (!name || !message) return;

    const prefix = currentLang === "ar" ? "مرحباً، اسمي" : "Hello, my name is";
    const msgLabel = currentLang === "ar" ? "مشروعي" : "Project details";
    const text = `${prefix} ${name}. ${msgLabel}: ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    formStatus.textContent =
      currentLang === "ar"
        ? "جاري فتح واتساب..."
        : "Opening WhatsApp...";

    window.open(url, "_blank", "noopener");
    contactForm.reset();
  });

  /* ---------------------------------------------------------
     11. Footer year
     --------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
