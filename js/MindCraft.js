var world = {};
var sizeOfTheWorld = 20;
var treeCounter = 2;
var leefCounter = 4;
var grassCounter = 0;
var rockCounter = 0;
var dirtCounter = 0;
var waterCounter = 4;
var fireCounter = 3;
var tempMaterial;

//world.selectedElement = 'axe';             //create the function to get the element from the board
world.selectedElement = 'rock';               //create the function to get the element from the board

function clickedBox(e) {
    var line = $(this).data('line');
    var col = $(this).data('col');
    console.log("  line:" + line + "  column:" + col);
    var cl = $(this).attr('class');
    console.log(cl);

// If TOOL is an AXE
    if (world.selectedElement === 'axe') {
        if (world.matrix[line][col] === 'tree' || world.matrix[line][col] === 'leef') {
            tempMaterial = world.matrix[line][col];
            world.updateCounter(tempMaterial);
            world.matrix[line][col] = "";
        } //else {$('#axeButton').css("background-color", "red");
    }

//If TOOL is an PICK AXE
    if (world.selectedElement === 'pickAxe') {
        if (world.matrix[line][col] === 'rock') {
            tempMaterial = world.matrix[line][col];
            world.updateCounter(tempMaterial);
            world.matrix[line][col] = "";
        }   //else {$('#axeButton').css("background-color", "red");
    }

//If TOOL is an SHOVEL
    if (world.selectedElement === 'shovel') {
        if (world.matrix[line][col] === 'grass' || world.matrix[line][col] === 'dirt') {
            tempMaterial = world.matrix[line][col];
            world.updateCounter(tempMaterial);
            world.matrix[line][col] = "";

        }   //else {$('#axeButton').css("background-color", "red");
    }

//if TOOL is BUCKET
    if (world.selectedElement === 'bucket') {
        if (world.matrix[line][col] === 'water') {
            tempMaterial = world.matrix[line][col];
            world.updateCounter(tempMaterial);
            world.matrix[line][col] = "";
        }
    }

// IF Selected Element is an Element --> place it
    if ((world.selectedElement === 'grass' && grassCounter > 0) || (world.selectedElement === 'rock' && rockCounter > 0)
            || (world.selectedElement === 'dirt' && dirtCounter > 0) || (world.selectedElement === 'tree' && treeCounter > 0)
            || (world.selectedElement === 'leef' && leefCounter > 0)) {
        if (world.matrix[line][col] === '') {
            world.matrix[line][col] = world.selectedElement
                if (world.selectedElement === 'grass'){
                        grassCounter--;}
                    else if (world.selectedElement === 'rock'){
                        rockCounter--;}
                            else if (world.selectedElement === 'dirt'){
                                dirtCounter--;}
                                    else if (world.selectedElement === 'tree'){
                                        treeCounter--;}
                                            else if (world.selectedElement === 'leef'){
                                                leefCounter--;}
        }
    }

    else if (world.selectedElement === 'water' && waterCounter > 0) {
        if (world.matrix[line][col] === '') {
            world.matrix[line][col] = 'water';
            waterCounter--
            }
            else if (world.matrix[line][col] === 'fire') {
                world.matrix[line][col] = '';
                console.log(world.matrix[line][col]);
                fireCounter++;
                waterCounter--;
                }
        }

    else if (world.selectedElement === 'fire' && fireCounter > 0) {
        if (world.matrix[line][col] === 'tree' || world.matrix[line][col] === 'leef'
        || world.matrix[line][col] === 'grass' || world.matrix[line][col] === 'dirt') {
            world.matrix[line][col] = 'fire';
            fireCounter--;
            }
        }

world.fall(world.selectedElement, line, col);

console.log('dirt ' + dirtCounter);
console.log('grass ' + grassCounter);
console.log('rock ' + rockCounter);
console.log('tree ' + treeCounter);
console.log('leef ' + leefCounter);
console.log('water ' + waterCounter);
console.log('fire ' + fireCounter);

world.updateBoard();

}

world.updateCounter = function(tempMaterial) {
    if (tempMaterial === 'leef') {
        leefCounter++}
        else if (tempMaterial === 'tree') {
            treeCounter++}
            else if (tempMaterial === 'rock') {
            rockCounter++}
                else if (tempMaterial === 'dirt') {
                dirtCounter++}
                    else if (tempMaterial === 'grass') {
                    grassCounter++}
                        else if (tempMaterial === 'water') {
                        waterCounter++}
                            else if (tempMaterial === 'fire') {
                            fireCounter++}
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
                        .data('col', j);       //add column number
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
        .removeClass("leef")
        .removeClass("rock")
        .removeClass('sun')
        .removeClass('water')
        .removeClass('fire');

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

world.sun = function () {
    world.matrix[2][2] = 'sun';
    world.matrix[2][3] = 'sun';
    world.matrix[1][2] = 'sun';
    world.matrix[1][3] = 'sun';
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
        world.matrix[line-4][col-1] = 'leef';
        world.matrix[line-5][col-1] = 'leef';
        world.matrix[line-5][col] = 'leef';
        world.matrix[line-5][col+1] = 'leef';
        world.matrix[line-6][col-1] = 'leef';
        world.matrix[line-6][col] = 'leef';
        world.matrix[line-6][col+1] = 'leef';
}

//Draw a bush
world.bush = function(col) {
        world.matrix[15][col] = 'leef';
        world.matrix[15][col+1] = 'leef';
        world.matrix[15][col+2] = 'leef';
        world.matrix[15][col+3] = 'leef';
        world.matrix[14][col+1] = 'leef';
        world.matrix[14][col+2] = 'leef';
}

//Draw a rock
world.rock = function(line, col) {
        world.matrix[line][col] = 'rock';
}

//console.log("this is a modification");

//Draw water
world.water = function(line, col){
        world.matrix[line][col] = 'water';
}

$(document).ready(function (){
world.dirt();
world.cloud(5,5);
world.cloud(3,15);
world.tree(15, 14)
world.bush(4);
world.rock(15, 0);
world.rock(15, 10);
world.rock(15, 1);
world.rock(11);
world.sun();
world.water(16, 18);
world.water(16, 19);
world.water(17, 19);
world.water(17, 18);
world.water(16, 17);
world.water(18, 19);

world.updateBoard();
})

