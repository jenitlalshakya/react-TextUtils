import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
		}
	}

	return (
		<>
		<Router>
		<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
		<div className="container my-3">
			<Routes>
				<Route exact path="/" element={<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
				<Route exact path="/about" element={<About mode={mode} />} />
			</Routes>
		</div>
		</Router>
		</>
	);
}

export default App;
