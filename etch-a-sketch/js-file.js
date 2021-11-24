//TODO create a fixed grid of 64X64

const gridBg = document.getElementById("grid-bg");

const makeGrid = (grid) => {
  gridBg.style.setProperty("--grid-num", grid);
  for (i = 0; i < grid * grid; i++) {
    const gridItem = document.createElement("div");
    gridBg.appendChild(gridItem).className = "grid-item";
  }
};

makeGrid(24);
