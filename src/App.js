/** @format */

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ExerciseDetial from "./pages/ExerciseDetial";

export default function App() {
	return (
		<Box
			width='400px'
			sx={{ width: { xl: "1488px" } }}
			m='auto'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/exercises/:id'
					element={<ExerciseDetial />}
				/>
			</Routes>
			<Footer />
		</Box>
	);
}
