function selectCard(box) {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((x) => {
    x.classList.remove("active");
    x.querySelector('input[type="radio"]').checked = false;
  });

  box.classList.add("active");
  box.querySelector('input[type="radio"]').checked = true;
}

document.querySelectorAll(".box").forEach((x) => {
  x.classList.remove("active");
  x.querySelector('input[type="radio"]').checked = false;
});
