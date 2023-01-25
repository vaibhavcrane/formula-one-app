import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SeasonContext } from "../../contexts/SeasonContext";
import { IResult } from "../../lib/interfaces/ergast";

// * ----------START Get Previous Race---------- * //

const getPreviousRaceResults = async (year: number | "current") => {
	return (await ergast
		.get(`/${year}/last/results.json`)
		.then((res) => res.data.MRData.RaceTable.Races[0].Results)) as IResult[];
};

export const usePreviousRaceResults = () => {
	const { year } = useContext(SeasonContext); // Get the year from the SeasonContext context
	return useQuery({
		queryKey: ["Previous Race Results", year],
		queryFn: () => getPreviousRaceResults(year),
	});
};

// * ----------END Get Previous Race---------- * //
