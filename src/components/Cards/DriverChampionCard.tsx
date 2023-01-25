//api import
import { useDriverChampion } from "../../api/ergast";

//componnent imports
import { Card, Loading } from "../../components";

// ! temp imports
import max from "../../assets/temp/max.png";

export const DriverChampionCard = () => {
	const { data: driverChampion, isLoading, isError } = useDriverChampion();

	const flagURL = "https://flagcdn.com/w320/nl.png";

	if (isLoading) return <Loading />;

	if (isError) return <p>Error</p>;

	return (
		<Card
			span={{ large: 6, medium: 6 }}
			LinkTo='/driver-standings'>
			<div
				className='background-flag'
				style={{ backgroundImage: "url(" + flagURL + ")" }}></div>
			<div className='card--champion'>
				<div className='card__content'>
					<p className='card__header'>driver's champion</p>
					<h3 className='card__name card__name--champion'>
						{driverChampion.Driver.givenName} {driverChampion.Driver.familyName}
					</h3>
					<p className='card__subtext card__subtext--points'>{driverChampion.points} pts</p>
					<p className='card__team'>{driverChampion.Constructors[0].name}</p>
				</div>
				<img
					className='card__image--champion card__image'
					src={max}
					alt={driverChampion.Driver.familyName}
				/>
			</div>
		</Card>
	);
};
//TODO: add API for image
