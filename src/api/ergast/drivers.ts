import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";

// * ----------START Get drivers in particular season---------- * //
/**
 * It returns a React hook that fetches the drivers in a given season
 * @param {number | "current"} year is set from the SeasonContext context
 * @returns An object with the following properties:
 */
const getDriversInSeason = async (year: number | "current") => {
	return await ergast.get(`/${year}/drivers.json`);
};

export const useDriversInSeason = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["drivers", year],
		queryFn: () => getDriversInSeason(year),
	});
};
// * ----------END Get drivers in particular season---------- * //

// * ----------STRART Get drivers championship standings for a particular season---------- * //
/**
 * It returns a React hook that fetches the drivers championship standings for a given year
 * @param {number | "current"} year is set from the SeasonContext context
 * @returns The useQuery hook returns an object with the following properties:
 */
const getDriversChampionshipStandings = async (year: number | "current") => {
	return await ergast.get(`${year}/driverStandings.json`);
};

export const useDriversChampionshipStandings = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["driverStandings", year],
		queryFn: () => getDriversChampionshipStandings(year),
	});
};
// * ----------END Get drivers championship standings for a particular season---------- * //

// * ------------START Get driver details---------- * //
/**
 * It returns a query object that contains the data, loading state, and error state of the query
 * @param {string | undefined} driverId
 * @returns The useQuery hook returns an object with the following properties:
 */
const getDriverDetails = async (driverId: string | undefined) => {
	return await ergast.get(`/drivers/${driverId}.json`);
};

export const useDriverDetails = (driverId: string | undefined) => {
	return useQuery({
		queryKey: ["driverDetails", driverId],
		queryFn: () => getDriverDetails(driverId),
	});
};
// * ------------END Get driver details---------- * //

const getDriverChampion = async (year: number | "current") => {
	return await ergast.get(`/${year}/driverStandings/1.json`);
};

export const useDriverChampion = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["driverChampion", year],
		queryFn: () => getDriverChampion(year),
	});
};
