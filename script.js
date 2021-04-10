/// display/UI



// 1. populate board with tiles/mines


//2. left click on tiles 
    // a. reveal tiles


//3. right click on tiles
    //a. mark tiles


//4. check for win/lose

import {createBoard} from "./minesweeper.js"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 4


const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-count")

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})

boardElement.style.setProperty("--size", BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES