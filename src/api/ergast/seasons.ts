import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";

// * ----------START Get seasons---------- * //
const getSeasonsList = async (offset: Number) => {
	return await ergast.get(`/seasons.json?offset=${offset}`);
};

export const useSeasonsList = (offset: Number) => {
	return useQuery({
		queryKey: ["Seasons", offset],
		queryFn: () => getSeasonsList(offset),
		keepPreviousData: true,
	});
};
// * ----------END Get seasons---------- * //
