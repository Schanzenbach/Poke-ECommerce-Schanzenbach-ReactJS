import { useContext } from "react";
import { FilterInput } from "./FilterInput";
import { FilterInputContext } from "../../../context/FilterInputContext";

export const FilterInputContainer = () => {
  const { captureProducts } = useContext(FilterInputContext);

  return (
    <>
      <FilterInput captureProducts={captureProducts} />
    </>
  );
};
