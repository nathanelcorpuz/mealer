import Input from "@/components/Input";
import Image from "next/image";
import shownIcon from "../../../../public/shown-icon.png";
import hiddenIcon from "../../../../public/hidden-icon.png";
import { Dispatch, SetStateAction } from "react";
import slugify from "slugify";

interface PasswordInterface {
	disabled: boolean;
	password: string;
	setPassword: Dispatch<SetStateAction<string>>;
	showPassword: boolean;
	setShowPassword: Dispatch<SetStateAction<boolean>>;
	label?: string;
}

export default function Password({
	disabled,
	password,
	setPassword,
	showPassword,
	setShowPassword,
	label = "Password",
}: PasswordInterface) {
	return (
		<div className="relative">
			<Input
				labelText={label}
				labelProps={{ htmlFor: slugify(label) }}
				inputProps={{
					disabled,
					type: showPassword ? "text" : "password",
					id: slugify(label),
					value: password,
					onChange: (e) => setPassword(e.target.value),
				}}
				inputClassOverrides="pe-[55px]"
			/>
			{showPassword ? (
				<div className="absolute right-[3px] top-[23px]">
					<Image
						src={shownIcon}
						width={40}
						height={40}
						alt="hide password icon"
						className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
						onClick={() => setShowPassword((prev) => !prev)}
					/>
				</div>
			) : (
				<div className="absolute right-[3px] top-[22px]">
					<Image
						src={hiddenIcon}
						width={40}
						height={40}
						alt="hide password icon"
						className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
						onClick={() => setShowPassword((prev) => !prev)}
					/>
				</div>
			)}
		</div>
	);
}
