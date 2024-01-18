import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {name === "리액트" && <div>리액트가 아닙니다.</div>}
      <div>오늘도 화이팅</div>
      <div>코딩은 정말 재밌어 아하하</div>
      <div className="App">헬로</div>
      //이런주석은 안됩니다.
    </>
  );
}

export default App;
