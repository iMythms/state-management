import React, { useState } from 'react'
import './App.css'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)
	const [userInfo, setUserInfo] = useState({
		firstName: 'Mytham',
		lastName: 'Jasim',
		hasPets: true,
		age: 24,
	})

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
		console.log(`Dark Mode is ${darkMode}!`)
	}

	return (
		<section className="container mx-auto">
			<div className={darkMode ? 'dark' : 'light'}>
				<h1>Hello World</h1>
				<p>
					Hi! My name is {userInfo.firstName} {userInfo.lastName}, I am{' '}
					{userInfo.age} years old and I do {userInfo.hasPets ? '' : 'not'} have
					pets.
				</p>
				<button
					onClick={() => {
						toggleDarkMode()
					}}
				>
					{darkMode ? 'Light' : 'Dark'}
				</button>
			</div>
		</section>
	)
}

export default App
