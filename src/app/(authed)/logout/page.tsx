"use client";

import { useMutation } from "@tanstack/react-query";
import { logoutMutator as mutationFn } from "@/lib/mutators";
import PageWrapper from "@/components/PageWrapper";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import { useRouter } from "next/navigation";

export default function logout() {
	const logoutMutation = useMutation({ mutationFn });
	const router = useRouter();

	const onYes = async () => {
		const result = await logoutMutation.mutateAsync();
		if (result.isSuccess) {
			router.push("/login");
		}
	};
	const onNo = () => router.back();

	return (
		<PageWrapper>
			<div className="max-w-[550px] mx-auto">
				<YesNoConfirmation
					heading="Are you sure you want to log out?"
					onYes={onYes}
					onNo={onNo}
					disabled={logoutMutation.isLoading}
				/>
			</div>
		</PageWrapper>
	);
}
