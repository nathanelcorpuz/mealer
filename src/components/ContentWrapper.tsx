export default function ContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-[30px] max-w-[550px] mx-auto p-8 bg-gray-200 rounded-lg">
			{children}
		</section>
	);
}
