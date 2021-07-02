let number = 0;

var btn_decrese = document.getElementById('btn_increse');
var btn_increse = document.getElementById('btn_increse');
var btn_reset = document.getElementById('btn_reset');
var result = document.getElementById('result');
var btn_count = document.getElementsByClassName('btn_count');

for (let index = 0; index < btn_count.length; index++) {

    btn_count[index].addEventListener('click', () => {
        var detector = btn_count[index].id;
        switch (detector) {
            case 'btn_decrese':
                number -= 1;

                break;
            case 'btn_increse':
                number += 1;
                break;

            case 'btn_reset':
                number = 0;

                break;


            default:
                break;
        }
        FnchangeColor(number);
        result.textContent = number;


    })

}

function FnchangeColor(num) {
    if (num < 0) {
        result.style.color = 'red';

    } else if (num > 0) {
        result.style.color = 'green';

    } else {
        result.style.color = 'blue';

    }
}