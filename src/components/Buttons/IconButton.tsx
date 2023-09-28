import { Icon } from "../Icon/Icon";


interface IconButtonProps {
    icon: string,
    tooltip?: string,
    className?: string,
    onClick?: () => void;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = props => {

    const { icon, tooltip, className, onClick } = props;

    return (
        <div title={tooltip} className={className} onClick={onClick}>
            <Icon icon={icon} size={30} />
        </div>
    )
};