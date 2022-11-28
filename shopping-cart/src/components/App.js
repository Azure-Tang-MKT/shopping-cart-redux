import "./App.css";
import ItemGrid from "./itemGrid";
import Cart from "./Cart";

function App() {
  return (
    <div className="MainPageUp">
      <header>Sruthi's Sticker Shop</header>
      <div className="MainPage">
        <div className="LeftGrid">
          <ItemGrid />
        </div>
        <div className="RightCart">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
