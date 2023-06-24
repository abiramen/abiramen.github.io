let nav_hidden = false;
let transparency = false;

const postHandler = () => {
    let scroll = window.scrollY;
    let text_top = $("#splash-text").offsetTop;
    var text_bottom = text_top + $("#splash-text").offsetHeight;
    if (nav_hidden && (scroll > text_bottom + 100 || scroll < text_top - 130)) {
        $("#navbar").animate([{opacity: 1}], {duration: 150, fill: "forwards"});
        nav_hidden = false;
    } else if (!nav_hidden && scroll > text_top - 130 && scroll < text_bottom + 100) {
        $("#navbar").animate([{opacity: 0}], {duration: 150, fill: "forwards"});
        nav_hidden = true;
    }
    let brick_bottom = $("#post-splash").offsetTop + $("#post-splash").offsetHeight;
    if (transparency && scroll > brick_bottom) {
        $("nav").style.background = "#111";
        transparency = false;
    } else if (!transparency && scroll < brick_bottom) {
        $("nav").style.background = "transparent";
        transparency = true;
    }
}

window.addEventListener("scroll", postHandler)
postHandler();
