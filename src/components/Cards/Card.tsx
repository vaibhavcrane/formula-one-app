type CardComponentProps = {
	span?: { large: number; medium: number };
	children: React.ReactNode;
	className?: string;
	LinkTo?: string | null;
};

export const Card = ({ span, children, className = "", LinkTo = null }: CardComponentProps) => {
	if (span) {
		className = className + " grid-span-large-" + span.large + " grid-span-medium-" + span.medium;
	}
	if (LinkTo) {
		return (
			<a
				href={LinkTo}
				className={`card ${className}`}>
				{children}
			</a>
		);
	}
	return <div className={`card ${className}`}>{children}</div>;
};
