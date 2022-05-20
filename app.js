let rows = [];
let pieces = [];

var activePiece;
var activeI;
var activeJ;

let active = function (e, index, i, j) {
    pieces[index] = e;
    return function () {
        if (e === activePiece) {
            e.classList.remove("active");

            activePiece = null;
            if (rows[activeI + 1].childNodes[activeJ - 1]) {
                rows[activeI + 1].childNodes[activeJ - 1].style = "background-color:black;";
            }
            if (rows[activeI + 1].childNodes[activeJ + 1]) {
                rows[activeI + 1].childNodes[activeJ + 1].style = "background-color:black;";
            }

            return
        }

        if (activeI || activeJ) {
            if (rows[activeI + 1].childNodes[activeJ - 1]) {
                rows[activeI + 1].childNodes[activeJ - 1].style = "background-color:black;";
            }
            if (rows[activeI + 1].childNodes[activeJ + 1]) {
                rows[activeI + 1].childNodes[activeJ + 1].style = "background-color:black;";
            }
        }
        e.classList.remove("active");
        if (e === activePiece) {
            activePiece.classList.remove("active");
            activePiece = null;
            console.log("true")
            return
        }

        activeI = i;
        activeJ = j;
        if (!pieces[index + 7] || !pieces[index + 9]) {
            if (rows[activeI + 1].childNodes[activeJ - 1] && !pieces[index + 7]) {
                rows[activeI + 1].childNodes[activeJ - 1].style = "background-color:cyan;";
                rows[activeI + 1].childNodes[activeJ - 1].onclick = moveDownLeft(e, index);
            }
            if (rows[activeI + 1].childNodes[activeJ + 1] && !pieces[index + 9]) {
                rows[activeI + 1].childNodes[activeJ + 1].style = "background-color:cyan;";
                rows[activeI + 1].childNodes[activeJ + 1].onclick = moveDownRight(e, index);
            }
            if (activePiece) {
                activePiece.classList.remove("active");
            }
            e.classList.add("active");
            activePiece = e;
        }
    }
}

// function active(e){
//     active.classList.remove("active");
//     return function () {
//         e.classList.add("active"); 
//     }
// }

let moveDownRight = function (e, index) {
    var moveby = 0;
    pieces[index] = e;
    return function () {
        if (!pieces[index + 9]) {
            moveby += 72.5;
            pieces[index] = false;
            index += 9;
            pieces[index] = e;
            e.style = `transform: translate(${moveby}px, ${moveby}px)`;

        }
    };
}

let moveDownLeft = function (e, index) {
    var moveby = 0;
    pieces[index] = e;
    return function () {
        if (!pieces[index + 7]) {
            moveby += 72.5;
            pieces[index] = false;
            index += 9;
            pieces[index] = e;
            e.style = `transform: translate(${moveby * (-1)}px, ${moveby}px)`;
        }
    };
}

let moveUpRight = function (e, index) {
    var moveby = 0;
    pieces[index] = e;
    // this.index = index;
    return function () {
        if (!pieces[index - 9]) {
            moveby -= 72.5;
            e.style = `transform: translate(${moveby * (-1)}px, ${moveby}px)`;
            pieces[index] = false;
            index -= 9;
            pieces[index] = e;
            console.log(pieces);
        }
    };
}

let moveUpLeft = function (e, index) {
    var moveby = 0;
    pieces[index] = e;
    // this.index = index;
    return function () {
        if (!pieces[index - 9]) {
            moveby -= 72.5;
            e.style = `transform: translate(${moveby}px, ${moveby}px)`;
            pieces[index] = false;
            index -= 9;
            pieces[index] = e;
            console.log(pieces);
        }
    };
}

for (let i = 0; i < 8; i++) {
    rows[i] = document.createElement("div");
    rows[i].className = "row";
    for (let j = 0; j < 8; j++) {
        var square = document.createElement("div");
        square.className = "square";


        rows[i].appendChild(square);
    }

    grid = document.querySelector("#grid")
    grid.appendChild(rows[i])

}

///////////////////// Top Pieces ////////////////////////////////////
for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 8; j += 2) {
        if (i == 1) { j--; }
        let piece = document.createElement("div");
        piece.className = "pieceUp";
        rows[i].childNodes[j].appendChild(piece);

        // piece.onclick = moveDown(piece, (i * 8) + j);
        // piece.onclick = moveDownRight(piece,(i * 8) + j);
        piece.onclick = active(piece, (i * 8) + j, i, j);
        if (i == 1) { j++; }
    }
}

///////////////////////////// Bottom Pieces /////////////////////////////////////////////////////

for (let i = 5; i < 8; i++) {
    for (let j = 0; j < 8; j += 2) {
        if (i == 6) { j++; }
        let piece = document.createElement("div");
        piece.className = "pieceDown";
        rows[i].childNodes[j].appendChild(piece);

        piece.onclick = moveUpLeft(piece, (i * 8) + j, i, j);
        if (i == 6) { j--; }
    }
}

console.log(pieces);












