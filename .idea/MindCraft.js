var matrix = [],
    H = 4, // 4 rows
    W = 6; // of 6 cells

for ( var y = 0; y < H; y++ ) {
    matrix[ y ] = [];
    for ( var x = 0; x < W; x++ ) {
        matrix[ y ][ x ] = "foo";
    }
}

console.log( matrix.join('\n') );