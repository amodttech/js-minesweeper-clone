///  game logic

export const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked'
}

export function createBoard(boardsize, numberOfMines) {
    const board = []
    const minePositions = getMinePositions(boardsize, numberOfMines)
    for (let x = 0; x < boardsize; x++) {
        const row = []
        for (let y = 0; y < boardsize; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILE_STATUSES.HIDDEN
            const tile = {
                element,
                x, 
                y,
                mine: minePositions.some(positionMatch.bind(null, {x,y})),
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                }
            }
            row.push(tile)
        }
        board.push(row)
    }
    return board
}

function getMinePositions(boardsize, numberOfMines) {
    const positions = []
    while (positions.length < numberOfMines) {
        const position = {
            x: randomNumber(boardsize),
            y: randomNumber(boardsize)
        }
        if (!positions.some(p => positionMatch(p, position))) { //does this position already exist, if not false, push to positions array
            positions.push(position)
        }
    }

    

    return positions
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)  // makes a random number and multiplies by size.  .floor() turns it into an integer
}

function positionMatch(a,b) { // takes two positions: a,b and see if they have the same coordinates.  if both x and y matche, return true
    return a.x === b.x && a.y === b.y

}

export function markTile(tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED){
        return
    }
    if (tile.status === TILE_STATUSES.MARKED) {
        tile.status = TILE_STATUSES.HIDDEN
    } else {
        tile.status = TILE_STATUSES.MARKED
    }
    console.log(`tile`, tile)
}

export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN) {
        return
    }
    if (tile.mine) {
        tile.status = TILE_STATUSES.MINE
        return
    }
    tile.status = TILE_STATUSES.NUMBER
    const adjacentiles = nearbyTiles(board, tile)
    const mines = adjacentiles.filter(t => t.mine)
    if (mines.length === 0) {
        adjacentiles.forEach(revealTile.bind(null, board))
    } else {
        tile.element.textContent = mines.length
    }
}

function nearbyTiles(board, {x,y}) {
    const tiles = []
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset]
            if (tile) tiles.push(tile)
        }
    }
    return tiles
}

export function checkWin(board){
     
}

export function checkLose(board) {
    return true
}