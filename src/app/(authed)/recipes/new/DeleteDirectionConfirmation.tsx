import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function DeleteDirectionConfirmation({
	onNo,
	onYes,
}: {
	onNo: () => void;
	onYes: () => void;
}) {
	return (
		<div className="p-4 bg-gray-300 rounded-md flex flex-col gap-[10px]">
			<Heading variant="h4">Delete direction?</Heading>
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
