import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Reminder from "./components/Reminder";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div class="flex flex-row-2">
      <div>
        <SideBar />
      </div>
      <div>
        <NavigationBar />
        <div class="grid grid-row-2 gap-2 pl-2 pt-2.5">
          <div>
            <Reminder />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>col1</div>
            <div>col2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
