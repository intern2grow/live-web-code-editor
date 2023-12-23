// Initialize code values
const htmlCodeInput = document.getElementById("htmlCode");
const cssCodeInput = document.getElementById("cssCode");
const jsCodeInput = document.getElementById("jsCode");

htmlCodeInput.value = "<div>\n\n</div>";
cssCodeInput.value = "<style>\n\n</style>";
jsCodeInput.value = "<script>\n\n</script>";

function showPreview() {
    const htmlCode = htmlCodeInput.value;
    const cssCode = cssCodeInput.value;
    const jsCode = jsCodeInput.value;
    const frame = document.getElementById("preview-window").contentWindow.document;

    frame.open();
    frame.write(`${htmlCode}${cssCode}${jsCode}`);
    frame.close();
}

function show(sectionId) {
    const sections = ["html", "css", "js", "result"];

    sections.forEach((section) => {
        const element = document.getElementById(section);
        element.style.display = section === sectionId ? "block" : "none";
    });
}

function showAll() {
    const htmlElement = document.getElementById("html");
    const cssElement = document.getElementById("css");
    const jsElement = document.getElementById("js");
    const resultElement = document.getElementById("result");

    if (window.innerWidth >= 992) {
        htmlElement.style.display = "block";
        cssElement.style.display = "block";
        jsElement.style.display = "block";
        resultElement.style.display = "block";
    }

    if (window.innerWidth < 992 && htmlElement.style.display === "block") {
        cssElement.style.display = "none";
        jsElement.style.display = "none";
        resultElement.style.display = "none";
    }
}

window.addEventListener("resize", showAll);

window.onload = function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
};


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("dismissed") !== "true") {
        document.getElementById("popupBody").style.display = "block";

        document.getElementById("popup").style.display = "block";

    }

    document.getElementById("cancelButton").addEventListener("click", function () {
        document.getElementById("popupBody").style.display = "none";
        document.getElementById("popup").style.display = "none";

        localStorage.setItem("dismissed", "true");

        document.body.classList.remove("blur");
    });
});