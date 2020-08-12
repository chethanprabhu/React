import React, { useState } from 'react'
import Child1 from ".//components/Child1"

export const NameComponent = React.createContext();
export const PasswordComponent = React.createContext();

const App = () => {
	const [name , setName] = useState({
		name: "chethan",
		age: 23
	});
	const [password, setPassword] = useState(12345);

	return (
		<div>
			<NameComponent.Provider value={name} >
				<PasswordComponent.Provider value={password}>
					<Child1 />
				</PasswordComponent.Provider>
			</NameComponent.Provider>
			
		</div>
	)
}

export default App
