import { useState } from "react";

export default function useDropdown<Selection>(initialSelection: Selection) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<Selection>(initialSelection);

  const controls = { isOpen, setIsOpen, selection, setSelection };
  return { controls };
}
