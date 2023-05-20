import PageWrapper from "@/components/PageWrapper";
import Recipe from "./Recipe";

export default function RecipeDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageWrapper>
      <Recipe slug={params.slug} />
    </PageWrapper>
  );
}
