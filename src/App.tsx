import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";
import Tweet from "./components/Tweet";
import "./styles/main.css";

function App() {
	return (
		<div className="my-0 mx-auto">
			<Sidebar />
			<Timeline />
		</div>
	);
}
export default App;
