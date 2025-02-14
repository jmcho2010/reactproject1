// effect
// react의 컴포넌트들은 외부 시스템과 동기화가 필요한경우가 있음
//  -> 서버 연결 설정, 렌더링후 분석결과를 보낼때, 그 외 데이터 비동기 로딩시.\
//  -> 화면에 요소들 로딩(렌더링)다 끝나고 실행할 내용들이 있다면 사용.

import { useEffect, useRef, useState } from "react";

// useEffect는 promise then 메서드와도 비슷.

// 컴포넌트의 유형

// 렌더링코드 : 프로퍼티와 상태를 가져와 변환한후에 화면에 표시할 내용을 리턴
//   -> JSX를 통해 화면에 표시할 내용을 리턴.
//   -> 가장좋은 렌더링 코드는 결과만 어떻게 보여줄건지만 고민.(결과 계산)
//      (단순히 결과만 보여준다해서 순수코드라고도 부름)

// 이벤트 핸들러
// 어플리케이션에서 일어나는 이벤트를 제어하는 영역
// 컴포넌트 내부에 중첩되어있는 함수들. -> 실질적 작업 수행의 영역.
// react의 이벤트 핸들러는 side effect를 포함.(프로그램의 상태를 변경)
//  -> 효과는 필요할때 쓰는것이며 필수는 아님.


// effect 
//  -> 화면이 업데이트 된 후에 실행이되니 외부와의 동기화 관점으로도
//     해석할수 있음.(네트워크 연결, 외부 API 호출)
// 

// effect의 작성
// 1. 효과선언 : useEffect를 통해 렌더링 직후 실행되도록 처리할수 있음
// 2. 종속성 지정 : 매 렌더링마다 실행하는 대신 필요할때만 다시 실행.
//     -> fadein의 경우는 컴포넌트가 보일때 실행되야함.
//     -> 해당 컴포넌트에 종속성을 지정하여 제어하는 방법이 있음.
// 3. 정리작업추가 : 일부 효과는 수행하던 작업의 중지, rollback시 사용해야할수 있음.
//     -> 구독/ 구독취소, 데이터로딩 / 취소

// 이 컴포넌트는 약간의 수정이 필요.(처음 호출시에는 DOM이 존재하지 않음.)
function VideoLoading({ src, isPlaying }) {
    const ref = useRef(null);
  
    // useEffect 훅을통해 컴포넌트가 렌더링된후 실행할수 있도록
    // 해당 내용들을 제어.
    // 1. VideoLoading 컴포넌트를 실행.
    // 2. 컴포넌트가 렌더링이 진행
    // 3. 화면을 업데이트 -> video 태그가 DOM에 등록
    // 4. 효과를 제어.
    // 5. 효과는 App에서 isplaying이라는 state(상태값)이 존재하기 때문에
    //    그것을 기반으로 play, pause를 호출.
    useEffect(() =>{
        if (isPlaying) {
            ref.current.play();  // Calling these while rendering isn't allowed.
          } else {
            ref.current.pause(); // Also, this crashes.
          }
    });

  
    return <video ref={ref} src={src} loop playsInline />;
  }

// 렌더링 도중에 DOM에 대한 작업을 수행하려는 코드다 보니 
// 에러가 날수밖에 없음.
//  -> VideoLoading 컴포넌트 호출시에는 아직 DOM이 없음.
// 언제 그렇다면 DOM이 불러와 지는가? : JSX가 완전히 리턴된후.
export default function App(){

    // 처음부터 영상이 재생되지 않도록처리.
    const [isplaying, setIsPlaying] = useState(false);

    return(
        <>
        <button onClick={() => setIsPlaying(!isplaying)}>
            {isplaying ? '영상 중단' : '영상 재생'}
        </button>
        <VideoLoading 
            isPlaying={isplaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        </>
    );

}
