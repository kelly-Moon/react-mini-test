import React, { useRef } from "react";

const RefExample = () => {
  const textRef = useRef(null);
  // useRef = HTML 요소 잡는 도구
  const changColor = () => {
    textRef.current.style.color = "red";
  };

  return (
    <div>
      <h2 ref={textRef}>안녕하세요</h2>
      <button onClick={changColor}>색바꾸기</button>
    </div>
  );
};

export default RefExample;
