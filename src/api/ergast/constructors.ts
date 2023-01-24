import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";
import { IConstructor, IConstructorStandings, IDriver } from "../../lib/interfaces/ergast";

// * ----------START Get constructors in particular season---------- * //

/**
 * It returns a React Hook that returns a query object that contains the constructors for the current
 * season
 * @param {number | "current"} year is set from the SeasonContext context
 * @returns The useQuery hook returns an object with the following properties:
 */
const getConstructorsInSeason = async (year: number | "current") => {
	return (await ergast
		.get(`/${year}/constructors.json`)
		.then((res) => res.data.MRData.ConstructorTable.Constructors)) as IConstructor[];
};

export const useConstructorsInSeason = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["constructors", year], // Need to pass the year as a query key so that the query is refetched when the year changes
		queryFn: () => getConstructorsInSeason(year),
	});
};

// * ----------END Get constructors in particular season---------- * //

// * ----------START Get constructors championship standings for a particular season---------- * //
const getConstructorsChampionshipStandings = async (year: number | "current") => {
	return (await ergast
		.get(`${year}/constructorStandings.json`)
		.then((res) => res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)) as IConstructorStandings[];
};

export const useConstructorsChampionshipStandings = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["constructorStandings", year],
		queryFn: () => getConstructorsChampionshipStandings(year),
	});
};
// * ----------END Get constructors championship standings for a particular season---------- * //

// * ----------START Get constructors details---------- * //
/**
 * It returns a React hook that returns a query object that contains the data, loading state, and error
 * state of the query
 * @param {string | undefined} constructorId - string | undefined
 * @returns The useQuery hook returns an object with the following properties:
 */
const getConstructorDetails = async (constructorId: string | undefined) => {
	return (await ergast
		.get(`/constructors/${constructorId}.json`)
		.then((res) => res.data.MRData.ConstructorTable.Constructors[0])) as IConstructor;
};

export const useConstructorDetails = (constructorId: string | undefined) => {
	return useQuery({
		queryKey: ["constructorDetails", constructorId],
		queryFn: () => getConstructorDetails(constructorId),
	});
};
// * ----------END Get constructors details---------- * //

const getConstructorChampion = async (year: number | "current") => {
	return (await ergast
		.get(`/${year}/constructorStandings/1.json`)
		.then((res) => res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0])) as IConstructorStandings;
};

export const useConstructorChampion = () => {
	const { year } = useContext(SeasonContext);
	return useQuery({
		queryKey: ["constructorChampion", year],
		queryFn: () => getConstructorChampion(year),
	});
};

const getConstructorDriverForSeason = async (year: number | "current", constructorId: string) => {
	return (await ergast
		.get(`/${year}/constructors/${constructorId}/drivers.json`)
		.then((res) => res.data.MRData.DriverTable.Drivers)) as IDriver[];
};

export const useConstructorDriverForSeason = (constructorId: string) => {
	const { year } = useContext(SeasonContext);
	return useQuery({
		queryKey: ["constructorDriverForSeason", year, constructorId],
		queryFn: () => getConstructorDriverForSeason(year, constructorId),
	});
};
