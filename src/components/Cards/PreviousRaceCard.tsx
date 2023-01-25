//api import
import { usePreviousRace, usePreviousRaceResults } from "../../api/ergast";

//components import
import { Loading } from "../Loading";
import { Card } from "./Card";

//temp import
import abudhabi from "../../assets/temp/abudhabi.png";

export const PreviousRaceCard = () => {
	const { data: previousRace, isLoading, isError } = usePreviousRace();

	const {
		data: previousRaceResults,
		isLoading: previousRaceResutlsLoading,
		isError: previousRaceResultsError,
	} = usePreviousRaceResults();

	if (isLoading) return <Loading />;

	if (isError) return <p>Error</p>;

	if (previousRaceResutlsLoading) return <Loading />;

	if (previousRaceResultsError) return <p>Error</p>;

	const FormatWeekend = new Intl.DateTimeFormat("en-us", {
		month: "short",
		day: "2-digit",
	});

	return (
		<Card span={{ large: 4, medium: 6 }}>
			<div className='card--race'>
				<div className='card__content'>
					<p className='card__header'>previous race</p>
					<img
						src={abudhabi}
						alt={previousRace.Circuit.circuitName}
						className='card__image card__image--race'
					/>
					<p className='card__weekend'>
						{FormatWeekend.format(Date.parse(previousRace.FirstPractice.date))}
						{" - "}
						{FormatWeekend.format(Date.parse(previousRace.date))}
					</p>
					<h3 className='card__name card__name--race'>{previousRace.raceName}</h3>
					<p className='card__subtext card__subtext--circuit'>{previousRace.Circuit.circuitName}</p>
					<table className='card__results'>
						<tbody>
							{previousRaceResults.slice(0, 5).map((data, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}.</td>
										<td>
											{data.Driver.givenName} {data.Driver.familyName}
										</td>
										<td className='card__results--points'>{data.points} pts</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</Card>
	);
};
