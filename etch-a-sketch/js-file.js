const gridBg = document.getElementById("grid-bg");

const makeGrid = (grid) => {
  gridBg.style.setProperty("--grid-num", grid);
  for (i = 0; i < grid * grid; i++) {
    const gridItem = document.createElement("div");
    gridBg.appendChild(gridItem).className = "grid-item";
  }
};

makeGrid(64);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => colorGrid(e));
});

const colorGrid = (e) => {
  e.target.className = "draw";
};
