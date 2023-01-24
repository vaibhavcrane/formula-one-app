import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ISeason } from "../../lib/interfaces/ergast";

// * ----------START Get seasons---------- * //
const getSeasonsList = async (offset: Number) => {
	return (await ergast
		.get(`/seasons.json?offset=${offset}`)
		.then((res) => res.data.MRData.SeasonTable.Seasons)) as ISeason[];
};

export const useSeasonsList = (offset: Number) => {
	return useQuery({
		queryKey: ["Seasons", offset],
		queryFn: () => getSeasonsList(offset),
		keepPreviousData: true,
	});
};
// * ----------END Get seasons---------- * //
