import { style } from "typestyle";
import { SpacingComponentProps } from "./Spacing";

export interface SpacingProps {
    m?: number,
    mh?: number,
    mv?: number,
    mt?: number,
    mr?: number,
    mb?: number,
    ml?: number,

    p?: number,
    ph?: number,
    pv?: number,
    pt?: number,
    pr?: number,
    pb?: number,
    pl?: number,
}

const getMargins = (props: SpacingComponentProps) => {

    const margin = props.m;

    const marginTop = props.mt
        ? props.mt
        : margin ? margin : props.mv;

    const marginRight = props.mr
        ? props.mr
        : margin ? margin : props.mh;

    const marginBottom = props.mb
        ? props.mb
        : margin ? margin : props.mv;

    const marginLeft = props.ml
        ? props.ml
        : margin ? margin : props.mh;

    return { marginTop, marginRight, marginBottom, marginLeft };
}

const getPaddings = (props: SpacingComponentProps) => {

    const padding = props.p;

    const paddingTop = props.pt
        ? props.pt
        : padding ? padding : props.pv;

    const paddingRight = props.pr
        ? props.pr
        : padding ? padding : props.ph;

    const paddingBottom = props.pb
        ? props.pb
        : padding ? padding : props.pv;

    const paddingLeft = props.pl
        ? props.pl
        : padding ? padding : props.ph;

    return { paddingTop, paddingRight, paddingBottom, paddingLeft };
}

export const getSpacingClass = (props: SpacingComponentProps) => {

    const spacingProps = {
        ...getMargins(props),
        ...getPaddings(props),
    };

    return style(spacingProps);
}