import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import {forwardRef} from "react";

export const CustomButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button />
));

export const CustomIconButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => <IconButton />,
);
