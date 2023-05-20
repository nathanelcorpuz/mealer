import { HeadingVariants } from "@/lib/types";

export default function Heading({
  children,
  variant = "h1",
  classOverrides,
}: {
  children: React.ReactNode;
  variant?: HeadingVariants;
  classOverrides?: string;
}) {
  if (variant === "h2") {
    return (
      <h2
        className={`uppercase text-3xl font-black text-emerald-700 ${classOverrides}`}
      >
        {children}
      </h2>
    );
  }
  if (variant === "h3") {
    return (
      <h3
        className={`uppercase text-2xl font-black text-emerald-700 ${classOverrides}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "h4") {
    return (
      <h4
        className={`uppercase text-xl font-black text-emerald-700 ${classOverrides}`}
      >
        {children}
      </h4>
    );
  }
  if (variant === "h5") {
    return (
      <h5
        className={`uppercase text-lg font-black text-emerald-700 ${classOverrides}`}
      >
        {children}
      </h5>
    );
  }
  if (variant === "h6") {
    return (
      <h6 className={`uppercase font-black text-emerald-700 ${classOverrides}`}>
        {children}
      </h6>
    );
  }

  return (
    <h1
      className={`uppercase text-4xl font-black text-emerald-700 ${classOverrides}`}
    >
      {children}
    </h1>
  );
}
