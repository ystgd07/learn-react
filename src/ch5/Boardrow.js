import { useState } from "react";
import Square from "./Square";
import "./Square.css";

export default function Boardrow() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    //squares 복사
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      {/* 함수를 호출하면 무한루프에 빠지는 이유! 함수 등록과 호출의 차이 */}
      {/* <Square value={squares[0]} onSquareClick={handleClick(0)} /> */}
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 데이터의 불변성 -> 재랜더링 할 때 불필요한 재랜더링을 방지할 수 있다 모든 값이 바껴버리면 불필요한 재랜더링이 발생.
// const squares = [null, null, null, null, null, null, null, null, null];
// const nextSquares = ['X', null, null, null, null, null, null, null, null];
