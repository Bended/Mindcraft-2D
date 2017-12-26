var world = {};
var  sizeOfTheWorld = 20;

function callback(e) {
    var line = $(this).data('line')
    var col = $(this).data('col')
    console.log("  line:" + line + "  column:" + col);
}


function grass(x, y){

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
            var cell = $('<div/>')
                        .addClass('cell')
                        .data('line', i)        //add line number
                        .data('col', j);       //add colomn number
            $('#canvas').append(cell);
            cell.on('click', callback);
        }
    }
}

world.createWorld();


var sel = $("div[line='19']");
sel.css("background-color", "yellow");


