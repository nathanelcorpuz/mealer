"use client";

import { useMutation } from "@tanstack/react-query";
import { logoutMutator as mutationFn } from "@/lib/mutators";
import PageWrapper from "@/components/PageWrapper";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import { useRouter } from "next/navigation";

export default () => {
	const logoutMutation = useMutation({ mutationFn });
	const router = useRouter();

	const onYes = async () => {
		const result = await logoutMutation.mutateAsync();
		console.log(result);
		if (result.isSuccess) {
			router.push("/login");
		}
	};
	const onNo = () => router.back();

	return (
		<PageWrapper>
			<YesNoConfirmation
				heading="Are you sure you want to log out?"
				onYes={onYes}
				onNo={onNo}
				disabled={logoutMutation.isLoading}
			/>
		</PageWrapper>
	);
};
