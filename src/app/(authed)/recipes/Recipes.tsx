"use client";

import addNewIcon from "../../../../public/add-new-icon.png";
import { Recipe } from "@/lib/types";
import Link from "next/link";
import useUserQuery from "@/hooks/queries/useUserQuery";
import Heading from "@/components/Heading";
import IconButton from "@/components/IconButton";
import ClickableListItem from "@/components/ClickableListItem";
import { useRouter } from "next/navigation";
import ContentWrapper from "../../../components/ContentWrapper";

export default function Recipes() {
	const userQuery = useUserQuery();
	const router = useRouter();

	return (
		<ContentWrapper>
			<div className="flex gap-[20px] items-center">
				<Heading>Recipes</Heading>
				<IconButton
					src={addNewIcon}
					alt="add new icon"
					props={{ onClick: () => router.push("/recipes/new") }}
				/>
			</div>
			<div className="flex flex-col gap-[20px]">
				{userQuery.isLoading && <p>Loading your recipes...</p>}
				<ul className="flex flex-col list-none">
					{userQuery.isSuccess &&
						userQuery.data.recipes.map((recipe: Recipe) => (
							<ClickableListItem key={recipe._id}>
								<Link
									href={`/recipes/${recipe.slug}`}
									className="w-[100%] h-[100%] block"
								>
									{recipe.name}
								</Link>
							</ClickableListItem>
						))}
				</ul>
			</div>
		</ContentWrapper>
	);
}
