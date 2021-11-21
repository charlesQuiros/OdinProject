const container = document.getElementById("container");

const makeRows = (size) => {
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);

  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

makeRows(16);

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    item.className = "hover";
  });
});

const body = document.querySelector("body");

const clearBtn = document.createElement("button");
clearBtn.textContent = "clear";
body.insertBefore(clearBtn, body.firstChild);

clearBtn.style.alignSelf = "flex-end";
clearBtn.style.margin = "20px";
clearBtn.style.backgroundColor = "salmon";
clearBtn.style.width = "100px";
clearBtn.style.height = "30px";
clearBtn.style.border = "none";
clearBtn.addEventListener("mouseover", (e) => {
  clearBtn.style.backgroundColor = "rgb(214, 255, 253)";
});
clearBtn.addEventListener("mouseleave", (e) => {
  clearBtn.style.backgroundColor = "salmon";
});

const userGrid = () => {
  document.getElementById("container").textContent = "";

  const gridSize = prompt("Please enter a new grid number");
  makeRows(gridSize);
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      item.className = "hover";
    });
  });
};

clearBtn.addEventListener("click", userGrid);
