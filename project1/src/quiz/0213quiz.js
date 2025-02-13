// 요구사항:
// 1. useCounter라는 커스텀 훅을 만드세요
// 2. 증가, 감소, 리셋 기능이 있어야 합니다
// 3. 최소값과 최대값을 설정할 수 있어야 합니다
// 4. 현재 값이 최소값이나 최대값일 때는 해당 버튼이 비활성화되어야 합니다

function useCounter(initialValue = 0, { min = 0, max = 10 } = {}) {
    // 여기에 코드를 작성하세요
  }
  
  // 사용 예시
  function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(5, { min: 0, max: 10 });
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  