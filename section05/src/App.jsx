import './App.css'
import {useState} from "react";

function App() {
  //컴포넌트 내에 새로운 스테이트를 생성
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  
  return (
  <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === "ON" ? "끄기" : "켜기"}</button>
    </div>

    <div>
      <h1>{count}</h1> 
      <button onClick={()=>{
        //상태변화 함수, 인수: 변경하고자 하는 값
        setCount(count + 1);
      }}>+</button>
    </div>
  </>
  );
}

export default App