import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import style from './photoAdmin.module.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 1200,
        height: 1200,
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

const photoAdmin =({items, cellHeight, columnsCount}) => {
    //const classes = useStyles();

    let renderCollection = function () {
        if(items !== null){
            return(
                <div className={style.picturesCollection}>
                    <div >
                        <GridList cellHeight={cellHeight} spacing={1} >
                            {items.map(item => (
                                <GridListTile key={item.img} cols={1} rows={columnsCount}>
                                    <img src={item.img} />
                                    <GridListTileBar
                                        titlePosition="top"
                                       
                                        actionPosition="left"
                                        
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>

                </div>
            );
        }
        return null;
    };

    return (
        <React.Fragment>
            {renderCollection()}
        </React.Fragment>
    )
}

export default photoAdmin;