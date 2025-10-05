const events = [
    {
        id: 1,
        date: "1957-10-04",
        titleAr: "سبوتنيك 1",
        titleEn: "Sputnik 1 launched",
        descAr:
            "أول قمر صناعي اصطناعي أطلقته البشرية، أرسلتها الاتحاد السوفيتي. بداية عصر الفضاء.",
        descEn:
            "The Soviet Union launched Sputnik 1 — the first artificial satellite, marking the start of the Space Age.",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sputnik_asm.jpg",
    },

    {
        id: 2,
        date: "1961-04-12",
        titleAr: "يوري غاغارين في الفضاء",
        titleEn: "Yuri Gagarin orbits Earth",
        descAr:
            "أول إنسان يدور حول الأرض — رائد الفضاء السوفييتي يوري غاغارين.",
        descEn:
            "Yuri Gagarin became the first human to orbit Earth aboard Vostok 1.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Yuri_Gagarin_%281961%29.jpg",
    },

    {
        id: 3,
        date: "1969-07-20",
        titleAr: "أبولو 11 — أول هبوط على القمر",
        titleEn: "Apollo 11 Moon landing",
        descAr:
            'المهمّة التي أوصلت نيل آرمسترونغ وباز ألدرين إلى سطح القمر؛ "خطوة صغيرة لإنسان".',
        descEn:
            "Apollo 11 landed humans on the Moon — Neil Armstrong and Buzz Aldrin walked on lunar surface.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/as11-40-5874.jpg",
    },

    {
        id: 4,
        date: "1971-04-19",
        titleAr: "مارينر 9 يصل مدار المريخ",
        titleEn: "Mariner 9 arrives at Mars",
        descAr:
            "أول مركبة تدخل مدار كوكب آخر (المريخ) وتبدأ تصوير سطحه بشكلٍ واسع.",
        descEn:
            "Mariner 9 became the first spacecraft to orbit another planet and mapped much of Mars.",
        img: "https://nasa-history-assets.s3.amazonaws.com/assets/mariner9.jpg",
    },

    {
        id: 5,
        date: "1990-04-24",
        titleAr: "إطلاق تلسكوب هابل",
        titleEn: "Hubble Space Telescope launched",
        descAr:
            "تلسكوب فضائي قدّم صورًا ثورية للكون وغير شكل علم الفلك البصري.",
        descEn:
            "Hubble was launched and has provided transformative images and data about the universe.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/sts31-hubble.jpg",
    },

    {
        id: 6,
        date: "1998-11-20",
        titleAr: "بداية بناء محطة الفضاء الدولية (ISS)",
        titleEn: "Start of the ISS assembly",
        descAr:
            "بدأ التجميع الدولي لمحطة الفضاء الدولية في المدار — تعاون دولي طويل الأمد.",
        descEn:
            "Assembly of the International Space Station began — a long-term international partnership in orbit.",
        img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/iss_assembly.jpg",
    },

    {
        id: 7,
        date: "2004-01-04",
        titleAr: "سبيريت وروفر أوبورتيونيتي إلى المريخ",
        titleEn: "Spirit & Opportunity rovers to Mars",
        descAr:
            "انطلاقة مهمتين روبوتيتين هدفت لاستكشاف تضاريس المريخ وبحث أدلة عن ماء قديم.",
        descEn:
            "Mars rovers Spirit and Opportunity launched to explore Mars surface and search for past water evidence.",
        img: "https://mars.nasa.gov/system/resources/detail_files/6000_PIA19091-web.jpg",
    },

    {
        id: 8,
        date: "2012-08-06",
        titleAr: "هبوط كيوريوسيتي على المريخ",
        titleEn: "Curiosity lands on Mars",
        descAr:
            "روفر كيوريوسيتي هبط على المريخ لدرس قابليته لدعم الحياة القديمة.",
        descEn:
            "NASA's Curiosity rover landed on Mars to study the planet's habitability.",
        img: "https://mars.nasa.gov/system/news_items/main_images/5206_PIA16322-16.jpg",
    },

    {
        id: 9,
        date: "2018-02-06",
        titleAr: "إطلاق مركبة (Parker Solar Probe)",
        titleEn: "Parker Solar Probe launch",
        descAr: "مهمة للتقرب من الشمس ودراسة الغلاف الجوي الشمسي (الكرونا).",
        descEn:
            "Parker Solar Probe launched to probe the Sun's outer atmosphere and solar wind.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/parker_probe_launch.jpg",
    },

    {
        id: 10,
        date: "2021-12-25",
        titleAr: "إطلاق تلسكوب جيمس ويب",
        titleEn: "James Webb Telescope launched",
        descAr:
            "أقوى تلسكوب فضائي يدرس المجرات الأولى وتكوين النجوم والكواكب.",
        descEn:
            "The James Webb Space Telescope launched to study the first galaxies and the formation of stars and planets.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/webb_launch.jpg",
    },

    {
        id: 11,
        date: "2020-02-18",
        titleAr: "هبوط المسبار الصيني تشانغ إي-5 (عينة إلى الأرض)",
        titleEn: "Chang'e-5 sample return (China)",
        descAr: "مهمة صينية نجحت في جمع عينات من القمر وإعادتها إلى الأرض.",
        descEn:
            "China's Chang'e-5 collected lunar samples and returned them to Earth.",
        img: "https://www.cnsa.gov.cn/images/2019chang_e5.jpg",
    },

    {
        id: 12,
        date: "2020-05-30",
        titleAr: "إطلاق سبيس إكس (Crew Dragon) أول رحلة مأهولة تجارية",
        titleEn: "SpaceX Crew Dragon first crewed flight",
        descAr:
            "أول عملية إطلاق مأهولة تجارية من شركة خاصة (رحلة إلى محطة الفضاء الدولية).",
        descEn:
            "SpaceX launched Crew Dragon on the first commercial crewed mission to the ISS.",
        img: "https://www.spacex.com/static/images/crew_dragon.jpg",
    },

    {
        id: 13,
        date: "2021-02-18",
        titleAr: "بيرسيفيرانس يهبط على المريخ",
        titleEn: "Perseverance lands on Mars",
        descAr:
            "مركبة بيرسيفيرانس تهبط في حوض جازييرو وتبدأ جمع عينات كبداية لبعثات استرجاع عينة مستقبلية.",
        descEn:
            "Perseverance rover landed at Jezero Crater and began collecting samples for future return missions.",
        img: "https://mars.nasa.gov/system/resources/detail_files/25476_PIA24491-web.jpg",
    },

    {
        id: 14,
        date: "2022-11-16",
        titleAr: "مهمة Artemis I (اختبار)",
        titleEn: "Artemis I (uncrewed test)",
        descAr:
            "رحلة اختبار لصاروخ SLS ومركبة Orion حول القمر، خطوة في برنامج العودة البشرية إلى القمر.",
        descEn:
            "Uncrewed Artemis I test flight of NASA's SLS rocket and Orion spacecraft around the Moon.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/artemis1_launch.jpg",
    },

    {
        id: 15,
        date: "2023-07-21",
        titleAr: "بعثات استكشاف جديدة ومهمة تجارب",
        titleEn: "New exploration missions & experiments",
        descAr:
            "تستمر مهمات استكشافية متعددة من وكالات مختلفة تستهدف القمر والمريخ والكويكبات.",
        descEn:
            "Multiple international exploration missions continue targeting the Moon, Mars and near-Earth objects.",
        img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
    },

    {
        id: 16,
        date: "2024-01-01",
        titleAr: "توسع التعاون الدولي في الفضاء",
        titleEn: "Expanded international space cooperation",
        descAr:
            "تزايد التعاون بين وكالات فضاء مختلفة ومشاريع مشتركة لمهام علمية وبشرية.",
        descEn:
            "Growing international partnerships and joint missions across space agencies for scientific and crewed missions.",
        img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
    },
];

// ====== rendering timeline items ======
const timelineEl = document.getElementById("timeline");
const detailImg = document.getElementById("detailImg");
const detailTitle = document.getElementById("detailTitle");
const detailDate = document.getElementById("detailDate");
const detailDesc = document.getElementById("detailDesc");
const langArBtn = document.getElementById("langAr");
const langEnBtn = document.getElementById("langEn");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clear");

let currentLang = "ar";
function renderList(list) {
    // clear existing events (keep the line)
    timelineEl.querySelectorAll(".event").forEach((n) => n.remove());
    list.sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first
    list.forEach((ev, idx) => {
        const div = document.createElement("div");
        div.className = "event";
        div.dataset.id = ev.id;
        div.innerHTML = `
          <div class="dot">${new Date(ev.date).getFullYear()}</div>
          <div class="date">${ev.date}</div>
          <div class="title">${currentLang === "ar" ? ev.titleAr : ev.titleEn
            }</div>
          <div class="summary">${currentLang === "ar" ? ev.descAr : ev.descEn
            }</div>
        `;
        div.addEventListener("click", () => showDetail(ev.id));
        timelineEl.appendChild(div);
    });
}

function showDetail(id) {
    const ev = events.find((e) => e.id === id);
    if (!ev) return;
    detailImg.src = ev.img || detailImg.src;
    detailTitle.innerText = currentLang === "ar" ? ev.titleAr : ev.titleEn;
    detailDate.innerText = ev.date;
    detailDesc.innerText = currentLang === "ar" ? ev.descAr : ev.descEn;
    // smooth scroll detail into view on small screens
    detailImg.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setLang(lang) {
    currentLang = lang;
    if (lang === "ar") {
        langArBtn.classList.add("active");
        langEnBtn.classList.remove("active");
    } else {
        langEnBtn.classList.add("active");
        langArBtn.classList.remove("active");
    }
    renderList(eventsFiltered);
    // if a detail currently shown, refresh it
    const shownId = parseInt(
        document.querySelector(".event")?.dataset.id || events[0].id
    );
    showDetail(shownId);
}

// search/filter
let eventsFiltered = events.slice();
function doSearch(q) {
    q = (q || "").trim().toLowerCase();
    if (!q) {
        eventsFiltered = events.slice();
        renderList(eventsFiltered);
        return;
    }
    eventsFiltered = events.filter((ev) => {
        return (
            ev.date.includes(q) ||
            ev.titleAr.toLowerCase().includes(q) ||
            ev.titleEn.toLowerCase().includes(q) ||
            ev.descAr.toLowerCase().includes(q) ||
            ev.descEn.toLowerCase().includes(q)
        );
    });
    renderList(eventsFiltered);
    // if result present show first
    if (eventsFiltered.length) showDetail(eventsFiltered[0].id);
    else {
        detailTitle.innerText = "لا توجد نتائج";
        detailDate.innerText = "—";
        detailDesc.innerText =
            'حاول كلمات بحث مختلفة (مثلاً: "Moon" أو "1969").';
    }
}

// wire controls
langArBtn.addEventListener("click", () => setLang("ar"));
langEnBtn.addEventListener("click", () => setLang("en"));
searchInput.addEventListener("input", (e) => doSearch(e.target.value));
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    doSearch("");
});

// initial render
renderList(eventsFiltered);
// show newest event detail by default
if (eventsFiltered.length) showDetail(eventsFiltered[0].id);
