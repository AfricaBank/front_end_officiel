import { forwardRef, Button, ButtonProps, IconButton, IconButtonProps } from "@chakra-ui/react";

export const CustomButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button ref={ref} {...props} />
));

export const CustomIconButton = forwardRef<IconButtonProps, "button">((props, ref) => (
  <IconButton ref={ref} {...props} />
));