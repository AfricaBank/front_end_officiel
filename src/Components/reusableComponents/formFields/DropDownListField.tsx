import { Select, SelectProps } from "@chakra-ui/react";

interface CustomDropDownList extends SelectProps {
  label?: string;
  options: { value: string; label: string }[];
}

export const DropDownListField: React.FC<CustomDropDownList> = ({
  label,
  options,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor="custom-select">{label}</label>}
      <Select {...rest} id="custom-select" options={options} />
    </>
  );
};
