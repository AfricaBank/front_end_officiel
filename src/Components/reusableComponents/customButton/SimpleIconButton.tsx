import { forwardRef } from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { LuVoicemail } from "react-icons/lu";

export const CustomButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => (
    <IconButton aria-label="Call support">
      <LuVoicemail />
    </IconButton>
  )
);
