import React from "react";
import { useState } from "react";

// 리엑트는 화면 상태를 기억해서 보여줄지 말지 결정한다
// 메뉴는 항상 두가지 상태만 있다. 열림 또는 닫힘
function Header() {
  const [open, setOpen] = useState(false);
  // open -> 현재 상태 저장변수
  // setOpen -> 상태 변경 함수
  // false -> 처음 상태는 닫힘
  // 한마디로 메뉴가 열렸는 닫혔는지 기억하는 변수다
  // [현재 상태, 변경함수]

  return (
    <header>
      <h1>MOON</h1>
      <button onClick={() => setOpen(!open)}>menu</button>

      {open && (
        <nav>
          <a href="#about">aout</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
        </nav>
      )}
    </header>
    //open 이 true이면 nav를 보여주고, false 이면 아무것도 보여주지 않는 코드
    // 자바스크리브에선 if (open) {return <nav>메뉴</nav>} 이랑 같은 뜻
    // 하지만 React에서는 if를 JSX 안에서 못 쓰기 때문에
  );
}

export default Header;
