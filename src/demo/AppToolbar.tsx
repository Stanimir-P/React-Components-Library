import { style } from "typestyle";
import { Toolbar } from "../components/Toolbar/Toolbar";

const toolbarClass = style({
    backgroundColor: 'grey',
});

export const AppToolbar: React.FunctionComponent = () => {

    return (
        <Toolbar
            toolbarHeight='56px'
            leftContent={<div>left content</div>}
            centerContent={<div>center content</div>}
            rightContent={<div>right content</div>}
            className={toolbarClass}
        />
    );
}