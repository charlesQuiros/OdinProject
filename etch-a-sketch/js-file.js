const gridBg = document.getElementById("grid-bg");
const wipeBtn = document.getElementById("wipe");
const rainbowBtn = document.getElementById("rainbow");
const pencilBtn = document.getElementById("pencil");

const makeGrid = (grid) => {
  gridBg.style.setProperty("--grid-num", grid);
  for (i = 0; i < grid * grid; i++) {
    const gridItem = document.createElement("div");
    gridBg.appendChild(gridItem).className = "grid-item";
  }
};

makeGrid(48);

const gridItems = document.querySelectorAll(".grid-item");

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
    });
  });
});

const colorGrid = (e) => {
  e.target.className = "pencil";
};

// TODO wire up buttons and slider
wipeBtn.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.className = "grid-item";
  });
  gridBg.className = "wipe";
  setTimeout(() => {
    gridBg.className = "";
  }, 1000);
});
