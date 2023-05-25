import { classes, style } from "typestyle";
import { FlexRow } from "../Utils/FlexRow";

const baseToolbarClass = style({
    display: 'flex',
    justifyContent: 'space-between',
});

interface ToolbarProps {
    toolbarHeight: string,
    position?: 'static' | 'fixed' | 'sticky'
    leftContent?: React.ReactNode,
    centerContent?: React.ReactNode,
    rightContent?: React.ReactNode,
    className?: string,
}

export const Toolbar: React.FunctionComponent<ToolbarProps> = props => {

    const { toolbarHeight, position, leftContent, centerContent, rightContent, className } = props;

    const toolbarContainerClass = classes(
        baseToolbarClass,
        className,
        style({
            height: toolbarHeight,
            position: position ? position : 'static',
        }),
    );

    return (
        <FlexRow className={toolbarContainerClass}>
            <FlexRow>
                {leftContent}
            </FlexRow>

            <FlexRow>
                {centerContent}
            </FlexRow>

            <FlexRow>
                {rightContent}
            </FlexRow>
        </FlexRow>
    )
};