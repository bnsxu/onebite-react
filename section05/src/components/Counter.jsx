import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
  
    return(
      <div>
        <h1>{count}</h1> 
        <button onClick={()=>{
          //상태변화 함수, 인수: 변경하고자 하는 값
          setCount(count + 1);
        }}>+</button>
      </div>
    );
};

export default Counter;