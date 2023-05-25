import { style } from "typestyle";

export const flexbox = {
    horizontal: style({
        display: 'flex',
        flexDirection: 'row'
    }),

    vertical: style({
        display: 'flex',
        flexDirection: 'column'
    }),

    startCenter: style({
        justifyContent: 'flex-start',
        alignItems: 'center'
    }),

    centerCenter: style({
        justifyContent: 'center',
        alignItems: 'center'
    }),
}