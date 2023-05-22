export default function HeaderWrapper({
  children,
  classOverrides,
}: {
  children: React.ReactNode;
  classOverrides?: string;
}) {
  return (
    <header className={`flex border-b-[1px] bg-gray-200 ${classOverrides}`}>
      {children}
    </header>
  );
}
