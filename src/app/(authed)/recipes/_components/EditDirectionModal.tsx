import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import ModalButtonsWrapper from "@/components/ModalButtonsWrapper";
import ModalWrapper from "@/components/ModalWrapper";
import { Dispatch, SetStateAction, useState } from "react";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import { RecipeReducerAction } from "@/lib/types";

export default function EditDirectionModal({
	targetDirection,
	dispatch,
	setOpen,
}: {
	targetDirection: string;
	dispatch: Dispatch<RecipeReducerAction>;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const [newDirection, setNewDirection] = useState<string>(targetDirection);
	const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
		useState<boolean>(false);

	const onEditSubmit = () => {
		dispatch({ type: "edited_direction", targetDirection, newDirection });
		setOpen(false);
	};

	const onDeleteClick = () => setIsDeleteConfirmationOpen(true);

	const onDeleteConfirmationNo = () => setIsDeleteConfirmationOpen(false);

	const onDeleteConfirmationYes = () => {
		dispatch({ type: "deleted_direction", targetDirection });
		setIsDeleteConfirmationOpen(false);
		setOpen(false);
	};

	return (
		<ModalWrapper>
			<Heading variant="h2">Edit Direction</Heading>
			<Input
				labelText="Direction"
				labelProps={{ htmlFor: "direction" }}
				inputProps={{
					type: "text",
					id: "direction",
					value: newDirection,
					onChange: (e) => setNewDirection(e.target.value),
				}}
			/>
			<ModalButtonsWrapper>
				<Button
					variant="secondary"
					props={{
						onClick: () => setOpen(false),
						type: "button",
					}}
				>
					Cancel
				</Button>
				<Button
					classOverrides="py-2 text-sm"
					props={{ onClick: onEditSubmit, type: "button" }}
				>
					Submit
				</Button>
			</ModalButtonsWrapper>
			{isDeleteConfirmationOpen ? (
				<YesNoConfirmation
					heading="Delete this direction?"
					onNo={onDeleteConfirmationNo}
					onYes={onDeleteConfirmationYes}
				/>
			) : (
				<Button
					variant="secondary"
					props={{ type: "button", onClick: onDeleteClick }}
				>
					Delete direction
				</Button>
			)}
		</ModalWrapper>
	);
}
