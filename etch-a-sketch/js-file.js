const gridBg = document.getElementById("grid-bg");
const wipeBtn = document.getElementById("wipe");
const rainbowBtn = document.getElementById("rainbow");
const pencilBtn = document.getElementById("pencil");
let slider = document.getElementById("slider");
let sliderOutput = document.getElementById("slider-output");
let gridItems = null;

const makeGrid = (grid) => {
  gridBg.style.setProperty("--grid-num", grid);
  for (i = 0; i < grid * grid; i++) {
    const gridItem = document.createElement("div");
    gridBg.appendChild(gridItem).className = "grid-item";
  }
  gridItems = document.querySelectorAll(".grid-item");
};

makeGrid(24);

//TODO consider putting the draw functionality into its own function

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.className = "pencil";
  });
});

pencilBtn.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      e.target.className = "pencil";
    });
  });
});

rainbow.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      e.target.className = "rainbow";
      item.style.setProperty("--rainbow-color", enableRainbow());
    });
  });
});

wipeBtn.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.className = "grid-item";
  });
  gridBg.className = "wipe";
  setTimeout(() => {
    gridBg.className = "";
  }, 1000);
});

slider.addEventListener("input", (e) => {
  gridBg.textContent = "";
  makeGrid(e.target.value);
  sliderOutput.textContent = e.target.value;
});

const enableRainbow = () => {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let ranNum = Math.floor(Math.random() * color.length);
  return color[ranNum];
};

// TODO save to localeStorage
