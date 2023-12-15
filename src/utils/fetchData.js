/** @format */

export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "741b23ce23msh575ac8ac97f2173p14385ejsncc30b8463cf0",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};
