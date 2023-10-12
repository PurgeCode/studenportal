const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

// let studentName = prompt("Please Input Your Student Name");
// document.querySelector("#personName").textContent = studentName;

function submitGrade() {
  let english = document.getElementById("english").value;
  let science = document.getElementById("science").value;
  let math = document.getElementById("math").value;
  let history = document.getElementById("history").value;
  let chemistry = document.getElementById("chemistry").value;
  let biology = document.getElementById("biology").value;
  let physics = document.getElementById("physics").value;
}
