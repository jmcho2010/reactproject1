// useEffect
// 사용자에게 내용을 표시하는동안 연결을 유지해야한다면?
// createConnection이라는 API를 사용하면됨.

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
