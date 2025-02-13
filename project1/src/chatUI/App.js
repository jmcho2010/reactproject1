// react-typing-animation 패키지 설치
// npm config set legacy-peer-deps true
// npm i
// npm i --save react-typing-animation
import React, {useState, useEffect} from 'react';
import Typing from 'react-typing-animation';

const App = () =>{
    
    
    // useState : 클래스 컴포넌트 없이 상태와 다른 react 기능을 함수컴포넌트에서
    //            사용하기위해 등장한 Hook
    //  -> 해당 컴포넌트 까지만 살아있음.
    // 현재 상태값은 messages와 currentTypingId가 보관을 할 것.
    // 만약 두 상태값에 대한 업데이트가 감지되면
    //  ->setMessages, setCurrentTypingId메서드를 통해 상태값을 업데이트.


    //모든 채팅 메세지를 저장.
    const [messages, setMessages] = useState([]); 
    // 현재 AI가 타이핑 하는 메세지 추적
    // null이 들어오는 이유는 AI가 처음 화면 실행됐을때부터 타이핑 메세지를
    // 추적할 이유는 없기때문. -> 타이핑 메세지가 입력됐을때
    const [currentTypingId, setCurrentTypingId] = useState(null);
    
    
    // setMessages((prevMessages) => [
    //     ...prevMessages,
    //     {어떠한 값들을 추가하는 업데이트 진행}
    // ]);

    return(
        <div>
            <div>
                
            </div>
            <div>
                
            </div>
        <form>
            <input></input>
        </form>
        </div>
    );
};