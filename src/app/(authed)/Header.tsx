import CustomLink from "@/components/CustomLink";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Header() {
	return (
		<HeaderWrapper>
			<CustomLink href="/">Home</CustomLink>
			<CustomLink href="recipes">Recipes</CustomLink>
			<CustomLink href="meals">Meals</CustomLink>
			{/* <CustomLink href="logout">Logout</CustomLink> */}
		</HeaderWrapper>
	);
}
