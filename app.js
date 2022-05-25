var rows = [];
var pieces = [];
var squares = [];
var grid = document.querySelector("#grid");


// Piece.prototype.moveDownRight = function () {
//     let {piece,index} = this;
//     piece.style = "background-color:black;";
//     // piece.parentElement;

// }


//////////////// Squares /////////////////////////////////////////
for (let i = 0; i < 8; i++) {
    rows[i] = document.createElement("div");
    rows[i].className = "row";
    for (let j = 0; j < 8; j++) {
        var square = document.createElement("div");
        square.className = "square";

        rows[i].appendChild(square);
        if (j % 2 !== i % 2) {
            squares.push(square);
        }
    }
    grid.appendChild(rows[i])
}

function Piece(index, piece, row) {
    this.index = index;
    this.piece = piece;
    this.className = "pieceUp";
    this.row = row;
    let adder = 4;

    piece.onclick = moveDown;

    function moveDown() {
        if (row % 2 == 1) {
            adder = 3;
        }
        else {
            adder = 4;
        }
        squares[index + adder].style = "background-color:cyan;";

        squares[index + adder].onclick = function () {
            squares[index + adder].style = "background-color:black;";
            squares[index + adder + 1].style = "background-color:black;";

            squares[index + adder + 1].onclick = null;
            squares[index + adder ].onclick = null;
            let moveby = 72.5;
            piece.style = `transform: translate(${moveby * (-1)}px, ${moveby}px)`;
            // let clonedNode = piece.cloneNode(true);
            let animate = function () {
                squares[index].firstChild.remove();
                index += adder;
                row += 1;
                squares[index].appendChild(piece);
                piece.style = `transform: translate(0px,0px)`;
            }
            myTimeout = setTimeout(animate, 500);
            console.log(squares);
        }
        squares[index + adder + 1].style = "background-color:cyan;";
        
        squares[index + adder + 1].onclick = function () {
            squares[index + adder + 1].style = "background-color:black;";
            squares[index + adder].style = "background-color:black;";

            squares[index + adder + 1].onclick = null;
            squares[index + adder ].onclick = null;
            let moveby = 72.5;
            piece.style = `transform: translate(${moveby}px, ${moveby}px)`;
            // let clonedNode = piece.cloneNode(true);
            let animate = function () {
                squares[index].firstChild.remove();
                index += adder + 1;
                row += 1;
                squares[index].appendChild(piece);
                piece.style = `transform: translate(0px,0px)`;
            }
            myTimeout = setTimeout(animate, 500);

            console.log(squares);
        }

    }
}

// Piece.prototype.downLeft = function () {
//     let { index, piece, row } = this;
//     console.log(index);
//     let moveby = 72.5;
//     piece.style = `transform: translate(${moveby * (-1)}px, ${moveby}px)`;
//     // let clonedNode = piece.cloneNode(true);
//     let animate = function () {
//         squares[index].firstChild.remove();
//         if (row % 2 == 1) {
//             index += 3;
//         }
//         else {
//             index += 4;
//         }
//         row += 1;
//         squares[index].appendChild(piece);
//         piece.style = `transform: translate(0px,0px)`;
//     }
//     myTimeout = setTimeout(animate, 500);

//     console.log(squares);

// }

/////////////////// Top Pieces ////////////////////////////////////
let indexTop = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 8; j += 2) {
        if (i == 1) { j--; }
        var piece = document.createElement("div");
        piece.className = "pieceUp";
        rows[i].childNodes[j].appendChild(piece);


        const p = new Piece(indexTop, piece, i);

        indexTop += 1;
        console.log(p.index)

        // piece.onclick = p.downLeft;
        // piece.onclick = p.moveDownRight;
        // moveDownRight(piece)
        if (i == 1) { j++; }
    }
}

// for (let i = 0; i < 11; i++) {
//     pieces[i] = new Piece(i);
//     let piece = document.createElement("div");
//     piece.className = "pieceUp";
//     // rows[i].childNodes[j].appendChild(piece);

// }

///////////////////////////// Bottom Pieces ///////////////////////////
let indexBot = 20;
for (let i = 5; i < 8; i++) {
    for (let j = 0; j < 8; j += 2) {
        if (i == 6) { j++; }
        var piece = document.createElement("div");
        piece.className = "pieceDown";
        rows[i].childNodes[j].appendChild(piece);

        const p = new Piece(indexBot, piece, i);
        indexBot += 1;
        console.log(p.index)

        if (i == 6) { j--; }
    }
}

// for (let i = 20; i < 31; i++) {
//     pieces[i] = new Piece(i);
// }

console.log(squares);












