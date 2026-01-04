let nav_hidden = false;
let transparency = false;

const postHandler = () => {
    let scroll = window.scrollY;
    const splashText = $("#splash-text");
    const navbar = $("#navbar");
    const postSplash = $("#post-splash");
    const navElement = $("nav");

    if (!splashText || !navbar || !postSplash || !navElement) {
        return;
    }

    let text_top = splashText.offsetTop;
    let text_bottom = text_top + splashText.offsetHeight;

    if (nav_hidden && (scroll > text_bottom + 100 || scroll < text_top - 130)) {
        navbar.animate([{ opacity: 1 }], { duration: 150, fill: "forwards" });
        nav_hidden = false;
    } else if (!nav_hidden && scroll > text_top - 130 && scroll < text_bottom + 100) {
        navbar.animate([{ opacity: 0 }], { duration: 150, fill: "forwards" });
        nav_hidden = true;
    }

    let brick_bottom = postSplash.offsetTop + postSplash.offsetHeight;
    if (transparency && scroll > brick_bottom) {
        navElement.style.background = "#111";
        transparency = false;
    } else if (!transparency && scroll < brick_bottom) {
        navElement.style.background = "transparent";
        transparency = true;
    }
}

window.addEventListener("scroll", postHandler)
postHandler();
