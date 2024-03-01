// JavaScript file (your_script.js)

document.addEventListener("DOMContentLoaded", function() {
    // Get all the links in the document
    var links = document.querySelectorAll("a");

    // Loop through each link
    links.forEach(function(link) {
        // Check if the link doesn't have the class 'enable-link'
        if (!link.classList.contains("enable-link")) {
            // Disable the link
            link.addEventListener("click", function(event) {
                event.preventDefault();
            });
        }
    });
});
