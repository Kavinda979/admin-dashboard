import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div>
        <SideBar />
      </div>
      <div>
        <NavigationBar />
        <div class="grid grid-rows-2 gap-4">
          <div>Row 1</div>
          <div>Row 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
