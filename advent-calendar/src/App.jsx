import "./App.css";
import HeroEl from "./components/hero";
import DayList from "./components/dayList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <HeroEl />
      <DayList />
      <Footer />
    </div>
  );
}

export default App;
