randomColors = document.querySelector("#color-check");
borderCheck = document.querySelector("#border-check");
distanceBox = document.querySelector("#distance-box");
perspectiveBox = document.querySelector("#perspective-box");
perspectiveHome = document.querySelector("#flex-container");
sizeBox = document.querySelector("#size-box");
sizeHome = document.querySelector("#flex-container");
boxes = document.querySelectorAll(".box");
borders = document.querySelectorAll(".depth-helper");

distanceBox.addEventListener("keyup", e => {
    sizeHome.style.setProperty("--box-depth", `translatez(${distanceBox.value}px)`) // Sizehome points to where I put the variables
});

perspectiveBox.addEventListener("keyup", e => {
    perspectiveHome.style.setProperty("perspective", `${perspectiveBox.value}px`)
});

sizeBox.addEventListener("keyup", e => {
    // styles = getComputedStyle(sizeHome); // For below, was testing.
    // console.log(styles.getPropertyValue("--box-size")); // For getting property value
    sizeHome.style.setProperty("--box-size", `${sizeBox.value}px`)
});

borderCheck.addEventListener("click", e=> {
    if (borderCheck.checked) {
        for (let i = 0; i < borders.length; i++) {
            borders[i].style.border = ".1px solid black";
        }
    }
    else {
        for (let i = 0; i < borders.length; i++) {
            borders[i].style.border = "0px";
        }
    }
});

randomColors.addEventListener("click", async e => {
    if (randomColors.checked) {
        while (randomColors.checked) {
            for (let i = 0; i < boxes.length; i++) {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                // boxes[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
                boxes[i].animate(
                    [
                        { backgroundColor: boxes[i].style.backgroundColor },
                        { backgroundColor: `rgb(${r}, ${g}, ${b})` },
                    ],
                    {
                        duration: 1000,
                        iterations: 1,
                        fill: 'forwards'
                    },
                );
            } 
            await waitXSeconds(1);
        }
    }
    else {
        await waitXSeconds(1);
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].animate(
                [
                    { backgroundColor: boxes[i].style.backgroundColor },
                    { backgroundColor: "white" },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards'
                },
            );
        }
        return;
    }
});

function waitXSeconds(x) { // Help I have no training in async functions
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x * 1000);
  });
}