document.addEventListener("DOMContentLoaded", () => {
    fetch("/parts/menu.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("menu").innerHTML = html;
        });
});
