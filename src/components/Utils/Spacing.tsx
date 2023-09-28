import { classes } from "typestyle";
import { SpacingProps, getSpacingClass } from "./SpacingUtil";

export interface SpacingComponentProps extends SpacingProps {
    className?: string,
    children?: any,
}

export const Spacing: React.FunctionComponent<SpacingComponentProps> = props => {

    const className = classes(
        props.className,
        getSpacingClass(props),
    );

    return (
        <div className={className} children={props.children} />
    )
};