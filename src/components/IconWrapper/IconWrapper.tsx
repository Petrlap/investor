import { IconType } from "react-icons";

interface IconWrapperProps {
  Icon: IconType;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconWrapper = ({
  Icon,
  size = 20,
  className,
  style,
}: IconWrapperProps) => {
  return <>{Icon({ size, className, style })}</>;
};
