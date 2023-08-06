import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export interface HuggingFaceIconProps extends BoxProps {
  size?: number;
}

export const HuggingFaceIcon = ({
  size = 30,
  ...props
}: HuggingFaceIconProps) => {
  return (
    <Box {...props}>
      <Image
        src="/huggingface.svg"
        alt="Hugging Face Icon"
        width={size}
        height={size}
      />
    </Box>
  );
};
