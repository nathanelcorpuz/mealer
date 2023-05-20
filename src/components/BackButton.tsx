import { useRouter } from "next/navigation";
import Button from "./Button";

export default function BackButton({
  isHoverWhite,
  classOverrides,
}: {
  isHoverWhite?: boolean;
  classOverrides?: string;
}) {
  const router = useRouter();
  return (
    <Button
      props={{ onClick: () => router.back(), type: "button" }}
      variant="secondary"
      classOverrides={`${
        isHoverWhite
          ? "self-start hover:bg-white text-gray-500 text-xs"
          : "self-start text-gray-500 text-xs"
      } ${classOverrides}`}
    >
      Back
    </Button>
  );
}
