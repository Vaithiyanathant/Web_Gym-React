/** @format */

import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
export default function HeroBanner() {
	return (
		<Box
			sx={{
				mt: { lg: "217px", xs: "70px" },
				ml: { sm: "50px" },
			}}
			position='relative'
			p='20px'>
			<Typography
				color='#FF2625'
				fontWeight='600px'
				fontSize='35px'
				fontFamily='poopins'>
				Fitness Club
			</Typography>
			<Typography
				mt='10px'
				ml='5px'
				fontFamily='poopins'
				fontWeight='600px'
				fontSize='26px'>
        "Be Stronger than your excuses"  
        </Typography>
			<Typography
				mt='10px'
				ml='5px'
				fontFamily='poopins'
				fontWeight='600px'
				fontSize='26px'>
			</Typography>
			<Typography
				fontFamily='poopins'
				fontWeight='600px'
				fontSize='26px'
				mt='10px'
				ml='5px'>
			</Typography>
			<Button
				variant='contained'
				color='error'
				href='#exercises'
				sx={{ padding: "10px" }}>
				Explore Exercises
			</Button>
			<Typography
				fontSize='200px'
				fontWeight={600}
				color='#fff2625'
				sx={{ opacity: 0.1, Display: { lg: "block", xs: "none" } }}>
				Exercise
			</Typography>
			<img
				src={HeroBannerImage}
				alt='banner'
				className='hero-banner-img'></img>
		</Box>
	);
}
