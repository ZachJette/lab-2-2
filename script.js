const button = document.querySelector("#toggleSummary");
const summary = document.querySelector("#timelineSummary");

if (button && summary) {
  button.addEventListener("click", () => {
    const isHidden = summary.classList.contains("is-hidden");

    summary.classList.toggle("is-hidden");
    button.setAttribute("aria-expanded", String(isHidden));
    button.textContent = isHidden ? "Hide summary" : "Show summary";
  });
}
