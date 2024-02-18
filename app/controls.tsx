import Select from "react-select";

interface ControlsProps {
  setSortField: (field: string) => void;
  setSortDirection: (direction: string) => void;
}

const Controls = ({ setSortField, setSortDirection }: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  function handleSortField(field: any) {
    setSortField(field.value);
  }

  function handleDirectionSort(direction: any) {
    setSortDirection(direction.value);
  }

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleSortField}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleDirectionSort}
        />
      </div>
    </div>
  );
};

export default Controls;
