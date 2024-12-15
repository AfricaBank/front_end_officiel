
import {CheckboxProps} from "../../ui/checkbox.tsx";
import { Checkbox } from "@/components/ui/checkbox";


interface CustomCheckboxProps extends CheckboxProps {
  label: string;
  helperText: string;
}

export const CheckBoxField: React.FC<CustomCheckboxProps> = ({
  label,
  helperText,
  ...rest
}) => {
  return (
    <>
      <Checkbox {...rest}>{label}</Checkbox>
      {helperText && <div>{helperText}</div>}
    </>
  );
};
