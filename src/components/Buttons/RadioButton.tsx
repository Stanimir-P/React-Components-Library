import { style } from "typestyle";

interface RadioButtonProps {
    value: string;
    label?: string;
    groupName: string;
}

export const RadioButton = (props: RadioButtonProps) => {

    const { value, label, groupName } = props;

    const inputClass = style({
        height: 13,
        width: 13,
        appearance: 'none',
        border: '0.5px solid black',
        boxShadow: '0 0 0 0.5px black',
        borderRadius: '50%',
        '$nest': {
            '&:checked': {
                border: '1.5px solid white',
                boxShadow: '0 0 0 1px black',
                backgroundColor: 'black',
            }
        }
    });

    return (
        <>
            <input
                type="radio"
                id={value}
                value={value}
                name={groupName}
                className={inputClass}
            />

            <label htmlFor={value}>
                {label}
            </label>
        </>
    )
};
