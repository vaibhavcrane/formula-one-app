import { useContext, useEffect } from "react";
import { SeasonContext } from "../contexts/SeasonContext";

const useSeason = (year: number | "current") => {
	const { setYear } = useContext(SeasonContext);
	useEffect(() => {
		setYear(year);
	});
};

export default useSeason;
