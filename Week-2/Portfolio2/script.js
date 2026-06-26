const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.hidden = true;
    document.getElementById("formSuccess").hidden = false;
});
