import "./FilterInput.css";
export const FilterInput = ({ captureProducts }) => {
  return (
    <div className="filter-box">
      <input
        className="filter-input"
        type="text"
        placeholder="Ej.:Lapras"
        onChange={captureProducts}
      />
    </div>
  );
};
