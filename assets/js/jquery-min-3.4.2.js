document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#footer-flavour").onclick = () => {
        document.querySelector("#click-the-small-footer-text-to-reveal-me").style.display = "block";
    };

    document.querySelector("#flag-submit").onclick = () => {
        document.querySelector("#flag-result").innerHTML = "haha gottem.<br>There are no flags! I did say the entire CTF was finding the CTF. <br>If you've been trying to find a flag, you may have been committing crimes 😳.<br><br>Congrats though! Feel free to tweet me if you found this :)";
    };
});
