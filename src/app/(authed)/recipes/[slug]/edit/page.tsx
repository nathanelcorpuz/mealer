import PageWrapper from "@/components/PageWrapper";
import EditRecipe from "./EditRecipe";

export default function EditRecipePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageWrapper>
      <EditRecipe slug={params.slug} />
    </PageWrapper>
  );
}
