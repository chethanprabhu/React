import React, { useState } from 'react'
import Child1 from ".//components/Child1"

const App = () => {
	const [name , setName] = useState("chethan");
	return (
		<div>
			<Child1 name={name}/>
		</div>
	)
}

export default App
