import { Radio, RadioProps } from "@chakra-ui/react";

interface CustomRadioProps extends RadioProps {
  label?: string;
  helperText?: string;
}

export const RadioButtonField: React.FC<CustomRadioProps> = ({
  label,
  helperText,
  ...rest
}) => {
  return (
    <Radio {...rest}>
      {label}
      {helperText && <div>{helperText}</div>}
    </Radio>
  );
};
