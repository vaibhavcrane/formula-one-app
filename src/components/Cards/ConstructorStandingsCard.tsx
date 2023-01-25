// ! Flags not added
//TODO; add API for flag

//api import
import { useConstructorsChampionshipStandings } from "../../api/ergast";

//component imports
import { Card, Loading } from "../../components";

export const ConstructorStandingsCard = () => {
	const { data: constructorsChampionshipStandings, isLoading, isError } = useConstructorsChampionshipStandings();

	if (isLoading) return <Loading />;
	if (isError) return <p>Error</p>;

	return (
		<Card span={{ large: 1, medium: 1 }}>
			<div className='card__content'>
				<p className='card__header'>constructor standings</p>
				<table className='card__results'>
					<tbody>
						{constructorsChampionshipStandings.slice(0, 6).map((constructor, index) => (
							<tr key={index}>
								<td>{index + 1}.</td>
								<td>{constructor.Constructor.name}</td>
								<td className='card__results--points'>{constructor.points} pts</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Card>
	);
};
