import React, { useState } from "react";

function HeaderTest() {
  // 메뉴 열림 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 기본 보이기/숨기기 토글 상태 ⭐ 추가
  const [isVisible, setIsVisible] = useState(false);

  // 카운트 상태
  const [count, setCount] = useState(0);

  // 인사말 텍스트 상태
  const [greeting, setGreeting] = useState("안녕하세요");

  // 첫 번째 박스 표시 상태
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  // 두 번째 박스 active 상태
  const [isBoxActive, setIsBoxActive] = useState(false);

  return (
    <section id="headerTest">
      <h1>MOON</h1>

      {/* 메뉴 토글 */}
      <button onClick={() => setIsMenuOpen((prev) => !prev)}>menu</button>

      {isMenuOpen && (
        <nav>
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
        </nav>
      )}

      {/* 기본 토글 (보이기 / 숨기기) ⭐ 추가 */}
      <button onClick={() => setIsVisible((prev) => !prev)}>기본 토글</button>

      {isVisible && <p>이 문장이 보였다가 사라집니다</p>}

      {/* 숫자 증가 */}
      <button onClick={() => setCount(count + 1)}>count</button>
      <p>숫자: {count}</p>

      {/* 텍스트 변경 */}
      <button onClick={() => setGreeting("밥은 먹었니")}>눌러봐</button>
      <p>인사: {greeting}</p>

      {/* 클래스 토글 1 */}
      <button onClick={() => setIsBoxVisible((prev) => !prev)}>토글버튼</button>
      <div className={`box ${isBoxVisible ? "show" : ""}`}>
        여기에 show클래스 add 할거야
      </div>

      {/* 클래스 토글 2 */}
      <button onClick={() => setIsBoxActive((prev) => !prev)}>버튼</button>
      <div className={`box2 ${isBoxActive ? "active" : ""}`}>
        여기가 보였다 안보였다
      </div>
    </section>
  );
}

export default HeaderTest;
