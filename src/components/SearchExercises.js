/** @format */

import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Stack,
	TextField,
	Typography,
	typography,
} from "@mui/material";
export default function SearchExercises() {
	const [search, setsearch] = useState("");

    const handleSearch = async ()=>{
        if(search){
           // const exercisesDate =await fetchData();
        }

    }

	return (
		<Stack
			alignItems='center'
			mt='40px'
			justifyContent='center'
			p='20px'>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
				mb='50px'
				textAlign='center'
				mt='100px'>
				Awesome Exercises You should know
			</Typography>
			<Box
				position='relative'
				mb='72px'>
				<TextField
					sx={{
						input: { fontWeight: "700", border: "none", borderRadius: "40px" },
						width: { lg: "1170px", xs: "350px" },
					}}
					height='72px'
					value={search}
					onChange={(e) => setsearch(e.target.value.toLowerCase())}
					placeholder='Search Exercises'
					type='text'></TextField>
				<Button
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "175px", xs: "80px" },
						fontSize: { lg: "20px", xs: "10px" },
						height: "56px",
						position: "absolute",
						right: "0",
					}}
					className='Search-btn'
					onClick={handleSearch()}>
					Search
				</Button>
			</Box>
		</Stack>
	);
}
