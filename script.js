/// display/UI



// 1. populate board with tiles/mines


//2. left click on tiles 
    // a. reveal tiles


//3. right click on tiles
    //a. mark tiles


//4. check for win/lose

import {createBoard} from "./minesweeper.js"

const board = createBoard(2, 2)

const boardElement = document.querySelector(".board")
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})
