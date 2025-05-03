document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("iframe");
    const currentLang = document.cookie.split("; ").find(row => row.startsWith("lang="))?.split("=")[1] || "en-en";
    let page = "Home";
    const loading = document.getElementById("loading");
    let home = "";
    let projects = "";
    let videos = "";
    let faq = "";


    updatePage();

    const homeBtn = document.getElementById("Home");
    homeBtn.addEventListener("click", () => {
        page = "Home";
        homeBtn.className = "buttonon";
        projectsBtn.className = "";
        videosBtn.className = "";
        faqBtn.className = "";
        updatePage();
    });

    const projectsBtn = document.getElementById("Projects");
    projectsBtn.addEventListener("click", () => {
        page = "Projects";
        homeBtn.className = "";
        projectsBtn.className = "buttonon";
        videosBtn.className = "";
        faqBtn.className = "";
        updatePage();
    });

    const videosBtn = document.getElementById("Videos");
    videosBtn.addEventListener("click", () => {
        page = "Videos";
        homeBtn.className = "";
        projectsBtn.className = "";
        videosBtn.className = "buttonon";
        faqBtn.className = "";
        updatePage();
    });

    const faqBtn = document.getElementById("FAQ");
    faqBtn.addEventListener("click", () => {
        page = "FAQ";
        homeBtn.className = "";
        projectsBtn.className = "";
        videosBtn.className = "";
        faqBtn.className = "buttonon";
        updatePage();
    });

    function updatePage() {
        loading.classList.remove("none");
        switch (page) {
            case "Home":
                document.title = "Home - Dude_000";
                iframe.src = "/pages/" + currentLang + "/home.html";
                break;
            case "Projects":
                document.title = "Projects - Dude_000";
                iframe.src = "/pages/" + currentLang + "/projects.html";
                break;
            case "Videos":
                document.title = "Videos - Dude_000";
                iframe.src = "/pages/" + currentLang + "/videos.html";
                break;
            case "FAQ":
                document.title = "FAQ - Dude_000";
                iframe.src = "/pages/" + currentLang + "/faq.html";
                break;
            default:
                document.title = "Not Found - Dude_000"
                iframe.src = "/pages/" + currentLang + "/404.html"
        }
    }
    iframe.addEventListener("load", () => {
        loading.classList.add("none");
    });

    iframe.addEventListener("loadeddata", () =>{
        loading.classList.add("none");
    })
});
