import React from "react";
import "../../styles/main.scss";
import { championshipCardData } from "../../types";

export const ChampionshipCard = (data: championshipCardData) => {
	const flagURL = "https://flagcdn.com/w320/nl.png";
	return (
		<>
			<div
				className='background-flag'
				style={{ backgroundImage: "url(" + flagURL + ")" }}></div>
			<div className='card--champion'>
				<div className='card__content'>
					<p className='card__header'>{data.header}</p>
					<h3 className='card__name card__name--champion'>{data.name}</h3>
					{data.points && <p className='card__subtext card__subtext--points'>{data.points} pts</p>}
					{data.wins && <p className='card__subtext card__subtext--points'>{data.wins} wins</p>}
					{data.poles && <p className='card__subtext card__subtext--points'>{data.poles} poles</p>}
					<p className='card__team'>
						{typeof data.team === "string"
							? data.team
							: data.team.map((teamMember, index) => {
									return <span key={index}>{teamMember}</span>;
							  })}
					</p>
				</div>
				<img
					className='card__image--champion card__image'
					src={data.image}
					alt={data.name}
				/>
			</div>
		</>
	);
};
