export default function board() {
  //함수 정의
  // export는 외부에서 접근할 수 있고, default는 다른 파일에서 주요 함수임을 알려줌
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">1</button>
        <button className="square">1</button>
      </div>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">3</button>
        <button className="square">1</button>
      </div>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">5</button>
        <button className="square">1</button>
      </div>
    </>
  );
}
