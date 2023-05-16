import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export default function IconButton({
	src,
	alt,
	props,
	classOverrides,
}: {
	src: StaticImageData;
	alt: string;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
	classOverrides?: string;
}) {
	return (
		<button
			className={`hover:bg-emerald-200 rounded-lg p-[10px] flex items-center gap-[2px] ${classOverrides}`}
			{...props}
		>
			<Image src={src} width={25} height={25} alt={alt} />
		</button>
	);
}
