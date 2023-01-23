import { SmallGridProps } from "../../types";

export const MainGrid = ({ style, className, children }: any) => {
	return <div className={`grid ${className}`}>{children}</div>;
};

export const SmallGrid = ({ children, className = "" }: SmallGridProps) => {
	return <div className={`${className}`}>{children}</div>;
};
