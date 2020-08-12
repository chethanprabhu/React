import React, { useState } from 'react'
import Child1 from ".//components/Child1"

export const NameComponent = React.createContext();

const App = () => {
	const [name , setName] = useState("chethan");
	const [password, setPassword] = useState(1234);
	return (
		<div>
			<NameComponent.Provider value={name} >
					<Child1 />
			</NameComponent.Provider>
			
		</div>
	)
}

export default App
