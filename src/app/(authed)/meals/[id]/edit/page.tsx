import PageWrapper from "@/components/PageWrapper";
import EditMeal from "./EditMeal";

export default function EditMealPage({ params }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <EditMeal id={params.id} />
    </PageWrapper>
  );
}
