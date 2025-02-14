import { useEffect, useState } from "react";


export default function Test(){
    const [count, setCount] = useState(0);

    // 이 경우는 모든 렌더링후 실행되는 구조
    // 가볍고, 렌더링후에 무조건 실행하고싶다면 (뭐든지)
    useEffect(() => {
      setCount(count + 1); 
    });
    // 컴포넌트가 처음 랜더링 됐을때만 실행.
    // 데이터 한번만 로딩하거나 컴포넌트 첫 로딩시에만 실행하고 싶을떄 활용.
    useEffect(() => {
        setCount(count + 1);
    }, []);
    // 첫 랜더링시, count가 변경된 후에도 실행.
    useEffect(() => {
        setCount(count + 1);
    }, [count]);
    return(
        <>
            <h1>{count}</h1>
        </>
    )
}
