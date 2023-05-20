import PageWrapper from "@/components/PageWrapper";
import DeleteMeal from "./DeleteMeal";

export default function DeleteMealPage({ params }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <DeleteMeal id={params.id} />
    </PageWrapper>
  );
}
