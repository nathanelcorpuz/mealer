export default function ModalButtonsWrapper({
	children,
	classOverrides,
}: {
	children: React.ReactNode;
	classOverrides?: string;
}) {
	return (
		<div className={`flex justify-between ${classOverrides}`}>{children}</div>
	);
}
