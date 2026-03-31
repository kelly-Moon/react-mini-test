import React, { useEffect, useRef } from "react";

const EffectExample = () => {
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.style.color = "blue";
  });
  //useRef = HTML 요소 잡는 도구
  // useEffect = 화면 생성 후 실행되는 함수
  // -> 화면 생성 후 특정 요소 변경 가능

  return (
    <div>
      <h2 ref={textRef}>페이지 열리면 파란색으로 변함</h2>
    </div>
  );
};

export default EffectExample;
