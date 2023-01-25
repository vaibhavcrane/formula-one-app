//TODO: add api for images

//api import
import { useConstructorDriverForSeason, useConstructorChampion } from "../../api/ergast";

//interface import
import { IDriver } from "../../lib/interfaces/ergast";

//componnent imports
import { Card, Loading } from "../../components";

//temp imports
import redbull from "../../assets/temp/redbull.png";

export const ConstructorChampionCard = () => {
	const { data: constructorChampion, isLoading, isError } = useConstructorChampion();

	const constructorId = constructorChampion?.Constructor.constructorId;

	const {
		data: constructorDrivers,
		isLoading: driverLoading,
		isError: driverError,
	} = useConstructorDriverForSeason(constructorId);

	const flagURL = "https://flagcdn.com/w320/nl.png";

	if (isLoading) return <Loading />;

	if (isError) return <p>Error</p>;

	if (driverLoading) return <Loading />;

	if (driverError) return <p> Error </p>;

	return (
		<Card
			span={{ large: 6, medium: 6 }}
			className='constructors'
			LinkTo='/constructor-standings'>
			<div
				className='background-flag'
				style={{ backgroundImage: "url(" + flagURL + ")" }}></div>
			<div className='card--champion'>
				<div className='card__content'>
					<p className='card__header'>cosntructor's champion</p>
					<h3 className='card__name card__name--champion'>{constructorChampion.Constructor.name}</h3>
					<p className='card__subtext card__subtext--points'>{constructorChampion.points} pts</p>
					{constructorDrivers.map((driver: IDriver) => (
						<p
							className='card__team'
							key={driver.driverId}>
							{driver.givenName} {driver.familyName}
						</p>
					))}
				</div>
				<img
					className='card__image--champion card__image'
					src={redbull}
					alt={constructorChampion.Constructor.name}
				/>
			</div>
		</Card>
	);
};
