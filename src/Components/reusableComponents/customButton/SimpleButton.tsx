import { forwardRef } from "react";
import { Button, ButtonProps } from "../../ui/button";

export const CustomButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button>simple button </Button>
));
