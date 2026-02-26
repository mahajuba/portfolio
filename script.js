const photos = [
  {
    title: "Lush Green Escape",
    category: "Nature",
    tags: ["greenery", "nature", "landscape", "trees", "clouds", "sky"],
    src: "photographs/Lush_Green_Escape.jpg",
    alt: "Lush green natural scenery landscape"
  },
  {
    title: "Campus Greenery",
    category: "Nature",
    tags: ["campus", "landscape", "university", "greenery", "nature", "trees", "clouds", "sky"],
    src: "photographs/Campus_Greenery.jpg",
    alt: "Green landscape view of university campus"
  },
  {
    title: "Woodland Sky",
    category: "Nature",
    tags: ["greenery", "nature", "landscape", "palm trees", "trees", "clouds", "sky"],
    src: "photographs/Woodland_Sky.jpg",
    alt: "Natural woodland scene with tall trees and cloudy sky"
  },
  {
    title: "Quiet Reflection",
    category: "Nature",
    tags: ["pond", "sunrise", "reflection", "water", "greenery", "nature", "landscape", "trees", "clouds", "sky"],
    src: "photographs/Quiet_Reflection.jpg",
    alt: "Sun rays reflecting over calm water at sunrise"
  },
  {
    title: "Mountain Serenity",
    category: "Nature",
    tags: ["mountains", "hills", "greenery", "nature", "landscape", "clouds", "sky"],
    src: "photographs/Mountain_Serenity.jpg",
    alt: "Mountain landscape under clear sky"
  },
  {
    title: "Riverside Cityscape",
    category: "Nature",
    tags: ["city", "skyline", "clouds", "ferris wheel", "urban", "buildings", "river", "water", "landscape", "sky", "trees", "nature"],
    src: "photographs/Riverside_Cityscape.jpg",
    alt: "Riverside city skyline with ferris wheel under cloudy sky"
  },
  {
    title: "Breakthrough Light",
    category: "Nature",
    tags: ["sky", "clouds", "sunlight", "dramatic", "weather", "atmosphere", "nature"],
    src: "photographs/Breakthrough_Light.jpg",
    alt: "Dramatic sunlight breaking through dark clouds"
  },
  {
    title: "Morning Light Over Water",
    category: "Nature",
    tags: ["sunrise", "water", "kayak", "sun rays", "calm", "nature", "reflection"],
    src: "photographs/Morning_Light_Over_Water.jpg",
    alt: "Still pond water under cloudy sky"
  },
  {
    title: "Rolling Waves",
    category: "Nature",
    tags: ["sea", "waves", "water", "nature"],
    src: "photographs/Rolling_Waves.jpg",
    alt: "Ocean waves rolling on water surface"
  },
  {
    title: "Golden Wave Horizon",
    category: "Nature",
    tags: ["sunset", "sea", "waves", "greenery", "nature", "landscape", "trees", "clouds", "sky"],
    src: "photographs/Golden_Wave_Horizon.jpg",
    alt: "Sunset over sea waves with golden reflection"
  },
  {
    title: "Tropical Sunset Glow",
    category: "Nature",
    tags: ["sunset", "palm trees", "sky", "landscape", "evening", "greenery", "nature", "trees", "clouds"],
    src: "photographs/Tropical_Sunset_Glow.jpg",
    alt: "Palm trees silhouette against sunset sky"
  },
  {
    title: "Arc of Colour",
    category: "Nature",
    tags: ["rainbow", "village", "sky", "weather", "greenery", "nature", "landscape", "trees", "clouds", "water", "pond"],
    src: "photographs/Arc_of_Colour.jpg",
    alt: "Rainbow appearing over village landscape with pond reflection"
  },
  {
    title: "Golden Lilies",
    category: "Floral",
    tags: ["flowers", "yellow", "macro", "nature", "floral", "bloom", "lily", "lilies"],
    src: "photographs/Golden_Lilies.jpg",
    alt: "Close-up of yellow lily flowers in bloom"
  },
  {
    title: "White Blossoms",
    category: "Floral",
    tags: ["flowers", "white", "macro", "nature", "bloom", "floral"],
    src: "photographs/White_Blossoms.jpg",
    alt: "White flowers cluster"
  },
  {
    title: "Floral Heart",
    category: "Floral",
    tags: ["flowers", "red", "macro", "nature", "love", "bloom", "floral"],
    src: "photographs/Floral_Heart.jpg",
    alt: "Red flower shaped like a heart"
  },
  {
    title: "Evening Roadscape",
    category: "Nature",
    tags: ["sunset", "street", "lights", "urban", "moon", "evening", "sky", "nature", "road"],
    src: "photographs/Evening_Roadscape.jpg",
    alt: "Urban street skyline at sunset with moon visible"
  },
  {
    title: "Underwater Harmony",
    category: "Wildlife",
    tags: ["fish", "aquarium", "aquatic", "wildlife", "underwater", "marine"],
    src: "photographs/Underwater_Harmony.jpg",
    alt: "Aquarium fish swimming underwater"
  },
  {
    title: "Modern Facade",
    category: "Architecture",
    tags: ["architecture", "building", "urban", "structure", "university", "clouds", "sky"],
    src: "photographs/Modern_Facade.jpg",
    alt: "Modern business building exterior facade"
  },
  {
    title: "Rain Through Glass",
    category: "Nature",
    tags: ["rain", "droplets", "window", "weather", "nature", "mood"],
    src: "photographs/Rain_Through_Glass.jpg",
    alt: "Rain droplets on glass with blurred greenery background"
  },
  {
    title: "Waffle Delight",
    category: "Floral",
    tags: ["food", "waffles", "dessert", "breakfast", "floral", "fruits", "chocolate"],
    src: "photographs/Waffle_Delight.jpg",
    alt: "Fresh waffles decorated with chocolate and fruits served on plate"
  },
  {
    title: "Curious Monkey",
    category: "Wildlife",
    tags: ["wildlife", "monkey", "animal", "nature", "trees"],
    src: "photographs/Curious_Monkey.jpg",
    alt: "Portrait of a monkey with its hand on face"
  },
  {
    title: "Framed Perspectives",
    category: "Architecture",
    tags: ["art installation", "gallery interior", "canvas", "designs", "architecture", "stairs"],
    src: "photographs/Framed_Perspectives.jpg",
    alt: "Interior staircase with canvas artworks inside the National Museum of Qatar"
  },
  {
    title: "Geometric Elegance",
    category: "Architecture",
    tags: ["interior", "design", "geometric", "patterns", "islamic", "architecture", "symmetry"],
    src: "photographs/Geometric_Elegance.jpg",
    alt: "Interior architectural view inside the Museum of Islamic Art in Qatar"
  },
  {
    title: "Grand Interior",
    category: "Architecture",
    tags: ["interior", "design", "mall", "architecture", "geometric", "patterns"],
    src: "photographs/Grand_Interior.jpg",
    alt: "Elegant interior of luxury shopping mall"
  },
  {
    title: "Crystal Illumination",
    category: "Architecture",
    tags: ["chandelier", "interior", "lights", "lighting","architecture", "decor", "illumination"],
    src: "photographs/Crystal_Illumination.jpg",
    alt: "Crystal chandelier hanging inside building"
  },
  {
    title: "Light Patterns",
    category: "Architecture",
    tags: ["chandelier", "interior", "lights", "lighting","architecture", "decor", "illumination"],
    src: "photographs/Light_Patterns.jpg",
    alt: "Decorative lights glowing in patterns"
  },
  {
    title: "Lighted Calligraphy Monument",
    category: "Architecture",
    tags: ["monument", "architecture", "night", "culture", "lighting", "arabic"],
    src: "photographs/Lighted_Calligraphy_Monument.jpg",
    alt: "Illuminated Arabic calligraphy monument at night"
  },
  {
    title: "Blessed Celebration",
    category: "Architecture",
    tags: ["lights", "architecture", "night", "ramadan kareem", "event", "hotel"],
    src: "photographs/Blessed_Celebration.jpg",
    alt: "Ramadan event decoration and ambience inside a hotel"
  },
  {
    title: "Clock Tower Radiance",
    category: "Architecture",
    tags: ["architecture", "night", "landmark", "tower", "lights", "city"],
    src: "photographs/Clock_Tower_Radiance.jpg",
    alt: "Mecca Clock Tower illuminated at night"
  },
  {
    title: "Sacred Canopy",
    category: "Architecture",
    tags: ["mosque", "architecture", "religious", "landmark"],
    src: "photographs/Sacred_Canopy.jpg",
    alt: "Shading umbrella canopies at Al-Masjid an-Nabawi courtyard in Madinah"
  }
];

// ====== DOM refs ======
const galleryEl = document.getElementById("gallery");
const filterChips = Array.from(document.querySelectorAll(".chip[data-filter]"));
const resultsNote = document.getElementById("resultsNote");
const searchInput = document.getElementById("searchInput");

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxMeta = document.getElementById("lightboxMeta");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Nav (mobile)
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ====== State ======
let activeFilter = "all";
let query = "";
let currentList = [...photos];
let currentIndex = 0;

// ====== Helpers ======
function normalise(str) {
  return (str || "").toString().trim().toLowerCase();
}

function matchesQuery(photo, q) {
  if (!q) return true;
  const haystack = [
    photo.title,
    photo.category,
    ...(photo.tags || [])
  ].map(normalise).join(" ");
  return haystack.includes(q);
}

function applyFilters() {
  const q = normalise(query);

  currentList = photos.filter(p => {
    const passFilter = activeFilter === "all" || p.category === activeFilter;
    const passSearch = matchesQuery(p, q);
    return passFilter && passSearch;
  });

  renderGallery(currentList);
  updateResultsNote(currentList.length);
}

function updateResultsNote(count) {
  if (count === 0) {
    resultsNote.textContent = "No photos match your current filter/search.";
  } else if (count === 1) {
    resultsNote.textContent = "Showing 1 photo.";
  } else {
    resultsNote.textContent = `Showing ${count} photos.`;
  }
}

function renderGallery(list) {
  galleryEl.innerHTML = "";

  const fragment = document.createDocumentFragment();

  list.forEach((photo, idx) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open photo: ${photo.title}`);

    const img = document.createElement("img");
    img.className = "thumb";
    img.loading = "lazy";
    img.alt = photo.title;
    img.src = photo.src;

    const body = document.createElement("div");
    body.className = "card-body";

    const left = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = photo.title;

    left.appendChild(title);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = photo.category;

    body.appendChild(left);
    body.appendChild(badge);

    card.appendChild(img);
    card.appendChild(body);

    // open lightbox using list index mapping
    card.addEventListener("click", () => openLightbox(idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });

    fragment.appendChild(card);
  });

  galleryEl.appendChild(fragment);
}

// ====== Lightbox ======
function openLightbox(indexInCurrentList) {
  currentIndex = indexInCurrentList;
  const item = currentList[currentIndex];
  if (!item) return;

  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;

  lightboxTitle.textContent = item.title;
  const metaParts = [];
  if (item.category) metaParts.push(item.category);
  lightboxMeta.textContent = metaParts.join(" • ");

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  // prevent background scroll
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImg.src = "";
  lightboxImg.alt = "";

  document.body.style.overflow = "";
}

function showNext() {
  if (currentList.length === 0) return;
  currentIndex = (currentIndex + 1) % currentList.length;
  openLightbox(currentIndex);
}

function showPrev() {
  if (currentList.length === 0) return;
  currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
  openLightbox(currentIndex);
}

// Close handlers
lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// ====== Filters ======
filterChips.forEach(chip => {
  chip.addEventListener("click", () => {
    filterChips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter || "all";
    applyFilters();
  });
});

// ====== Search ======
let searchTimer = null;
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    query = e.target.value || "";
    applyFilters();
  }, 120);
});

// ====== Mobile nav ======
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ====== Initial render ======
applyFilters();