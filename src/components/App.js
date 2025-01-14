import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter.js"
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	// we want data from Filter whether or not the user wants greased hogs, we can create a state for this
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState('name')
	const [hogList, setHogList2] = useState(hogs
		.filter(hog => showGreased ? hog.greased : true)
		.sort((hog1, hog2) => {
			if (sortBy === 'name') {
				return hog1.name.localeCompare(hog2.name)
			} else {
				return hog1.weight - hog2.weight
			}
		}))

	function hogListAdd(newName) {
		setHogList2([...hogList, { name : newName }])
	}

	return (
		<div className="App">
			<Nav />
			<Filter 
			showGreased={showGreased}
			onChangeShowGreased={setShowGreased}
			sortBy = {sortBy}
			onChangeSortBy={setSortBy}
			onChangeHogListAdd={hogListAdd}
			/>
			<div>
				<HogList 
					theHogs={hogList}
				/>
			</div>
		</div>
	);
}

export default App;