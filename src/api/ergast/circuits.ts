import ergast from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ICircuit } from "../../lib/interfaces/ergast";

// * ----------START Get circuits---------- * //
const getCircuits = async () => {
	/* Returning the data from the API call. */
	return (await ergast
		.get(`/circuits.json?limit=100`)
		.then((res) => res.data.MRData.CircuitTable.Circuits)) as ICircuit[];
};

export const useCircuits = () => {
	return useQuery({
		queryKey: ["circuits"],
		queryFn: () => getCircuits(),
	});
};
// * ----------END Get circuits---------- * //
