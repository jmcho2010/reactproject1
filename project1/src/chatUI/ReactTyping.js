// typing-animation의 경우는 babel을 요구함.
// npm i --save-dev babel-runtime
// yarn add @babel/runtime
import React from "react";
import Typing from "react-typing-animation";

// 타이핑 라이브러리 관련 props
// speed
// delay
// backspace
// loop
// 스타일 커스텀
// 이벤트 핸들링 추가. 
const TypingExam = () =>{
    return(
        // <Typing speed={1}>
        //     <h1>뭐야 이거???? 뭐임뭐임</h1>
        // </Typing>
        // <Typing loop={true}>
        //         <h1>뭐야 이거???? 뭐임뭐임</h1>
        //         <Typing.Speed ms={100} />
        //         <h1>두번째 내용들</h1>
                
        //         <h1>gunchim ssak!!</h1>
        //         {/*backspace는 아래에 선언해야하는 특징. */}
        //         <Typing.Backspace count={5} />

        // </Typing>

        // 아래의 경우는 타이핑이 모두 끝났을때 실행되는 이벤트를 구현.
        // <Typing onFinishedTyping={() => console.log('Typing completed')}>
        // <span>Typing with callback</span>
        // </Typing>
        
            // <Typing speed={50}>
            //   <h1>Welcome to my website</h1>
            //   <Typing.Delay ms={1000} />
            //   <p>I am a developer</p>
            //   <Typing.Delay ms={500} />
            //   <Typing.Backspace count={9} />
            //   <span>designer</span>
            //   <Typing.Delay ms={500} />
            //   <Typing.Backspace count={8} />
            //   <span>creator</span>
            // </Typing>
          
    );

}

export default TypingExam;
