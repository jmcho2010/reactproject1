// useEffect
// 사용자에게 내용을 표시하는동안 연결을 유지해야한다면?
// createConnection이라는 API를 사용하면됨.

// 이거 개량하면 우리가 흔히 알고있는 API화도 가능함.

// 그런데 우리는 처음 이 컴포넌트가 로딩되고나면
// connect가 2회 호출되는것을 확인할수 있었음.
// 언마운트시 어떻게 처리되느냐 차이.
export function createConnection(){
    return{
        connect(){
            console.log("연결완료");
        },
        disconnect(){
            console.log("ㅂㅂ");
        }
    }
}
