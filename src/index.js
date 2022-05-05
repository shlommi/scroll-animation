const allBoxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxAnimation);
showBoxAnimation();
function showBoxAnimation() {
  const bottomViewTrigger = (window.innerHeight / 5) * 4;
  allBoxes.forEach((box) => {
    const topHeightBox = box.getBoundingClientRect().top;
    if (topHeightBox < bottomViewTrigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
  console.log(bottomViewTrigger);
}
