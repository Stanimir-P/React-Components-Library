import { classes } from "typestyle";
import { flexbox } from "./FlexboxUtil";

interface FlexRowProps {
    className?: string,
    children: React.ReactNode
}

export const FlexRow: React.FunctionComponent<FlexRowProps> = props => {

    const { className, children } = props;

    const flexrowClass = classes(
        flexbox.horizontal,
        flexbox.centerCenter,
        className
    )

    return (
        <div className={flexrowClass} children={children} />
    )
};