import { style } from "typestyle";
import { RadioButton } from "../components/Buttons/RadioButton";
import { palette } from "./theme/Colors";


const contentClass = style({
    height: '2000px',
    background: palette.main,
    color: palette.text,
});

export const AppContent = () => {

    return (
        <div className={contentClass}>
            App Content

            <RadioButton value="hitler" label="Hitler" groupName="test" />
            <RadioButton value="stalin" label="Stalin" groupName="test" />
        </div>
    );
}