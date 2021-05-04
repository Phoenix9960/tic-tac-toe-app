import React, { useState } from 'react'
import Board from './Board';

const calculateWinner = (board) => {
    const winnigPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < winnigPositions.length; i++) {
        const [a,b,c] = winnigPositions[i];

        if( board[a] && board[a] === board[b] && board[a] === board[c] ){
            return true;
        }
    }

    return false;
}


const Game = () => {

    const [board, setBoard] = useState(new Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true);
    const [win, setWin] = useState(false);

    const handleClickBoard = (pos) => {
        const copy = [...board];
        const winner = calculateWinner(copy) 
        if(winner){
            return
        }
        if(!copy[pos]){
            copy[pos] = (isXNext) ? 'X' : 'O';
            setBoard(copy);
            setIsXNext(!isXNext);
            if(calculateWinner(copy)){
                setWin(true);
            }
        }
    }

    const handleNewGame = () => {
        setBoard(new Array(9).fill(null))
        setIsXNext(true);
        setWin(false);
    }

    return  (
        <>
            <h2>{ (win) ? `Ganador :  ${(!isXNext) ? 'X' : 'O'} ` : `Next Turn : ${(isXNext) ? 'X' : 'O'}` } </h2>
            <Board tiles = {board} handleClick = {handleClickBoard} />
            <button className = "btnNGame " onClick = { handleNewGame } >New Game</button>
        </>
    )
}

export default Game;