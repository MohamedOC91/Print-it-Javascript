const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
const dots = document.querySelector(".dots");

const updateSlider = (index) => {
  currentIndex = index;
  const { image, tagLine } = slides[index];
  bannerImg.src = `./assets/images/slideshow/${image}`;
  bannerImg.alt = `Banner Print-it - ${image}`;
  bannerText.innerHTML = tagLine;
  updateDots();
};

const updateDots = () => {
  dots.innerHTML = slides.map((_, index) =>
    `<span class="dot ${index === currentIndex ? 'dot_selected' : ''}" title="Image ${index + 1}"></span>`
  ).join('');
};

dots.addEventListener("click", (e) => {
  if (e.target.id.startsWith("dot")) {
    const index = parseInt(e.target.id.slice(3));
    updateSlider(index);
  }
});

const navigate = (direction) => {
  currentIndex = (currentIndex + slides.length + direction) % slides.length;
  updateSlider(currentIndex);
};

document.querySelector(".arrow_left").addEventListener("click", () => {
  navigate(-1);
  console.log("Clique sur la Flèche de gauche!");
});

document.querySelector(".arrow_right").addEventListener("click", () => {
  navigate(1);
  console.log("Clique sur la fleche de droite!");
});

// Affichage initial
updateSlider(currentIndex);

