import MainIntro from "./component/MainIntro";
import NavComponent from "./component/NavComponent";
function App() {
  return (
    <>
      <div className="container">
        <NavComponent></NavComponent>
        <MainIntro></MainIntro>
      </div>
    </>
  );
}

export default App;
