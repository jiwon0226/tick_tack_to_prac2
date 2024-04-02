function Square({ value }) {
  function handleClick() {
    console.log("click");
    //클릭이라는 글씨를 콘솔에서 보여줌
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
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </>
  );
}
