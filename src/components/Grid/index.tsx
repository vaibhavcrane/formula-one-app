type GridProps = {
	children: React.ReactNode;
	className?: string;
};

export const MainGrid = ({ children, className }: GridProps) => {
	return <div className={`grid ${className}`}>{children}</div>;
};

export const SmallGrid = ({ children, className = "" }: GridProps) => {
	return <div className={`${className}`}>{children}</div>;
};
