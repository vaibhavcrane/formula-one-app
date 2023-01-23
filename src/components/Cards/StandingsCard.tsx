import React from "react";
import { standingsCardData } from "../../types";
import { Card } from "./Card";

export const StandingsCard = (data: standingsCardData) => {
	return (
		<Card span={{ large: 1, medium: 1 }}>
			<div className='card__content'>
				<p className='card__header'>{data.header}</p>
				<table className='card__results'>
					<tbody>
						{data.standings.map((row, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}.</td>
									<td>{row.name}</td>
									<td className='card__results--points'>{row.points} pts</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Card>
	);
};
