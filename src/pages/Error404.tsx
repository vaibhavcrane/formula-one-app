import meme from "../assets/404/meme.jpeg";

export const Error404 = () => {
	return (
		<div className='container'>
			<div className='error-404'>
				<p>We could not find the page, but who's fault is it really?</p>
				<img
					src={meme}
					alt='404 meme'
				/>
			</div>
		</div>
	);
};
