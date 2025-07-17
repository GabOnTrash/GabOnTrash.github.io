const images = ['jpn.jpg', 'vikings.jpg', 'house.jpg', 'valley.jpg'];

const navbar = document.getElementById("navbar");
const info = document.getElementById("info");
const menu = document.getElementById("icon");
const indice = document.getElementById("indice");

const projectSection = document.getElementById("projectSection");
const languages = document.getElementById("languages");
const programming = document.getElementById("programming");
const descr = document.getElementById("descr");
const cards = document.getElementById("cards");
const allCards = document.querySelectorAll('.card, .cardP');
const prjSection = document.querySelector('.Prj');
const imageContainer = document.getElementById("imageContainer");
const gallery = document.getElementById("gallery");
const text = document.querySelector('.text');

let index = 0;
let primaVolta = true;
let hideTimer;
let opened = false;

const photoGallery = new Map([
  ["Me under the Liberty statue!", "libertyStatue.jpg"],
  ["A photo of the Manhattan bridge as seen from Brooklyn!", "brooklyn.jpg"],
  ["Grand Central Station!", "grandCentral.jpg"],
  ["A group photo with the other guys i went to New York with!", "groupPhoto.jpg"],
  ["A photo of the iconic Wall Street sign!", "wallSt.jpg"],
  ["Photo of the famous 'Red Stair' in Times Square.", "timesSquare1.jpg"],
  ["Another photo of Times Square!", "timesSquare2.jpg"]
]);
const keys = Array.from(photoGallery.keys()); 
let GalleryIndex = 0;

const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => 
        {
            if (!entry.isIntersecting) 
            {
                prjSection.style.display = 'none';
            }
        });
    }, { threshold: 0.01 });
    
observer.observe(prjSection);

allCards.forEach(card => 
{
    card.addEventListener("click", (e) => 
    {
        e.stopPropagation();
        displayP(card.dataset.language);
    });
});

function displayP(val)
{
    prjSection.style.display = "block";
    document.querySelectorAll('.prjContainer').forEach(p => p.style.opacity = "0");

    document.getElementById("morePrj").scrollIntoView({ behavior: "smooth" });
    

    switch (val)
    {
        case 'c':
        /*case 'cpp':*/
        {
            document.getElementById("c-cpp").style.opacity = "1";
            break;
        }
        case 'python':
        {
            document.getElementById("python").style.opacity = "1";
            break;
        }
        case 'java':
        {
            document.getElementById("java").style.opacity = "1";
            break;
        }
        case 'html':
        case 'css':
        case 'js':
        case 'php':
        {
            document.getElementById("html").style.opacity = "1";
            break;
        }
    }
}

// Nasconde la navbar
function hideNavbar() 
{
    navbar.classList.add("hidden");
    // menu.src = "menu.svg";
    indice.style.left = "-100%";
}
// Mostra la navbar e resetta il timer
function showNavbar() 
{
    navbar.classList.remove("hidden");
}

function Pressed() 
{
    if (primaVolta) 
    {
        primaVolta = false;
        showNavbar();
        hideTimer = setTimeout(hideNavbar, 3000);
    }
};

function openLen()
{
    if (!opened) 
    {
        languages.classList.add("aperto");
        programming.classList.add("aperto");
        cards.classList.add("displayed");
        opened = true;
        descr.style.pointerEvents = "auto";
    } 
    else 
    {
        languages.classList.remove("aperto");
        programming.classList.remove("aperto");
        cards.classList.remove("displayed");
        opened = false;
        descr.style.pointerEvents = "none";
    }
}

imageContainer.addEventListener("click", () =>
{
    GalleryIndex = (GalleryIndex + 1) % photoGallery.size;

    text.textContent = keys[GalleryIndex];
    gallery.src = photoGallery.get(keys[GalleryIndex]);
})
// Se il cursore va vicino al bordo superiore, mostra la navbar
document.addEventListener("mousemove", (e) => 
{
    if (e.clientY <= 64) // 64px è l'altezza della navbar
    {
        showNavbar();
    }
});
projectSection.addEventListener("mouseleave", () =>
{
    opened = true;
    openLen();
});
// nel caso copiare la funzione di sotto modificando gli oggetti in languages e programming
projectSection.addEventListener("click", () =>
{
    openLen();
});
descr.addEventListener("click", () =>
{
    opened = false;
    openLen();
});
menu.addEventListener("click", () =>
{
	window.open("CV_Studente.pdf", "_blank");
    /*if (menu.src.includes("menu.svg"))
    {
        menu.src = "close.svg";
        indice.style.left = "0px";
    }
    else
    {
        menu.src = "menu.svg";
        indice.style.left = "-100%";
    }*/
});
navbar.addEventListener("mouseenter", () => 
{
    clearTimeout(hideTimer);        // Cancella il timer se il mouse entra nella navbar quando è visibile
    showNavbar();
});
// Quando esce dalla navbar, nascondila dopo 5 secondi
navbar.addEventListener("mouseleave", () => 
{
    hideTimer = setTimeout(hideNavbar, 1000);
});

setInterval(() => 
{
    index = (index + 1) % images.length;
    document.querySelector('.startImg').src = images[index];
}, 10000);

// data in anno corrente
document.getElementById("copyright").innerHTML = `&copy; ${new Date().getFullYear()} Gabriele Armenise. All rights reserved.`;