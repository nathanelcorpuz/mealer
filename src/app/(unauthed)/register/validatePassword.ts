import { PasswordValidation } from "@/lib/types";
import PasswordValidator from "password-validator";

export default function validatePassword(password: string): PasswordValidation {
	const schema = new PasswordValidator();
	schema
		.is()
		.min(8) // Minimum length 8
		.is()
		.max(100) // Maximum length 100
		.has()
		.uppercase() // Must have uppercase letters
		.has()
		.lowercase() // Must have lowercase letters
		.has()
		.digits(1) // Must have at least 2 digits
		.has()
		.not()
		.spaces() // Should not have spaces
		.has()
		.symbols(1);

	return schema.validate(password, { list: true }) as PasswordValidation;
}
