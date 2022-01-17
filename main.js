
let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
function end(num1, num2, num3) {
    title.innerHTML = '$ {squares [num1] } winner';
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3)
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4, 5, 6)

    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        end(7, 8, 9)
    }



    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1, 4, 9)
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(2, 5, 8)
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        end(3, 6, 9)
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        end(1, 5, 9)
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        end(3, 5, 7)
    }

}


function gaime(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = '0';
    }

    else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = '0';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner();
}
