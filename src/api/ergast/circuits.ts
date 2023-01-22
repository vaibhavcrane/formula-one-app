import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";

// * ----------START Get circuits---------- * //
const getCircuits = async () => {
	return await ergast.get(`/circuits.json?limit=100`);
};

export const useCircuits = () => {
	return useQuery({
		queryKey: ["circuits"],
		queryFn: () => getCircuits(),
	});
};
// * ----------END Get circuits---------- * //
