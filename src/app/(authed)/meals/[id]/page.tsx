import PageWrapper from "@/components/PageWrapper";
import Meal from "./Meal";

export default function MealPage({ params }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <Meal id={params.id} />
    </PageWrapper>
  );
}
