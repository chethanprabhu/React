import React, { useState } from 'react'
import Child1 from ".//components/Child1"
import {NameComponent} from "./context"

const App = () => {
	const [name , setName] = useState({
		name: "Eagle",
		age: 23
	});

	return (
		<div>
			<NameComponent.Provider value={name} >	
					<Child1 />
			</NameComponent.Provider>
		</div>
	)
}

export default App
