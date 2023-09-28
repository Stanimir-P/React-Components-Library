import { classes, style } from "typestyle";

interface IconProps {
    icon: string,
    size: number,
    className?: string,
}

export const Icon: React.FunctionComponent<IconProps> = props => {

    const iconClass = classes(
        props.className,
        style({
            height: props.size,
            width: props.size,
        })
    );

    return (
        <svg className={iconClass} viewBox="0 0 24 24">
            <path style={{ fill: 'currentcolor' }} d={props.icon} />
        </svg>
    )
};