import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Reminder from "./components/Reminder";
import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex flex-row-2">
      <div>
        <SideBar />
      </div>
      <div>
        <NavigationBar />
        <div className="grid grid-row-2 gap-2 pl-2 pt-2.5">
          <div>
            <Reminder />
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <Tasks />
            </div>
            <div>col2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
