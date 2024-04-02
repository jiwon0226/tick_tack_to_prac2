import { useState } from "react"; //기억할 수 있는 유즈스테이트

function Square() {
  const [value, setValue] = useState(null); //value를 setValue로 세팅하겠다.
  //null은 초기값이라 지금 value는 null이다.

  function handleClick() {
    //console.log("click");
    //클릭이라는 글씨를 콘솔에서 보여줌
    // -> setValue를 'x'로 설정하겠다.
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button> //value</button>; //중복되는 코드 함수화하기
    //인수값을 받아서 보여주기, onClick은 {handleClick} -> 클릭글씨 보여줌
  );
}

export default function board() {
  //함수 정의
  // export는 외부에서 접근할 수 있고, default는 다른 파일에서 주요 함수임을 알려줌

  const [sequares, setSquares] = useState(Array(9).fill(null));
  //틱택토는 9칸의 상태를 모두 알고 있어야 함
  //null값을 기본으로 갖는 9칸 배열을 갖는 squares라는 state 변수를 선언
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
  //value 프롭 전달 (squares)
}
