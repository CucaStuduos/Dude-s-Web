document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("iframe")
    let page = "Home";
    updatePage();

    const homeBtn = document.getElementById("Home");
    homeBtn.addEventListener("click", () => {
        page = "Home";
        updatePage();
    });

    const projectsBtn = document.getElementById("Projects");
    projectsBtn.addEventListener("click", () => {
        page = "Projects";
        updatePage();
    });

    const videosBtn = document.getElementById("Videos");
    videosBtn.addEventListener("click", () => {
        page = "Videos";
        updatePage();
    });

    const faqBtn = document.getElementById("FAQ");
    faqBtn.addEventListener("click", () => {
        page = "FAQ";
        updatePage();
    });

    function updatePage() {
        switch (page) {
            case "Home":
                document.title = "Home - Dude_000";
                iframe.src = "/pages/home.astro";
                break;
            case "Projects":
                document.title = "Projects - Dude_000";
                iframe.src = "/pages/projects.astro";
                break;
            case "Videos":
                document.title = "Videos - Dude_000";
                iframe.src = "/pages/videos.astro";
                break;
            case "FAQ":
                document.title = "FAQ - Dude_000";
                iframe.src = "/pages/faq.astro";
                break;
            default:
                document.title = "Not Found - Dude_000"
                iframe.src = "/pages/404.astro"
        }
    }
});
