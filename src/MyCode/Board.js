import React from 'react'
import Square from './Square';

const Board = ({ tiles, handleClick }) => {

    return (
        <div>
            <div>
                <Square pos = {0} value = { tiles[0] } handleOnClick = {handleClick} />
                <Square pos = {1} value = { tiles[1] } handleOnClick = {handleClick} />
                <Square pos = {2} value = { tiles[2] } handleOnClick = {handleClick} />
            </div>
            <div>
                <Square pos = {3} value = { tiles[3] } handleOnClick = {handleClick} />
                <Square pos = {4} value = { tiles[4] } handleOnClick = {handleClick} />
                <Square pos = {5} value = { tiles[5] } handleOnClick = {handleClick} />
            </div>
            <div>
                <Square pos = {6} value = { tiles[6] } handleOnClick = {handleClick} />
                <Square pos = {7} value = { tiles[7] } handleOnClick = {handleClick} />
                <Square pos = {8} value = { tiles[8] } handleOnClick = {handleClick} />
            </div> 
        </div>
    )
}

export default Board;
