import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

//hooks import
import useLocalStorage from "../../hooks/useLocalStorage";

export const ThemeSwitcher = () => {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage("react-todo.theme", defaultDark ? "dark" : "light");

	useEffect(() => {
		document.documentElement.setAttribute("color-scheme", theme);
	}, [theme]);

	return (
		<button
			className='theme-switcher'
			role='switch'
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "dark" ? <SunIcon /> : <MoonIcon />}
		</button>
	);
};
