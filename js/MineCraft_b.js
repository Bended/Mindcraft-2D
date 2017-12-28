world.fall = function (element, line, col) {
    for (var i = line; i < 20; i++) {
        if (world.matrix[line + i][col] === '') {
            world.matrix[line + i][col] = element;
            world.updateBoard();
            }
    }
}

