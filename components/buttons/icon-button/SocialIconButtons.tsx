import { LinkedIconProps, BaseIconButton } from ".";
import { BsGithub } from "react-icons/bs";

export const GitHubIconButton = ({ href }: LinkedIconProps) => (
  <BaseIconButton
    colorScheme="gray"
    href={href}
    icon={<BsGithub />}
    aria-label="github"
    label={href}
  />
);
