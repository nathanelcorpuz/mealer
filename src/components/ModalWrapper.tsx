export default function ModalWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className="fixed top-0 right-0 bottom-0 left-0 
		[background:rgb(0,0,0,0.5)] flex items-center justify-center p-4"
		>
			<div
				className="w-[400px] bg-white 
      text-gray-950 z-[99] rounded-md p-4 flex flex-col gap-[20px]"
			>
				{children}
			</div>
		</div>
	);
}
