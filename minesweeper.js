///  game logic





export function createBoard(boardsize, numberOfMines) {
    const board = []
    for (let x = 0; x < boardsize; x++) {
        const row = []
        for (let y = 0; y < boardsize; y++) {
            const tile = {
                x, 
                y
            }
            row.push(tile)
        }
        board.push(row)
    }
    return board
}