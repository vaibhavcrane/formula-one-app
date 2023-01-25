//TODO: add api for images
//TODO: fix weekend date

//api import
import { useNextRace } from "../../api/ergast";

//componnent imports
import { Card, Loading } from "../../components";

export const NextRaceCard = () => {
	const { data: nextRace, isLoading, isError } = useNextRace();

	if (isLoading) return <Loading />;

	if (isError) return <p>Error</p>;

	const FormatDate = new Intl.DateTimeFormat("en-us", {
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});

	const FormatWeekend = new Intl.DateTimeFormat("en-us", {
		month: "short",
		day: "2-digit",
	});

	return (
		<Card span={{ large: 4, medium: 6 }}>
			<div className='card--race'>
				<div className='card__content'>
					<p className='card__header'>next race</p>
					<img
						src='src/assets/temp/bahrain.png'
						alt={nextRace.Circuit.circuitName}
						className='card__image card__image--race'
					/>
					<p className='card__weekend'>
						{FormatWeekend.format(Date.parse(nextRace.FirstPractice.date))}
						{" - "}
						{FormatWeekend.format(Date.parse(nextRace.date))}
					</p>
					<h3 className='card__name card__name--race'>{nextRace.raceName}</h3>
					<p className='card__subtext card__subtext--circuit'>{nextRace.Circuit.circuitName}</p>
					<table className='card__schedule'>
						<tbody>
							<tr>
								<td>fp1</td>
								<td>
									{FormatDate.format(Date.parse(nextRace.FirstPractice.date + " " + nextRace.FirstPractice.time))}
								</td>
							</tr>
							<tr>
								<td>fp2</td>
								<td>
									{FormatDate.format(Date.parse(nextRace.SecondPractice.date + " " + nextRace.SecondPractice.time))}
								</td>
							</tr>
							<tr>
								<td>fp3</td>
								<td>
									{FormatDate.format(Date.parse(nextRace.ThirdPractice.date + " " + nextRace.ThirdPractice.time))}
								</td>
							</tr>
							<tr>
								<td>qualifying</td>
								<td>{FormatDate.format(Date.parse(nextRace.Qualifying.date + " " + nextRace.Qualifying.time))}</td>
							</tr>
							<tr>
								<td>race</td>
								<td>{FormatDate.format(Date.parse(nextRace.date + " " + nextRace.time))}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Card>
	);
};
