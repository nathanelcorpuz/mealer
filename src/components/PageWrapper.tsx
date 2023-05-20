export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-4">{children}</main>;
}
