import './App.css';
import { useState } from 'react';

function Game() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [role, setRole] = useState('X');

    function handlePlay(nextSquare) {
        setSquares(nextSquare);
        setRole(role === 'X' ? 'O' : 'X');
    }

    return (
        <>
            <div className='title'>
                欢迎来到游戏世界
            </div>
            <Board squares={squares} onPlay={handlePlay} role={role} />
        </>
    );
}

function Board({ squares, onPlay, role }) {

    const [over, setOver] = useState(false)

    function handleClick(index) {
        if (squares[index] || over) {
            return;
        }
        let nextSquare = squares.slice();
        if (role === 'X') {
            nextSquare[index] = "X";
        } else {
            nextSquare[index] = "O";
        }
        let status = calculateWinner(nextSquare);
        if (status) {
            console.log('THE WINNER IS', role);
            setOver(true);
            onPlay(nextSquare);
            return;
        }
        onPlay(nextSquare);
    }



    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Square({ value, onSquareClick }) {

    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    )
}

export default Game;
