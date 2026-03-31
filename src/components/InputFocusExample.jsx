import React, { useEffect, useRef } from "react";

function InputFocusExample() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //페이지 열림 → 커서 자동 생성
  return (
    <div>
      <input ref={inputRef} placeholder="자동으로 커서 생김" />
    </div>
  );
}

export default InputFocusExample;
