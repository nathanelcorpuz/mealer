import CustomLink from "@/components/CustomLink";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Header() {
	return (
		<HeaderWrapper>
			<CustomLink href="/">Home</CustomLink>
			<CustomLink href="recipe">Recipe</CustomLink>
			<CustomLink href="meal">Meal</CustomLink>
			<CustomLink href="logout">Logout</CustomLink>
		</HeaderWrapper>
	);
}
