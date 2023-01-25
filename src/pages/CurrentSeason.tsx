//components import
import {
	MainGrid,
	DriverChampionCard,
	ConstructorChampionCard,
	NextRaceCard,
	PreviousRaceCard,
	SmallGrid,
	DriverStandingsCard,
	ConstructorStandingsCard,
} from "../components";

//hooks import
import useSeason from "../hooks/useSeason";

//styles import
import "../styles/pages/current-season.scss";

export const CurrentSeason = () => {
	useSeason("current");

	return (
		<MainGrid className='container season-overview'>
			<DriverChampionCard />
			<ConstructorChampionCard />
			<NextRaceCard />
			<PreviousRaceCard />
			<SmallGrid className='standings-column'>
				<DriverStandingsCard />
				<ConstructorStandingsCard />
			</SmallGrid>
		</MainGrid>
	);
};
