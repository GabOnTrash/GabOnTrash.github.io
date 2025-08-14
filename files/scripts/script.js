// === GALLERIA IMMAGINI SFONDO ===
/*const images = ['assets/images/jpn.jpg', 'assets/images/vikings.jpg', 'assets/images/house.jpg', 'assets/images/valley.jpg'];
let bgImageIndex = 0;*/

// === GALLERIA FOTO NEW YORK ===
const photoGallery = new Map([
    ["Me under the Liberty statue!", "assets/images/libertyStatue.jpg"],
    ["A photo of the Manhattan bridge as seen from Brooklyn!", "assets/images/brooklyn.jpg"],
    ["Grand Central Station!", "assets/images/grandCentral.jpg"],
    ["A group photo with the other guys i went to New York with!", "assets/images/groupPhoto.jpg"],
    ["A photo of the iconic Wall Street sign!", "assets/images/wallSt.jpg"],
    ["Photo of the famous 'Red Stair' in Times Square.", "assets/images/timesSquare1.jpg"],
    ["Another photo of Times Square!", "assets/images/timesSquare2.jpg"]
]);
const galleryKeys = Array.from(photoGallery.keys());
let galleryIndex = 0;

// === ELEMENTI DOM ===
const navbar = document.getElementById("navbar");

const info = document.getElementById("info");
const allDescr = document.querySelectorAll(".hidden");
const gallery = document.getElementById("gallery");
const galleryCaption = document.querySelector(".text");

const projectSection = document.getElementById("projectSection");
const languages = document.getElementById("languages");
const programming = document.getElementById("programming");
const descr = document.getElementById("descr");
const cards = document.getElementById("cards");
const allCards = document.querySelectorAll(".card, .cardP");
const prjSection = document.querySelector(".Prj");

const copyright = document.getElementById("copyright");

// === VARIABILI DI STATO ===
let isFirstInteraction = true;
let hideTimer = null;
let isProjectOpen = false;

// === FUNZIONI ===
function updateGalleryImage(index) 
{
    galleryIndex += index;
    if (galleryIndex < 0) galleryIndex = photoGallery.size - 1;
    else galleryIndex = galleryIndex % photoGallery.size;
    
    galleryCaption.textContent = galleryKeys[galleryIndex];
    gallery.src = photoGallery.get(galleryKeys[galleryIndex]);
}

function displayProjects(language) 
{
    prjSection.style.display = "block";
    document.querySelectorAll(".prjContainer").forEach(p => p.style.opacity = "0");
    document.getElementById("morePrj").scrollIntoView({ behavior: "smooth" });

    switch (language) 
    {
        case 'c':
            document.getElementById("c-cpp").style.opacity = "1";
            break;
        case 'python':
            document.getElementById("python").style.opacity = "1";
            break;
        case 'java':
            document.getElementById("java").style.opacity = "1";
            break;
        case 'html':
        case 'css':
        case 'js':
        case 'php':
            document.getElementById("html").style.opacity = "1";
            break;
    }
}

function toggleProjects() 
{
    if (!isProjectOpen) 
    {
        languages.classList.add("aperto");
        programming.classList.add("aperto");
        cards.classList.add("displayed");
        descr.style.pointerEvents = "auto";
    } 
    else 
    {
        languages.classList.remove("aperto");
        programming.classList.remove("aperto");
        cards.classList.remove("displayed");
        descr.style.pointerEvents = "none";
    }
    isProjectOpen = !isProjectOpen;
}

function showNavbar() 
{
    navbar.classList.remove("hidden");
}

function hideNavbar() 
{
    navbar.classList.add("hidden");
}

function handleFirstInteraction() 
{
    if (isFirstInteraction) 
    {
        isFirstInteraction = false;
        showNavbar();
        hideTimer = setTimeout(hideNavbar, 3000);
    }
}

/*function cycleBackgroundImages()
{
    bgImageIndex = (bgImageIndex + 1) % images.length;
    document.querySelector('.startImg').src = images[bgImageIndex];
}*/

// === EVENT LISTENERS ===
allCards.forEach(card => 
{
    card.addEventListener("click", e => 
    {
        e.stopPropagation();
        displayProjects(card.dataset.language);
    });
});

projectSection.addEventListener("mouseleave", () => 
{
    isProjectOpen = true;
    toggleProjects();
});

projectSection.addEventListener("click", toggleProjects);
descr.addEventListener("click", () => 
{
    isProjectOpen = false;
    toggleProjects();
});

navbar.addEventListener("mouseenter", () => 
{
    clearTimeout(hideTimer);
    showNavbar();
});

navbar.addEventListener("mouseleave", () => 
{
    hideTimer = setTimeout(hideNavbar, 1000);
});

document.addEventListener("mousemove", e => 
{
    if (e.clientY <= 64) 
    {
        showNavbar();
    }
});

// === INTERSECTION OBSERVER ===
const observer = new IntersectionObserver(entries => 
{
    entries.forEach(entry => 
    {
        if (!entry.isIntersecting) 
        {
            prjSection.style.display = 'none';
        }
        if (entry.target.classList.contains('hidden')) 
        {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }
            else
            {
                entry.target.classList.remove('show');
            }
        }
    });
});
observer.observe(prjSection);
allDescr.forEach((el) => observer.observe(el));

// === CICLO IMMAGINI SFONDO ===
//setInterval(cycleBackgroundImages, 10000);

// === COPYRIGHT ===
copyright.innerHTML = `&copy; ${new Date().getFullYear()} Gabriele Armenise. All rights reserved.`;
