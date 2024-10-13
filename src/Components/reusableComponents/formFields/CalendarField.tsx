import { Input, InputProps } from "@chakra-ui/react";

interface CustomDateInputProps extends InputProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
}

export const CalendarField: React.FC<CustomDateInputProps> = ({
  label,
  helperText,
  placeholder = "JJ/MM/AAAA",
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor="custom-date">{label}</label>}
      <Input {...rest} id="custom-date" type="date" placeholder={placeholder} />
      {helperText && <div>{helperText}</div>}
    </>
  );
};
