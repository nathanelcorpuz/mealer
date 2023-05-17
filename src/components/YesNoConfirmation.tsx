import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function YesNoConfirmation({
	onNo,
	onYes,
	heading,
	disabled,
}: {
	onNo: () => void;
	onYes: () => void;
	heading: string;
	disabled?: boolean;
}) {
	return (
		<div className="p-4 bg-gray-300 rounded-md flex flex-col gap-[10px]">
			<Heading variant="h4">{heading}</Heading>
			<div className="flex gap-[30px]">
				<Button
					props={{ onClick: onNo, type: "button", disabled }}
					variant="secondary"
				>
					No
				</Button>
				<Button
					variant="danger"
					props={{ onClick: onYes, type: "button", disabled }}
				>
					Yes
				</Button>
			</div>
		</div>
	);
}
