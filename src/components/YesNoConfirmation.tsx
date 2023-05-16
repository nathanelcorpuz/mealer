import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function YesNoConfirmation({
	onNo,
	onYes,
	heading,
}: {
	onNo: () => void;
	onYes: () => void;
	heading: string;
}) {
	return (
		<div className="p-4 bg-gray-300 rounded-md flex flex-col gap-[10px]">
			<Heading variant="h4">{heading}</Heading>
			<div className="flex gap-[30px]">
				<Button props={{ onClick: onNo, type: "button" }} variant="secondary">
					No
				</Button>
				<Button variant="danger" props={{ onClick: onYes, type: "button" }}>
					Yes
				</Button>
			</div>
		</div>
	);
}
