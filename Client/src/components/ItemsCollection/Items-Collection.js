import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

import style from './Items-Collection.module.css'

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

const ItemsCollection =({items, cellHeight, columnsCount}) => {
    const classes = useStyles();

    let renderCollection = function () {
        if(items !== null){
            return(
                <div className={style.picturesCollection}>
                    <div className={classes.root}>

                        <Gallery withModal>
                            {items.map(item => (
                                <Image
                                    src={item}
                                    alt="Image 1"
                                    size={2}
                                    theme={{ padding: '5px' }}
                                >
                                </Image>
                            ))}

                        </Gallery>





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

export default ItemsCollection;