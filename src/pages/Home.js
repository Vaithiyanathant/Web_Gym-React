/** @format */

import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

export default function Home() {
	return (
		<Box>
			<HeroBanner></HeroBanner>
			<SearchExercises></SearchExercises>
			<Exercises></Exercises>
		</Box>
	);
}
