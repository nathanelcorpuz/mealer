import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export default function IconButton({
	src,
	alt,
	props,
}: {
	src: StaticImageData;
	alt: string;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
	return (
		<button
			className="hover:bg-emerald-200 rounded-sm p-[2px] flex items-center gap-[2px]"
			{...props}
		>
			<Image src={src} width={25} height={25} alt={alt} />
		</button>
	);
}
