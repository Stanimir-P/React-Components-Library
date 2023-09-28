import { classes, style } from "typestyle";
import { FlexRow } from "../Utils/FlexRow";
import { SpacingProps, getSpacingClass } from "../Utils/SpacingUtil";

const baseToolbarClass = style({
    display: 'flex',
    justifyContent: 'space-between',
});

interface ToolbarProps extends SpacingProps {
    height: string,
    position?: 'static' | 'fixed' | 'sticky'
    leftContent?: React.ReactNode,
    centerContent?: React.ReactNode,
    rightContent?: React.ReactNode,
    className?: string,
}

export const Toolbar: React.FunctionComponent<ToolbarProps> = props => {

    const { height, position, leftContent, centerContent, rightContent, className } = props;

    const toolbarContainerClass = classes(
        getSpacingClass(props),
        baseToolbarClass,
        className,
        style({
            height: height,
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
