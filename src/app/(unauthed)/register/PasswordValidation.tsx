import { PasswordValidation } from "@/lib/types";

export default function passwordValidation({
  validation,
}: {
  validation: PasswordValidation;
}) {
  return (
    <div>
      {validation.map((error) => {
        if (error === "lowercase") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Must have a lowercase letter
            </p>
          );
        }
        if (error === "uppercase") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Must have an uppercase letter
            </p>
          );
        }
        if (error === "digits") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Must have at least 1 digit
            </p>
          );
        }
        if (error === "min") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Minimum of 8 characters
            </p>
          );
        }
        if (error === "spaces") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Should not have spaces
            </p>
          );
        }
        if (error === "symbols") {
          return (
            <p key={error} className="text-orange-600 text-sm py-[3px] italic">
              Must have at least 1 symbol
            </p>
          );
        }
      })}
    </div>
  );
}
