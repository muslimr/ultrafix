import React from 'react';
import {SvgIcon} from "@material-ui/core";
import {useWindowDimensions} from "../../hooks";


export const GoBackIcon = props => {
    const {breakpoint} = useWindowDimensions();

    return (
        <SvgIcon className={'service-icon'} style={{fontSize: breakpoint === "sm" ? 18 : 20, ...props.style}} viewBox="0 0 9 15">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72162 14.7442C8.35149 15.0862 7.75261 15.0851 7.38397 14.7417L0.275692 8.11935C-0.091897 7.77689 -0.0918969 7.22311 0.275692 6.88065L7.38397 0.258312C7.75261 -0.0851243 8.35149 -0.0862422 8.72162 0.255816C9.09174 0.597872 9.09295 1.15357 8.72431 1.49701L2.28082 7.5L8.72431 13.503C9.09295 13.8464 9.09174 14.4021 8.72162 14.7442Z" />
        </SvgIcon>
    );
}
