let rows = [];
let pieces = [];

// let location = function(piece){
//     x = piece.
// }

let moveUp = function (e, index) {
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

let moveDown = function (e, index) {
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
for (let i = 0; i < 3; i += 2) {
    for (let j = 1; j < 8; j += 2) {
        let piece = document.createElement("div");
        piece.className = "pieceUp";
        rows[i].childNodes[j].appendChild(piece);

        piece.onclick = moveDown(piece, (i * 8) + j);
    }

}

for (let i = 1; i < 2; i = i + 2) {
    for (let j = 0; j < 8; j = j + 2) {
        let piece = document.createElement("div");
        piece.className = "pieceUp";
        rows[i].childNodes[j].appendChild(piece);

        piece.onclick = moveDown(piece, (i * 8) + j);

    }
}

///////////////////////////// Bottom Pieces /////////////////////////////////////////////////////

for (let i = 5; i < 8; i += 2) {
    for (let j = 0; j < 8; j += 2) {
        let piece = document.createElement("div");
        piece.className = "pieceDown";
        rows[i].childNodes[j].appendChild(piece);

        piece.onclick = moveUp(piece, (i * 8) + j);
    }
}

for (let i = 6; i < 7; i += 2) {
    for (let j = 1; j < 8; j += 2) {
        let piece = document.createElement("div");
        piece.className = "pieceDown";
        rows[i].childNodes[j].appendChild(piece);

        piece.onclick = moveUp(piece, (i * 8) + j);
    }
}

console.log(pieces);












