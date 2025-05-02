document.addEventListener("DOMContentLoaded", () => {
    //Open Menu
    const langBtn = document.getElementById("language");
    const langList = document.getElementById("langList");

    let menuStat = false;

    langBtn.addEventListener("click", () => {
        if(menuStat === false){
            langList.classList.remove("none");
            langBtn.classList.remove("xd");
            menuStat = true;
        } else if (menuStat === true) {
            langList.classList.add("none");
            langBtn.classList.add("xd");
            menuStat = false;
        }
    })

    //Variable to cookies
    const languages = document.querySelectorAll(".language");
    languages.forEach(language => {
        language.addEventListener("click", () => {
            document.cookie = "lang=" + language.id;
            language.classList.add("languageSelected");
        });
    });
});
