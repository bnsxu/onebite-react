import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const buttonProps = {
    text: "메일",
    color: "green",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>  
      {/* Spread 연산자 */}
      <Button {...buttonProps} />
      <Button text={"카페"}>
        <div>자식요소</div>
      </Button>
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  )
}

export default App