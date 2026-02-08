const btn = document.getElementById("scrollToTop");
const progress = document.querySelector(".progress-ring__progress");

const radius = 22;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;

function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollTop / docHeight;

  const offset = circumference - percent * circumference;
  progress.style.strokeDashoffset = offset;

  // показ кнопки
  if (scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }

  // приховати біля самого верху
  if (scrollTop < 80) {
    btn.classList.remove("show");
  }
}

window.addEventListener("scroll", updateScroll);
