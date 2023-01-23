import React from "react";
import { raceCardData } from "../../types";

export const RaceCard = (data: raceCardData) => {
	return (
		<div className='card--race'>
			<div className='card__content'>
				<p className='card__header'>{data.header}</p>
				<img
					src={data.image}
					alt={data.name}
					className='card__image card__image--race'
				/>
				<p className='card__weekend'>{data.weekend}</p>
				<h3 className='card__name card__name--race'>{data.name}</h3>
				<p className='card__subtext card__subtext--circuit'>{data.circuit}</p>
				{data.schedule && (
					<table className='card__schedule'>
						<tbody>
							<tr>
								<td>fp1</td>
								<td>{data.schedule.fp1}</td>
							</tr>
							<tr>
								<td>fp2</td>
								<td>{data.schedule.fp2}</td>
							</tr>
							<tr>
								<td>fp3</td>
								<td>{data.schedule.fp3}</td>
							</tr>
							<tr>
								<td>qualifying</td>
								<td>{data.schedule.qualifying}</td>
							</tr>
							<tr>
								<td>race</td>
								<td>{data.schedule.race}</td>
							</tr>
						</tbody>
					</table>
				)}
				{data.results && (
					<table className='card__results'>
						<tbody>
							<tr>
								<td>1.</td>
								<td>{data.results.p1.driver}</td>
								<td className='card__results--points'>{data.results.p1.points} pts</td>
							</tr>
							<tr>
								<td>2.</td>
								<td>{data.results.p2.driver}</td>
								<td className='card__results--points'>{data.results.p2.points} pts</td>
							</tr>
							<tr>
								<td>3.</td>
								<td>{data.results.p3.driver}</td>
								<td className='card__results--points'>{data.results.p3.points} pts</td>
							</tr>
							<tr>
								<td>4.</td>
								<td>{data.results.p4.driver}</td>
								<td className='card__results--points'>{data.results.p4.points} pts</td>
							</tr>
							<tr>
								<td>5.</td>
								<td>{data.results.p5.driver}</td>
								<td className='card__results--points'>{data.results.p5.points} pts</td>
							</tr>
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};
