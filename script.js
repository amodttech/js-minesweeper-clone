/// display/UI



// 1. populate board with tiles/mines


//2. left click on tiles 
    // a. reveal tiles


//3. right click on tiles
    //a. mark tiles


//4. check for win/lose

import {createBoard, markTile, TILE_STATUSES} from "./minesweeper.js"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 4


const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count")

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener('click', () => {
        })
        tile.element.addEventListener('contextmenu', e => {
            e.preventDefault()
            markTile(tile)
            listMinesLeft()
        })
    })
})


boardElement.style.setProperty("--size", BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0)
    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}