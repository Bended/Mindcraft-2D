var world = {};
var  sizeOfTheWorld = 20;

function clickedBox(e) {
    var line = $(this).data('line')
    var col = $(this).data('col')
    console.log("  line:" + line + "  column:" + col);
    var cl = $(this).attr('class');
    console.log(cl);
}

//create an Array of Array (20 x 20) and set the value to ""

world.createWorld = function()  {

world.matrix = new Array(sizeOfTheWorld);

for (var i = 0; i < world.matrix.length; i++){
        world.matrix[i] = new Array(sizeOfTheWorld);
}

for (var x = 0; x < world.matrix.length; x++) {
        for (var y = 0; y < world.matrix.length; y++){
                world.matrix[x][y] = "";
            }
}

//create the canvas of the world
for (var i = 0; i < world.matrix.length; i++) {
        for (var j = 0; j < world.matrix[i].length; j++) {
            var box = $('<div/>')
                        .addClass('cell')
                        .data('line', i)        //add line number
                        .data('col', j);       //add colomn number
            $('#canvas').append(box);
            box.on('click', clickedBox);
        }
    }
}

world.createWorld();

world.boxes = $('.cell');

world.updateBoard = function () {
    world.boxes
        .removeClass("grass")
        .removeClass("dirt")
        .removeClass("tree")
        .removeClass("leaf")
        .removeClass("rock");

    for (var i = 0; i < world.matrix.length; i++) {
        for (var j = 0; j < world.matrix[i].length; j++) {
            world.boxes.eq(i * 20 + j).addClass(world.matrix[i][j]); //map the cells to the matrix
        }                                                            //eq enable to identify an element with its index
    }
};


//function to draw the dirt
world.dirt = function () {
for (var i = 17; i < 20; i++) {
        for (var j = 0; j < 20;j++){
        world.matrix[i][j] = 'dirt';
        }
    }
for (var i = 16; i < 17; i++) {
        for (var j = 0; j < 20;j++){
        world.matrix[i][j] = 'grass';
        }
    }
}

//function to draw the cloud
world.cloud = function (line, col) {
        world.matrix[line][col] = 'cloud';
        world.matrix[line][col-1] = 'cloud';
        world.matrix[line][col+1] = 'cloud';
        world.matrix[line][col+1] = 'cloud';
        world.matrix[line-1][col-1] = 'cloud';
        world.matrix[line-1][col+1] = 'cloud';
        world.matrix[line-1][col] = 'cloud';
        world.matrix[line+1][col+1] = 'cloud';
        world.matrix[line][col+2] = 'cloud';
        world.matrix[line-2][col] = 'cloud';
}

//function to draw the tree
world.tree = function(line,col) {
        world.matrix[line][col] = 'tree';
        world.matrix[line-1][col] = 'tree';
        world.matrix[line-2][col] = 'tree';
        world.matrix[line-3][col] = 'tree';
        world.matrix[line-4][col] = 'leef';
        world.matrix[line-4][col+1] = 'leef';
        world.matrix[line-5][col-1] = 'leef';
        world.matrix[line-5][col+2] = 'leef';
        world.matrix[line-5][col] = 'leef';
        world.matrix[line-5][col+1] = 'leef';
        world.matrix[line-5][col-1] = 'leef';
        world.matrix[line-6][col] = 'leef';
        world.matrix[line-6][col+1] = 'leef';
        world.matrix[line-4][col-1] = 'leef';
}

world.rock = function(col) {
        world.matrix[15][col] = 'rock';
        world.matrix[15][col+1] = 'rock';
        world.matrix[15][col+2] = 'rock';
        world.matrix[15][col+3] = 'rock';
        world.matrix[14][col+1] = 'rock';
        world.matrix[14][col+2] = 'rock';
        world.matrix[14][col+3] = 'rock';
        world.matrix[13][col+1] = 'rock';
        world.matrix[13][col+2] = 'rock';
}



$(document).ready(function (){
world.dirt();
world.cloud(5,5);
world.cloud(3,15);
world.tree(15, 14)
world.rock(4);
world.updateBoard();
})

