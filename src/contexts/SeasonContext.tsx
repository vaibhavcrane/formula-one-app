import { createContext, useState } from "react";

type SeasonContextProviderProps = {
	children: React.ReactNode;
};

export const SeasonContext = createContext({} as any);

export const SeasonContextProvider = ({
	children,
}: SeasonContextProviderProps) => {
	const thisYear = new Date().getFullYear();
	const [year, setYear] = useState(thisYear);
	return (
		<SeasonContext.Provider
			value={{
				year,
				setYear,
			}}>
			{children}
		</SeasonContext.Provider>
	);
};

export default SeasonContext;
