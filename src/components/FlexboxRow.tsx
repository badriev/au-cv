import type {ComponentProps, CSSProperties, FC, PropsWithChildren} from "react";

type Props = PropsWithChildren<ComponentProps<"div">> & {
  style?: CSSProperties;
};

const FlexboxRow: FC<Props> = ({ children, style, ...otherProps }) => (
  <div style={{ display: "flex", ...(style ?? {}) }} {...otherProps}>
    {children}
  </div>
);

export default FlexboxRow;
