import Sidebar from "./components/Sidebar/SidebarMenu";
import Timeline from "./components/Timeline";
import Tweet from "./components/Tweet";
import "./styles/main.css";

function App() {
	return (
		<div className="mx-auto my-0 max-w-[1000px] grid grid-cols-[300px_1fr]">
			<Sidebar />
			<Timeline />
		</div>
	);
}
export default App;
