// Example future enhancement: simulate progress increase
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  let current = 30;
  setInterval(() => {
    if (current < 100) {
      current += 1;
      progress.value = current;
      progress.nextElementSibling.textContent = `${current}% Complete`;
    }
  }, 3000);
});
