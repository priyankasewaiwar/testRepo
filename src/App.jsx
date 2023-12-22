import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormEntry from "./Component/FormEntry";

function App() {
	const [count, setCount] = useState(0);

	return (
		<FormEntry></FormEntry>
	);
}

export default App;
