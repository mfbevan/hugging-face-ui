import {
  IconButton,
  IconButtonProps,
  LightMode,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";

export interface LinkedIconProps {
  /**
   * Adds an external link to the button
   */
  href?: string;
  /**
   * The label to display as the tooltip
   */
  label?: string;
}

export interface BaseIconButtonProps extends IconButtonProps, LinkedIconProps {}

export const BaseIconButton = ({
  href,
  label,
  ...props
}: BaseIconButtonProps) => {
  const icon = (
    <LightMode>
      <Tooltip label={label}>
        <IconButton rounded="2xl" boxSize="40px" boxShadow="base" {...props} />
      </Tooltip>
    </LightMode>
  );

  if (href)
    return (
      <Link href={href ?? "#"} target="_blank">
        {icon}
      </Link>
    );

  return icon;
};
