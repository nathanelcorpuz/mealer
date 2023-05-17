export default function ContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="flex flex-col gap-[30px]">{children}</section>;
}
