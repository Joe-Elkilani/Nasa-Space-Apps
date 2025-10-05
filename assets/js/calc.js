const planets = [
    {
        id: "mercury",
        name: "Mercury — عطارد",
        a: 0.3871,
        radius: 2439.7,
        mass: 0.33011,
        gravity: 3.7,
        moons: 0,
        img: "https://images.unsplash.com/photo-1549921296-3a7a8f1b9b3c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "venus",
        name: "Venus — الزهرة",
        a: 0.7233,
        radius: 6051.8,
        mass: 4.8675,
        gravity: 8.87,
        moons: 0,
        img: "https://images.unsplash.com/photo-1532295812730-3dce0b0f1f9d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "earth",
        name: "Earth — الأرض",
        a: 1.0,
        radius: 6371.0,
        mass: 5.97237,
        gravity: 9.807,
        moons: 1,
        img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "mars",
        name: "Mars — المريخ",
        a: 1.5237,
        radius: 3389.5,
        mass: 0.64171,
        gravity: 3.721,
        moons: 2,
        img: "https://mars.nasa.gov/system/resources/detail_files/7762_msl_banner.jpg",
    },
    {
        id: "jupiter",
        name: "Jupiter — المشتري",
        a: 5.2026,
        radius: 69911,
        mass: 1898.2,
        gravity: 24.79,
        moons: 79,
        img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "saturn",
        name: "Saturn — زحل",
        a: 9.5549,
        radius: 58232,
        mass: 568.34,
        gravity: 10.44,
        moons: 83,
        img: "https://images.unsplash.com/photo-1545156521-7b6f4c3585c1?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "uranus",
        name: "Uranus — أورانوس",
        a: 19.2184,
        radius: 25362,
        mass: 86.81,
        gravity: 8.69,
        moons: 27,
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "neptune",
        name: "Neptune — نبتون",
        a: 30.1104,
        radius: 24622,
        mass: 102.413,
        gravity: 11.15,
        moons: 14,
        img: "https://images.unsplash.com/photo-1541199249256-438cb1f9c6b8?q=80&w=800&auto=format&fit=crop",
    },
];

// helpers
function getById(id) {
    return planets.find((p) => p.id === id);
}
function populateSelects() {
    const selA = document.getElementById("selA"),
        selB = document.getElementById("selB");
    planets.forEach((p, i) => {
        const o1 = document.createElement("option");
        o1.value = p.id;
        o1.textContent = p.name;
        const o2 = o1.cloneNode(true);
        selA.appendChild(o1);
        selB.appendChild(o2);
    });
    selA.value = "earth";
    selB.value = "mars";
}

function showPlanet(panel, id) {
    const p = getById(id);
    if (!p) return;
    document.getElementById(panel === "A" ? "imgA" : "imgB").src = p.img;
    document.getElementById(panel === "A" ? "nameA" : "nameB").innerText =
        p.name;
    document.getElementById(
        panel === "A" ? "descA" : "descB"
    ).innerText = `المسافة من الشمس: ${p.a} AU — عدد الأقمار: ${p.moons}`;
    const statsEl = document.getElementById(
        panel === "A" ? "statsA" : "statsB"
    );
    statsEl.innerHTML = "";
    addStat(statsEl, "نصف القطر (كم)", p.radius.toLocaleString() + " km");
    addStat(
        statsEl,
        "الكتلة (x10^24 kg تقريباً)",
        p.mass.toLocaleString() + " x10^24 kg"
    );
    addStat(statsEl, "الجاذبية السطحية (m/s²)", p.gravity + " m/s²");
    addStat(
        statsEl,
        "فترة مدارية (تقريبية بالأيام)",
        Math.round(p.a * 365).toLocaleString() + " يوم"
    );
    addStat(statsEl, "عدد الأقمار", p.moons);
}

function addStat(container, title, value) {
    const d = document.createElement("div");
    d.className = "stat-row";
    d.innerHTML = `<div class="stat-title">${title}</div><div class="stat-val">${value}</div>`;
    container.appendChild(d);
}

// comparison logic: compute ratio for bars (A relative to max(A,B) => percent)
function updateComparison() {
    const aId = document.getElementById("selA").value;
    const bId = document.getElementById("selB").value;
    const A = getById(aId),
        B = getById(bId);
    if (!A || !B) return;
    showPlanet("A", aId);
    showPlanet("B", bId);

    // values to compare
    const vals = {
        radius: [A.radius, B.radius],
        mass: [A.mass, B.mass],
        gravity: [A.gravity, B.gravity],
        moons: [A.moons, B.moons],
        au: [A.a, B.a],
    };

    setBar("Radius", vals.radius[0], vals.radius[1]);
    setBar("Mass", vals.mass[0], vals.mass[1]);
    setBar("Gravity", vals.gravity[0], vals.gravity[1]);
    setBar("Moons", vals.moons[0], vals.moons[1]);
    setBar("AU", vals.au[0], vals.au[1]);
}

function setBar(key, valA, valB) {
    // percent for A relative to max(A,B)
    const max = Math.max(valA, valB, 1); // avoid zero
    const pctA = (valA / max) * 100;
    const fill = document.getElementById("bar" + key);
    fill.style.width = pctA + "%";
    const lbl = document.getElementById("lbl" + key);
    lbl.innerText = `A: ${formatNum(valA)} — B: ${formatNum(valB)}`;
    // color intensity based on pct
    fill.style.background = `linear-gradient(90deg, rgba(11,61,145,0.95), rgba(230,57,70,0.95))`;
}

function formatNum(v) {
    if (typeof v === "number") {
        if (Math.abs(v) >= 1000 && v < 1e6)
            return Math.round(v).toLocaleString();
        return Number(v.toFixed(3)).toLocaleString();
    }
    return v;
}

function randomCompare() {
    const i = Math.floor(Math.random() * planets.length);
    let j = Math.floor(Math.random() * planets.length);
    while (j === i) j = Math.floor(Math.random() * planets.length);
    document.getElementById("selA").value = planets[i].id;
    document.getElementById("selB").value = planets[j].id;
    updateComparison();
}

function swapSelection() {
    const selA = document.getElementById("selA"),
        selB = document.getElementById("selB");
    const a = selA.value;
    selA.value = selB.value;
    selB.value = a;
    updateComparison();
}

// init
populateSelects();
document
    .getElementById("compareBtn")
    .addEventListener("click", updateComparison);
document
    .getElementById("randBtn")
    .addEventListener("click", randomCompare);
document
    .getElementById("swapBtn")
    .addEventListener("click", swapSelection);

// update on change
document
    .getElementById("selA")
    .addEventListener("change", () =>
        showPlanet("A", document.getElementById("selA").value)
    );
document
    .getElementById("selB")
    .addEventListener("change", () =>
        showPlanet("B", document.getElementById("selB").value)
    );

// default
showPlanet("A", "earth");
showPlanet("B", "mars");
updateComparison();