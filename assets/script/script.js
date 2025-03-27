/* jshint esversion: 11 */

// Custom JavaScript by a friend (to show modal after the form submit button has been pressed)

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // to stop form standard procedure

        // Show Bootstrap-modal
        var successModal = new bootstrap.Modal(
            document.getElementById("successModal")
        );
        successModal.show();

        // clear form
        this.reset();
    });

/* JavaScript code to ensure the Bootstrap mobile navbar collapses
        when navigating to in-page links, taken from the Boardwalk games course material */
        
document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        let section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
            e.preventDefault(); // Prevent default anchor click behavior
            let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
            window.scroll({
                top: section.offsetTop - navbarHeight, // Adjust for navbar height
                behavior: "smooth",
            });
            document.querySelector(".navbar-collapse").classList.remove("show"); // Collapse navbar
        }
    });
});
