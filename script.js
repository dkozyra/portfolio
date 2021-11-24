let span;
let expText;
document.querySelectorAll(".exp-btn").forEach((expBtn) => {
    expBtn.addEventListener("click", (e) => {
        e.preventDefault();
        span = expBtn.firstChild;
        span.classList.toggle("change-btn");
        expText = expBtn.nextElementSibling;
        expText.classList.toggle("change-text");
    });
});