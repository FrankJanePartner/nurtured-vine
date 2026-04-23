// NAVBAR START
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }
// NAVBAR END

// GALLERY START
// ================= DATA =================
const galleryData = {
  2025: [
    { src: "asset/2025/one.jpg" },
    { src: "asset/2025/two.jpg" },
    { src: "asset/2025/three.jpg" },
    { src: "asset/2025/four.jpg" },
    { src: "asset/2025/five.jpg" },
    { src: "asset/2025/six.jpg" },
    { src: "asset/2025/seven.jpg" },
    { src: "asset/2025/eight.jpg" },
    { src: "asset/2025/nine.jpg" },
    { src: "asset/2025/ten.jpg" },
    { src: "asset/2025/eleven.jpg" },
    { src: "asset/2025/twelve.jpg" },
    { src: "asset/2025/thirteen.jpg" },
    { src: "asset/2025/fourteen.jpg" },
    { src: "asset/2025/fifteen.jpg" },
    { src: "asset/2025/sixteen.jpg" },
    { src: "asset/2025/seventeen.jpg" },
    { src: "asset/2025/eighteen.jpg" },
    { src: "asset/2025/nineteen.jpg" },
    { src: "asset/2025/twenty.jpg" },
    { src: "asset/2025/twentyone.jpg" },
    { src: "asset/2025/twentytwo.jpg" },
    { src: "asset/2025/twentythree.jpg" },
    { src: "asset/2025/twentyfour.jpg" },
    { src: "asset/2025/twentyfive.jpg" },
    { src: "asset/2025/twentysix.jpg" },
  ],

  2024: [
    { src: "asset/2024/one.jpg" },
    { src: "asset/2024/two.jpg" },
    { src: "asset/2024/three.jpg" },
    { src: "asset/2024/four.jpg" },
    { src: "asset/2024/five.jpg" },
    { src: "asset/2024/six.jpg" },
    { src: "asset/2024/seven.jpg" },
    { src: "asset/2024/eight.jpg" },
    { src: "asset/2024/nine.jpg" },
    { src: "asset/2024/ten.jpg" },
    { src: "asset/2024/eleven.jpg" },
    { src: "asset/2024/twelve.jpg" },
    { src: "asset/2024/thirteen.jpg" },
    { src: "asset/2024/fourteen.jpg" },
    { src: "asset/2024/fifteen.jpg" },
    { src: "asset/2024/sixteen.jpg" },
    { src: "asset/2024/seventeen.jpg" },
    { src: "asset/2024/eighteen.jpg"},
    { src: "asset/2024/nineteen.jpg"},
    { src: "asset/2024/twenty.jpg"},
    { src: "asset/2024/twentytwo.jpg"},
    { src: "asset/2024/twentythree.jpg"},
    { src: "asset/2024/twentyfour.jpg"},
    { src: "asset/2024/twentyfive.jpg"},
  ],

  2023: [
    { src: "asset/2023/one.jpg" },
    { src: "asset/2023/two.jpg" },
    { src: "asset/2023/three.jpg" },
    { src: "asset/2023/four.jpg" },
    { src: "asset/2023/five.jpg" },
    { src: "asset/2023/six.jpg" },
    { src: "asset/2023/seven.jpg" },
    { src: "asset/2023/eight.jpg" },
    { src: "asset/2023/nine.jpg" },
    { src: "asset/2023/ten.jpg" },
    { src: "asset/2023/eleven.jpg" },
    { src: "asset/2023/twelve.jpg" },
    { src: "asset/2023/thirteen.jpg" },
    { src: "asset/2023/fourteen.jpg" },
    { src: "asset/2023/fifteen.jpg" },
    { src: "asset/2023/sixteen.jpg" },
    { src: "asset/2023/seventeen.jpg" },
    { src: "asset/2023/eighteen.jpg"},
    { src: "asset/2023/nineteen.jpg"},
    { src: "asset/2023/twenty.jpg"},
    { src: "asset/2023/twentytwo.jpg"},
    { src: "asset/2023/twentythree.jpg"},
  ]
};

// ================= STATE =================
let currentImages = [];
let currentIndex = 0;
let slideInterval;
let selectedImages = [];

// ================= RENDER =================
function renderGallery(year) {
  const grid = document.getElementById("galleryGrid");
  const title = document.getElementById("galleryTitle");

  const images = galleryData[year];
  currentImages = images;

  grid.innerHTML = "";
  title.innerText = `Light Camp ${year}`;

  images.forEach((img, index) => {

    const div = document.createElement("div");

    div.className = "break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl";

    div.innerHTML = `
      <img src="${img.src}" loading="lazy"
        class="w-full rounded-xl transition duration-500 group-hover:scale-105 group-hover:brightness-75">

      <!-- DARK HOVER -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>

      <!-- ZOOM ICON -->
      <svg class="w-5 h-5 absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-white transition"
        fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" stroke-width="2"/>
        <path d="M21 21l-4.3-4.3" stroke-width="2"/>
      </svg>

      <!-- SELECT BUTTON -->
      <button class="select-btn absolute top-3 left-3 bg-white/80 text-green-800 rounded-full w-7 h-7 flex items-center justify-center"
        onclick="selectImage(event, '${img.src}')">

        <svg class="w-4 h-4" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>

      </button>
    `;

    // div.onclick = (e) => {
    //   if (e.target.closest(".select-btn")) return;
    //   openLightbox(index);
    // };

    div.onclick = () => {
  selectImage(null, img.src);
};

    grid.appendChild(div);
  });
}

// ================= LIGHTBOX =================
function openLightbox(index) {
  currentIndex = index;
  showSlide();
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

function showSlide() {
  const img = currentImages[currentIndex];
  document.getElementById("lightboxImg").src = img.src;
}

// ================= SELECT =================
function selectImage(e, src) {
  e.stopPropagation();

  if (selectedImages.includes(src)) return;

  selectedImages.push(src);
  renderSelected();
}

// ================= RENDER SELECTED =================
function renderSelected() {
  const container = document.getElementById("selectedContainer");
  container.innerHTML = "";

  selectedImages.forEach(src => {

    const div = document.createElement("div");
    div.className = "relative";

    div.innerHTML = `
      <img src="${src}" class="w-20 h-20 object-cover rounded-lg">

      <button onclick="removeImage('${src}')"
        class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">

        <svg class="w-3 h-3" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M6 6l12 12M6 18L18 6"/>
        </svg>

      </button>
    `;

    container.appendChild(div);
  });
}

// ================= REMOVE =================
function removeImage(src) {
  selectedImages = selectedImages.filter(img => img !== src);
  renderSelected();
}

// ================= FILTER =================
function filterYear(year, btn) {
  renderGallery(year);

  document.querySelectorAll(".year-btn").forEach(b => {
    b.classList.remove("bg-green-800","text-white");
    b.classList.add("bg-gray-200","text-gray-600");
  });

  btn.classList.add("bg-green-800","text-white");
}

// ================= INIT =================
renderGallery(2025);

//GALLERY END