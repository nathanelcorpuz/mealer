import { useRouter } from "next/navigation";
import Button from "./Button";

export default ({ isHoverWhite }: { isHoverWhite?: boolean }) => {
	const router = useRouter();
	return (
		<Button
			props={{ onClick: () => router.back() }}
			variant="secondary"
			classOverrides={isHoverWhite ? "self-start hover:bg-white text-gray-500 text-xs" : "self-start text-gray-500 text-xs"}
		>
			Back
		</Button>
	);
};
