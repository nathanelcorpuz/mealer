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
      className={`hover:bg-emerald-100 rounded-lg p-[15px] flex items-center gap-[2px] ${classOverrides}`}
      {...props}
    >
      <Image src={src} width={15} height={15} alt={alt} />
    </button>
  );
}
