import React from 'react'

const App = () => {
	const [ details, setDetails ] = React.useState({
		name: '',
		email: '',
		password: '',
		mobile: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value
		})
	}

	console.log(details)
	return (
		<div>
			<p>{details.name}</p>
			<p>{details.email}</p>
			<p>{details.password}</p>
			<p>{details.mobile}</p>
			<input type="text" value={details.name} onChange={handleChange}  name="name" placeholder="Enter the name"	/>
			<br/>
			<input type="text" value={details.email} onChange={handleChange}  name="email" placeholder="Enter the email"	/>
			<br/>
			<input type="text" value={details.password} onChange={handleChange}  name="password" placeholder="Enter the password"	/>
			<br/>
			<input type="text" value={details.mobile} onChange={handleChange}  name="mobile" placeholder="Enter the mobile number"	/>
		</div>
	)
}

export default App
