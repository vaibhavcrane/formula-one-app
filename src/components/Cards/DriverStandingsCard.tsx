// ! Flags not added
//TODO; add API for flag

//api import
import { useDriversChampionshipStandings } from "../../api/ergast";

//component imports
import { Card, Loading } from "../../components";

export const DriverStandingsCard = () => {
	const { data: driversChampionshipStandings, isLoading, isError } = useDriversChampionshipStandings();

	if (isLoading) return <Loading />;
	if (isError) return <p>Error</p>;

	return (
		<Card span={{ large: 1, medium: 1 }}>
			<div className='card__content'>
				<p className='card__header'>driver standings</p>
				<table className='card__results'>
					<tbody>
						{driversChampionshipStandings.slice(0, 6).map((driver, index) => (
							<tr key={index}>
								<td>{index + 1}.</td>
								<td>
									{driver.Driver.givenName} {driver.Driver.familyName}
								</td>
								<td className='card__results--points'>{driver.points} pts</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Card>
	);
};
