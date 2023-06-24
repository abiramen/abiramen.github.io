const line1 = '';
const line2 = '';
const base_speed = 40;


let char_count = 0;
let line_length = 0;

const typewrite = () => {
    
    let $ = document.querySelector.bind(document);
    if (char_count === 0) {
        $('#cursor-2').style.display = 'none';
        line_length = $('#splash-line1-hidden').innerHTML.length;
    }

    if ($('#splash-line2-hidden').innerHTML.length != 0) {
        if ($('#splash-line1-hidden').innerHTML.length != 0) {
            $('#splash-line1').innerHTML += $('#splash-line1-hidden').innerHTML[0];
            $('#splash-line1-hidden').innerHTML = $('#splash-line1-hidden').innerHTML.substring(1);
        } else {
            $('#splash-line2').innerHTML += $('#splash-line2-hidden').innerHTML[0];
            $('#splash-line2-hidden').innerHTML = $('#splash-line2-hidden').innerHTML.substring(1);
        }
        if (char_count === line_length) {
            $('#cursor-1').style.display = 'none';
            $('#cursor-2').style.display = 'inline-block';
        }
        char_count++;
        setTimeout(typewrite, base_speed * (1 + Math.random()) + (char_count === line_length) * 400);
    }

    if ($('#splash-line2-hidden').innerHTML.length == 0) {
        $('#splash-line2').innerHTML = "// i do stuff with the <a href='https://unswsecurity.com' target='_blank'>unsw security society</a> for fun :)";
    }

    
};


typewrite();
