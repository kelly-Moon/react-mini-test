function Works() {
  const items = ["Project A", "Project B", "Project C"];

  return (
    <section id="works">
      <h2>Works</h2>

      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
}
//React에서는 같은 구조를 여러 개 만들 때 복붙하지 않고 map으로 반복 생성한다
//구조가 같고 데이터만 다를 때 map을 사용한다
//“React는 페이지를 만드는 게 아니라 조립한다”
export default Works;
