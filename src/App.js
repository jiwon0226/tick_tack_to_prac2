import { useState } from "react"; //기억할 수 있는 유즈스테이트

function Square({ value, onSquareClick }) {
  //props를 value와 onSquareClick로 세팅

  return (
    //클릭하면 온스퀘어클릭
    <button className="square" onClick={onSquareClick}>
      {value}
    </button> //value</button>; //중복되는 코드 함수화하기
    //인수값을 받아서 보여주기, onClick은 {handleClick} -> 클릭글씨 보여줌
  );
}

export default function Board() {
  //함수 정의
  // export는 외부에서 접근할 수 있고, default는 다른 파일에서 주요 함수임을 알려줌
  const [xIsNext, setXIsNext] = useState(true); //다음이 x인지
  const [squares, setSquares] = useState(Array(9).fill(null));
  //틱택토는 9칸의 상태를 모두 알고 있어야 함
  //null값을 기본으로 갖는 9칸 배열을 갖는 squares라는 state 변수를 선언

  function handleClick(i) {
    const nextSquares = squares.slice(); //배열 내용 옮겨 담기, array 유지한 채, 껍데기 만들기
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    //nextSquares[i] = "X"; //i번째 칸 x
    setSquares(nextSquares); //nextSquares를 변경된 state로 저장
    setXIsNext(!xIsNext); //순서가 끝나면 바꿔줘
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
  );
  //<Square value={squares[0]} onSquareClick={handleClick(0)} />
  //handleClick(0)는 이미 함수가 호출되고 있는 것 이므로, 너무 일찍 시행되는 것
  // 원래는 클릭해야 작동해야하잖슴
  //() => handleClick(0)은 화살표 함수로, 함수를 짧게 정의할 수 있는 방법
  //value 프롭 전달 (squares)
}
