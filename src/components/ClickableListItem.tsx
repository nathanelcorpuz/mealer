export default function ClickableListItem({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<li>
			<button className="w-[100%] hover:bg-emerald-700 hover:text-white border-b-[1px] border-b-gray-200 py-4 ps-2 text-start text-emerald-700">
				{children}
			</button>
		</li>
	);
}
