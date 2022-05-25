var rows = [];
var pieces = [];
var squares = [];
var grid = document.querySelector("#grid");
var active;
// active.className = "active";


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
    this.row = row;
    let adder;

    if(piece.className == "pieceTop"){
        piece.onclick = moveDown;
    }
    if(piece.className == "pieceBot"){
        piece.onclick = moveUp;
    }
    
    function moveDown() {
        if(active){
            active = null;
            
        }
        if(row == 7){
            piece.onclick = null;
            console.log(row);
            return;
        }
        if (row % 2 == 1) {
            adder = 3;
        }
        else {
            adder = 4;
        }
        //!((index)==(3 || 11 || 19 || 27 ||4 || 12 || 20 || 28))
        //&& (index-3) % 8 !== 0 
        if (squares[index + adder].firstChild == null && (index - 4) % 8 !== 0) {
            squares[index + adder].style = "background-color:cyan;";
            squares[index + adder].onclick = function () {
                squares[index + adder].style = "background-color:black;";
                squares[index + adder + 1].style = "background-color:black;";

                squares[index + adder + 1].onclick = null;
                squares[index + adder].onclick = null;

                piece.onclick = null;
                let moveby = 72.5;
                piece.style = `transform: translate(${moveby * (-1)}px, ${moveby}px)`;
                // let clonedNode = piece.cloneNode(true);
                let append = function () {
                    squares[index].firstChild.remove();
                    index += adder;
                    row += 1;
                    squares[index].appendChild(piece);
                    piece.style = `transform: translate(0px,0px)`;
                    piece.onclick = moveDown;
                }
                myTimeout = setTimeout(append, 500);

                console.log(squares);
            }
        }
        if (squares[index + adder + 1].firstChild == null && (index - 3) % 8 !== 0) {
            squares[index + adder + 1].style = "background-color:cyan;";
            squares[index + adder + 1].onclick = function () {
                squares[index + adder + 1].style = "background-color:black;";
                squares[index + adder].style = "background-color:black;";
                squares[index + adder + 1].onclick = null;
                squares[index + adder].onclick = null;

                piece.onclick = null;
                let moveby = 72.5;
                piece.style = `transform: translate(${moveby}px, ${moveby}px)`;
                // let clonedNode = piece.cloneNode(true);
                let append = function () {
                    squares[index].firstChild.remove();
                    index += adder + 1;
                    row += 1;
                    squares[index].appendChild(piece);
                    piece.style = `transform: translate(0px,0px)`;
                    piece.onclick = moveDown;
                }
                myTimeout = setTimeout(append, 500);
                console.log(squares);
                
            }
        }
        // if (index > 27 ){
        //     piece.onclick = null;
        // }
    }

    function moveUp() {
        if(row == 0){
            piece.onclick = null;
            console.log(row);
            return;
        }
        if (row % 2 == 1) {
            subber = 4;
        }
        else {
            subber = 3;
        }
        //!((index)==(3 || 11 || 19 || 27 ||4 || 12 || 20 || 28))
        //&& (index-3) % 8 !== 0 
        if (squares[index - subber].firstChild == null && (index - 3) % 8 !== 0) {
            squares[index - subber].style = "background-color:cyan;";
            squares[index - subber].onclick = function () {
                squares[index - subber].style = "background-color:black;";
                squares[index - subber - 1].style = "background-color:black;";

                squares[index - subber - 1].onclick = null;
                squares[index - subber].onclick = null;

                piece.onclick = null;
                let moveby = 72.5;
                piece.style = `transform: translate(${moveby }px, ${moveby*(-1)}px)`;
                // let clonedNode = piece.cloneNode(true);
                let append = function () {
                    squares[index].firstChild.remove();
                    index -= subber;
                    row -= 1;
                    squares[index].appendChild(piece);
                    piece.style = `transform: translate(0px,0px)`;
                    piece.onclick = moveUp;
                }
                myTimeout = setTimeout(append, 500);

                console.log(squares);
            }
        }
        if (squares[index - subber - 1].firstChild == null && (index - 4) % 8 !== 0) {
            squares[index - subber - 1].style = "background-color:cyan;";
            squares[index - subber - 1].onclick = function () {
                squares[index - subber - 1].style = "background-color:black;";
                squares[index - subber].style = "background-color:black;";
                squares[index - subber - 1].onclick = null;
                squares[index - subber].onclick = null;

                piece.onclick = null;
                let moveby = 72.5;
                piece.style = `transform: translate(${moveby* (-1)}px, ${moveby*(-1)}px)`;
                // let clonedNode = piece.cloneNode(true);
                let append = function () {
                    squares[index].firstChild.remove();
                    index -= subber +1;
                    row -= 1;
                    squares[index].appendChild(piece);
                    piece.style = `transform: translate(0px,0px)`;
                    piece.onclick = moveUp;
                }
                myTimeout = setTimeout(append, 500);
                console.log(squares);

            
            }
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
        piece.className = "pieceTop";
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
        piece.className = "pieceBot";
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












