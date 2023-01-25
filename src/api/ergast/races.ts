import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";
import { IRace } from "../../lib/interfaces/ergast";

// * ----------START Get Races in Season---------- * //
const getRacesInSeason = async (year: number | "current") => {
	return (await ergast.get(`/${year}.json`).then((res) => res.data.MRData.RaceTable.Races)) as IRace[];
};

export const useRacesInSeason = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["Races", year],
		queryFn: () => getRacesInSeason(year),
	});
};
// * ----------END Get Races In Season---------- * //

// * ----------START Get Next Race---------- * //
const getNextRace = async (year: number | "current") => {
	return (await ergast.get(`/${year}/next.json`).then((res) => res.data.MRData.RaceTable.Races[0])) as IRace;
};

export const useNextRace = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["Next Race", year],
		queryFn: () => getNextRace(year),
	});
};
// * ----------END Get Next Race---------- * //

// * ----------START Get Previous Race---------- * //

const getPreviousRace = async (year: number | "current") => {
	return (await ergast.get(`/${year}/last.json`).then((res) => res.data.MRData.RaceTable.Races[0])) as IRace;
};

export const usePreviousRace = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["Previous Race", year],
		queryFn: () => getPreviousRace(year),
	});
};

// * ----------END Get Previous Race---------- * //
