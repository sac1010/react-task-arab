import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/Graph";
import PieChartContainer from "./components/PieChart";
import Sidebar from "./components/Sidebar";
import TableContainer from "./components/TableContainer";
import Profile from "./components/Profile";
import ProfileTop from "./components/ProfileTop";

function App() {
  return (
    <div className="flex lg:h-screen">
      <div className="w-2/12 hidden md:block">
        <Sidebar />
      </div>

      {/* right-side */}
      <div className=" bg-violet-50 h-full w-full  md:w-10/12">
        <div className="w-full p-10 font-semibold text-lg flex justify-between">
          <div>

          Good Morning 😊
          </div>
          <ProfileTop/> 
        </div>
        <div className="grid grid-cols-12 gap-12 px-10">
          <div className="lg:col-span-8 col-span-12 h-[400px]">
            <Graph />
          </div>
          <div className="lg:col-span-4 col-span-12 h-[400px]">
            <PieChartContainer />
          </div>
        </div>
        <div className=" gap-12 px-10 grid grid-cols-12 mt-6">
          <div className="lg:col-span-10 col-span-12">
            <TableContainer />
          </div>
          <div className="lg:col-span-2 col-span-12">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
