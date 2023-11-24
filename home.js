document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentIndex = 0;

    const nextButton = document.getElementById("btn");
    nextButton.addEventListener("click", goToNextSection);

    function goToNextSection() {
        if (currentIndex < sections.length - 1) {
            sections[currentIndex].classList.remove("active");
            currentIndex++;
            sections[currentIndex].classList.add("active");
            sections[currentIndex].scrollIntoView({ behavior: "smooth" });
        }
    }
});
