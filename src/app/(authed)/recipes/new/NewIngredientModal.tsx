import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Dispatch, SetStateAction } from "react";

export default function NewIngredientModal({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div
			className="absolute top-0 right-0 bottom-0 left-0 
		[background:rgb(0,0,0,0.5)] flex items-center justify-center p-4"
		>
			<div
				className="w-[400px] bg-white 
      text-gray-950 z-[99] rounded-md p-4 flex flex-col gap-[20px]"
			>
				<Heading variant="h2">New Ingredient</Heading>
				<Input
					labelText="Ingredient"
					labelProps={{ htmlFor: "ingredient" }}
					inputProps={{
						type: "text",
						id: "ingredient",
						value: "Chicken Thighs",
					}}
				/>
				<Input
					labelText="Quantity"
					labelProps={{ htmlFor: "quantity" }}
					inputProps={{ type: "text", id: "quantity", value: "5 lbs" }}
				/>

				<div className="flex justify-between items-center">
					<button
						className="text-sm hover:text-emerald-700 p-2 
						hover:bg-gray-200 rounded-md"
						onClick={() => setOpen(false)}
					>
						Cancel
					</button>
					<Button classOverrides="py-2 text-sm">Submit</Button>
				</div>
			</div>
		</div>
	);
}
