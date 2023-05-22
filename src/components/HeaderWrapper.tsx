export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex border-b-[1px] bg-gray-200 justify-between">
      {children}
    </header>
  );
}
