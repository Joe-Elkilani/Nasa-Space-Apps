function createStars() {
    const starsContainer = document.getElementById("stars");
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        starsContainer.appendChild(star);
    }
}

// Generate floating particles
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        const size = Math.random() * 100 + 50;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particle.style.animationDuration = Math.random() * 20 + 15 + "s";
        particlesContainer.appendChild(particle);
    }
}

createStars();
createParticles();

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Chatbot functionality
const chatIcon = document.getElementById("chatIcon");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const alertBox = document.getElementById("alert");

function showAlert(message) {
    alertBox.textContent = "💡 " + message;
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 6000);
}

chatIcon.addEventListener("click", () => {
    chatbot.classList.toggle("active");
    if (chatbot.classList.contains("active")) {
        showAlert(
            "Ask me about: NASA, Space, Planets, Stars, Moon, Mars, Artemis, Astronauts, Rockets, Telescopes & more!"
        );
        chatInput.focus();
    }
});

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.innerHTML = `
                <div class="message-avatar">
                    <i class="fa-solid fa-${type === "bot" ? "robot" : "user"
        }"></i>
                </div>
                <div class="message-bubble">${text}</div>
            `;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
    const text = input.toLowerCase();

    const responses = {
        nasa: "🚀 NASA (National Aeronautics and Space Administration) is the United States government agency responsible for space exploration, aeronautics research, and space science. Founded in 1958, NASA has been at the forefront of human space exploration!",
        space:
            "🌌 Space is the vast, seemingly infinite expanse beyond Earth's atmosphere. It contains billions of galaxies, each with billions of stars, and countless planets, moons, and cosmic phenomena waiting to be discovered!",
        moon: "🌕 The Moon is Earth's only natural satellite. NASA's Apollo program successfully landed humans on the Moon in 1969, and the Artemis program aims to return humans to the lunar surface in the coming years!",
        mars: "🔴 Mars, the Red Planet, is a prime target for human exploration. NASA's Perseverance rover is currently exploring Mars, searching for signs of ancient microbial life and preparing for future human missions!",
        artemis:
            "🌙 Artemis is NASA's ambitious program to return humans to the Moon and establish a sustainable presence there. It will be the stepping stone for future missions to Mars and beyond!",
        sun: "☀️ The Sun is a massive star at the center of our solar system. It's about 4.6 billion years old and provides the light and heat necessary for life on Earth!",
        earth:
            "🌍 Earth is our home planet, the only known world to harbor life. It's the third planet from the Sun and has a perfect balance of conditions that make life possible!",
        jupiter:
            "🪐 Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined. Its Great Red Spot is a massive storm that's been raging for hundreds of years!",
        saturn:
            "💍 Saturn is famous for its spectacular ring system made of ice and rock particles. It's the second-largest planet in our solar system and has over 80 known moons!",
        star: "✨ Stars are massive celestial bodies made mostly of hydrogen and helium that produce light and heat through nuclear fusion. Our Sun is a medium-sized star, and there are billions of stars in our galaxy alone!",
        galaxy:
            "🌌 A galaxy is a massive system of stars, stellar remnants, gas, dust, and dark matter bound together by gravity. Our galaxy, the Milky Way, contains over 200 billion stars!",
        "black hole":
            "🕳️ Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse at the end of their lives!",
        astronaut:
            "👨‍🚀 Astronauts are highly trained individuals who travel to space to conduct scientific research, maintain spacecraft, and explore beyond Earth. They undergo years of rigorous training!",
        hubble:
            "🔭 The Hubble Space Telescope has been orbiting Earth since 1990, capturing breathtaking images of distant galaxies, nebulae, and other cosmic phenomena. It has revolutionized our understanding of the universe!",
        webb: "🌠 The James Webb Space Telescope is NASA's most powerful space telescope, launched in 2021. It can see further into space and time than ever before, observing the first galaxies that formed after the Big Bang!",
        iss: "🛰️ The International Space Station (ISS) is a habitable space station that orbits Earth. It serves as a microgravity laboratory where astronauts conduct scientific research!",
        rocket:
            "🚀 Rockets are powerful vehicles that use controlled explosions to propel spacecraft into orbit and beyond. NASA's Space Launch System (SLS) is the most powerful rocket ever built!",
        universe:
            "🌌 The universe is everything that exists: all matter, energy, space, and time. It's about 13.8 billion years old and is constantly expanding!",
        planet:
            "🪐 Planets are large celestial bodies that orbit stars. Our solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune!",
        comet:
            "☄️ Comets are icy celestial bodies that orbit the Sun. When they get close to the Sun, they heat up and release gas and dust, creating a glowing tail!",
        telescope:
            "🔭 Telescopes are instruments that collect and focus light to observe distant objects in space. They've helped us discover countless galaxies, planets, and cosmic phenomena!",
    };

    for (let key in responses) {
        if (text.includes(key)) {
            return responses[key];
        }
    }

    return "🤖 I'm here to help you explore space! Try asking me about: NASA, planets (Mars, Jupiter, Saturn), the Moon, stars, galaxies, black holes, astronauts, space telescopes (Hubble, Webb), the ISS, rockets, or the universe!";
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    chatInput.value = "";

    setTimeout(() => {
        const response = getBotResponse(text);
        addMessage(response, "bot");
    }, 600);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

clearBtn.addEventListener("click", () => {
    chatBody.innerHTML = `
                <div class="message bot">
                    <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
                    <div class="message-bubble">Hello! 👋 I'm your NASA AI assistant. Ask me anything about space exploration!</div>
                </div>
            `;
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero-content");
    parallaxElements.forEach((el) => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
function openOverlay(imgSrc, title) {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    const overlayText = document.getElementById("overlayText");

    overlayImg.src = imgSrc;
    overlayText.textContent = title;
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Close overlay when clicking outside the image
document
    .getElementById("overlay")
    .addEventListener("click", function (e) {
        if (e.target === this) {
            closeOverlay();
        }
    });

// Close overlay with Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeOverlay();
    }
});