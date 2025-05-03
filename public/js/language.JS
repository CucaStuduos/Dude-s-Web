document.addEventListener("DOMContentLoaded", () => {
    // Open Menu
    const langBtn = document.getElementById("language");
    const langList = document.getElementById("langList");

    let menuStat = false;

    langBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document
        if (menuStat === false) {
            langList.classList.remove("none");
            langBtn.classList.remove("xd");
            menuStat = true;
        } else {
            langBtn.classList.add("xd");
            langList.classList.add("divClose");
            setTimeout (function (){
                langList.classList.remove("divClose");
                langList.classList.add("none");
            }, 50)
            menuStat = false;
        }
    });
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (menuStat && !langList.contains(event.target) && event.target !== langBtn) {
            langBtn.classList.add("xd");
            langList.classList.add("divClose");
            setTimeout(function () {
                langList.classList.remove("divClose");
                langList.classList.add("none");
            }, 50)
            menuStat = false;
        }
    });

    // Variable to cookies
    const languages = document.querySelectorAll(".language");
    languages.forEach(language => {
        language.addEventListener("click", () => {
            languages.forEach(lang => lang.classList.remove("languageSelected"));
            language.classList.add("languageSelected");
            document.cookie = "lang=" + language.id;
        });
    });

    //Reload Lang
    const actualLang = document.cookie.split("; ").find(row => row.startsWith("lang="))?.split("=")[1] || "defaultLang";
    languages.forEach(language => {
        if (language.id === actualLang){
            language.classList.add("languageSelected");
        }
        else{
            language.classList.remove("languageSelected");

        }
    });
});
