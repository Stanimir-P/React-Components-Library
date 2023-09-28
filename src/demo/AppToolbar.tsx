import { mdiMenu } from '@mdi/js';
import { style } from "typestyle";
import { IconButton } from '../components/Buttons/IconButton';
import { Toolbar } from "../components/Toolbar/Toolbar";
import { palette } from "./theme/Colors";

const toolbarClass = style({
    backgroundColor: palette.secondary,
    color: palette.text,
});

export const AppToolbar = () => {

    return (
        <Toolbar
            height='72px'
            ph={30}
            leftContent={leftContent()}
            centerContent={centerContent()}
            rightContent={rightContent()}
            className={toolbarClass}
        />
    );
}

const leftContent = () => {
    return (
        <IconButton
            icon={mdiMenu}
            tooltip='Menu'
        />
    )
}

const titleClass = style({
    fontFamily: 'Trebuchet MS, sans-serif',
});

const centerContent = () => {
    return <h1 className={titleClass}>Flow UI</h1>

}

const rightContent = () => {
    return null
}
