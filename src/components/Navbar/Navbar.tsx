import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__inner'>
				<div className='navbar__logo'>
					<a href='/'>f1 app</a>
				</div>
				<div className='navbar__menu'>
					<ul className='navbar__menu-list'>
						<li className='navbar__menu-list-item'>
							<a href='/'>Current Season</a>
						</li>
						<li className='navbar__menu-list-item'>
							<a href='/archives'>Archives</a>
						</li>
						<li className='navbar__menu-list-item'>
							<a href='/about'>About</a>
						</li>
					</ul>
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	);
};
