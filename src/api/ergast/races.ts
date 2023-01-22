import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";

// * ----------START Get Races in Season---------- * //
const getRacesInSeason = async (year: number | "current") => {
	return await ergast.get(`/${year}.json`);
};

export const useRacesInSeason = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["Races", year],
		queryFn: () => getRacesInSeason(year),
	});
};
// * ----------END Get Races In Season---------- * //
