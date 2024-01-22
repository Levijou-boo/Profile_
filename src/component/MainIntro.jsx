import CatCanvers from "./catCanvers";

export default function MainIntro() {
  return (
    <main>
      <div className="introment">
        <h2>안녕하세요!</h2>
        <h2>저는</h2>
        <h2>함지훈입니다</h2>
        <h2 className="back-font1">프론트 엔드 개발자로써</h2>
        <h2 className="back-font2">성장하고 싶습니다.</h2>
        <div className="typo">
          <span className="test" data-text="challenge">
            challenge
          </span>
        </div>
      </div>
      <div className="canvers">
        <CatCanvers />
      </div>
    </main>
  );
}
