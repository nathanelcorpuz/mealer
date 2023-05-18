export default function MealViewItemContainer({
	children,
	classOverrides,
}: {
	children: React.ReactNode;
	classOverrides?: string;
}) {
	return (
		<div
			className={`rounded-lg p-4 border border-gray-300 bg-white ${classOverrides}`}
		>
			{children}
		</div>
	);
}
