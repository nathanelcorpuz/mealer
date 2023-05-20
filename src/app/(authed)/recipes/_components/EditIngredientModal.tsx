import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import ModalButtonsWrapper from "@/components/ModalButtonsWrapper";
import ModalWrapper from "@/components/ModalWrapper";
import { Dispatch, SetStateAction, useState } from "react";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import { FormIngredient, RecipeReducerAction } from "@/lib/types";

export default function EditIngredientModal({
  targetIngredient,
  dispatch,
  setOpen,
}: {
  targetIngredient: FormIngredient;
  dispatch: Dispatch<RecipeReducerAction>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [ingredientValue, setIngredientValue] = useState<string>(
    targetIngredient.ingredient
  );
  const [quantity, setQuantity] = useState<string>(targetIngredient.quantity);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState<boolean>(false);

  const onEditSubmit = () => {
    dispatch({
      type: "edited_ingredient",
      targetIngredient,
      newIngredient: { ingredient: ingredientValue, quantity },
    });
    setOpen(false);
  };

  const onDeleteClick = () => setIsDeleteConfirmationOpen(true);

  const onDeleteConfirmationNo = () => setIsDeleteConfirmationOpen(false);

  const onDeleteConfirmationYes = () => {
    dispatch({
      type: "deleted_ingredient",
      targetIngredient,
    });
    setIsDeleteConfirmationOpen(false);
    setOpen(false);
  };

  return (
    <ModalWrapper>
      <Heading variant="h2">Edit Ingredient</Heading>
      <Input
        labelText="Ingredient"
        labelProps={{ htmlFor: "ingredient" }}
        inputProps={{
          type: "text",
          id: "ingredient",
          value: ingredientValue,
          onChange: (e) => setIngredientValue(e.target.value),
        }}
      />
      <Input
        labelText="Quantity"
        labelProps={{ htmlFor: "quantity" }}
        inputProps={{
          type: "text",
          id: "quantity",
          value: quantity,
          onChange: (e) => setQuantity(e.target.value),
        }}
      />
      <ModalButtonsWrapper>
        <Button
          variant="secondary"
          props={{
            onClick: () => setOpen(false),
            type: "button",
          }}
        >
          Cancel
        </Button>
        <Button
          classOverrides="py-2 text-sm"
          props={{ onClick: onEditSubmit, type: "button" }}
        >
          Submit
        </Button>
      </ModalButtonsWrapper>
      {isDeleteConfirmationOpen ? (
        <YesNoConfirmation
          heading="Delete this ingredient?"
          onNo={onDeleteConfirmationNo}
          onYes={onDeleteConfirmationYes}
        />
      ) : (
        <Button
          variant="secondary"
          props={{ type: "button", onClick: onDeleteClick }}
        >
          Delete ingredient
        </Button>
      )}
    </ModalWrapper>
  );
}
