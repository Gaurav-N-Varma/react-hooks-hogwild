import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter.js"
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	// we want data from Filter whether or not the user wants greased hogs, we can create a state for this
	const [showGreased, setShowGreased] = useState(false)

	const hogList = hogs.filter(hog => showGreased ? hog.greased : true)

	return (
		<div className="App">
			<Nav />
			<Filter 
			showGreased={showGreased}
			onChangeShowGreased={setShowGreased}
			/>
			<HogList 
				theHogs={hogList}
			/>
		</div>
	);
}

export default App;