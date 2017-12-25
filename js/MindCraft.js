var world = {};
var  sizeOfTheWorld = 20;



//create an Array of Array (20 x 20) and set the value to ""
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
                        .data('line', i)
                        .data('col', j);
            $('#canvas').append(cell);
        }
    }

