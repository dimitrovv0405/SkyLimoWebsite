function toggleDescription() {
    const description = document.getElementById("description"); // description inside
    const button = document.querySelector("button"); // button users press

    // when clicking the "about us" button it will show all of our info
    if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "Show less";
    } else {
        description.style.display = "none";
        button.textContent = "About us";
    }
}