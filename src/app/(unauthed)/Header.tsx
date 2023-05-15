import CustomLink from "@/components/CustomLink";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Header() {
	return (
		<HeaderWrapper>
			<CustomLink href="register">Register</CustomLink>
			<CustomLink href="login">Login</CustomLink>
			<CustomLink href="how">How to use</CustomLink>
		</HeaderWrapper>
	);
}
