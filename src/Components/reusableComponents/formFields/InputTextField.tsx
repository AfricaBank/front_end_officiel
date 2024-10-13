import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  label?: string;
  error?: string;
}

export const InputTextField: React.FC<CustomInputProps> = ({
  label,
  error,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor="custom-input">{label}</label>}
      <Input {...rest} id="custom-input" />
      {error && <div role="alert">{error}</div>}
    </>
  );
};
