import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import style from './appbar.module.css'
import InputString from "../inputString/inputString";

 export function Appbar(){

        return (
            <AppBar className={style.appBar}>
                <Toolbar>
                    <InputString
                        clickHandler={res => {
                            this.props.clickHandler(res);
                        }}
                    />
                </Toolbar>               
            </AppBar>
        );  
}

export default AppBar;
