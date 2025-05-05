document.addEventListener("DOMContentLoaded", () => {

    const openMenu = document.querySelector(".openMenu");
    const buttons = document.getElementById("buttons");

    let menuOpen = false;

    openMenu.addEventListener("click", () =>{
        switch(menuOpen){
            case true:
                buttons.classList.add("mobileShow");
                menuOpen = false;
                break;
            case false:
                buttons.classList.remove("mobileShow");
                menuOpen = true;
                break;
        }
    })
});


