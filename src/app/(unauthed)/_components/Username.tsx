import Input from "@/components/Input";
import { Dispatch, SetStateAction } from "react";

interface Username {
	disabled: boolean;
	username: string;
	setUsername: Dispatch<SetStateAction<string>>;
}

export default ({ disabled, username, setUsername }: Username) => (
	<Input
		labelText="Username"
		labelProps={{ htmlFor: "username" }}
		inputProps={{
			disabled,
			type: "text",
			id: "username",
			value: username,
			onChange: (e) => setUsername(e.target.value),
		}}
	/>
);
