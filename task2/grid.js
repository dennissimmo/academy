/**
 * Builds an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
 */
function grid(dimension) {
    if (dimension < 0) {
        return null;
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const stepDivider = letters.length;
    const matrix = [];
    for (let i = 0; i < dimension; i++) {
        const cells = [];
        for (let j = 0; j < dimension; j++) {
            cells.push(letters[(i + j) % stepDivider]);
        }

        matrix.push(cells.join(" "));
    }

    return matrix.join('\n');
}

console.log(grid(5));