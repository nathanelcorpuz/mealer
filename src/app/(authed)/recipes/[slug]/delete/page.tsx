import PageWrapper from "@/components/PageWrapper";
import DeleteRecipe from "./DeleteRecipe";

export default function DeleteRecipePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageWrapper>
      <DeleteRecipe slug={params.slug} />
    </PageWrapper>
  );
}
