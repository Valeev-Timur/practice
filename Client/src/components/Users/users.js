import React, {Component} from 'react';
import ItemsCollection from "../ItemsCollection/Items-Collection";

import InputString from "../inputString/inputString";
import style from './appbar.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Columned from "react-columned";

const tst = [
    {
        img:"https://www.hse.ru/data/2019/07/15/1482556075/1caps%20%D0%A4%D0%9A%D0%9D_176_svfotograf.jpg",
        title:"user1"
    },
    {
        img:"https://odee.osu.edu/sites/default/files/styles/image_style_small/public/deadline-approaching.png?itok=enSSdDck",
        title:"user2"
    },
    {
        img:"https://hsaeuless.harmonytx.org/wp-content/uploads/sites/141/2018/12/deadline.jpg",
        title:"user3"
    },
    {
        img:"https://www.hse.ru/data/2019/07/15/1482556075/1caps%20%D0%A4%D0%9A%D0%9D_176_svfotograf.jpg",
        title:"user4"
    },
    {
        img:"https://odee.osu.edu/sites/default/files/styles/image_style_small/public/deadline-approaching.png?itok=enSSdDck",
        title:"user5"
    },
    {
        img:"https://hsaeuless.harmonytx.org/wp-content/uploads/sites/141/2018/12/deadline.jpg",
        title:"user6"
    },
    {
        img:"https://www.hse.ru/data/2019/07/15/1482556075/1caps%20%D0%A4%D0%9A%D0%9D_176_svfotograf.jpg",
        title:"user7"
    },
    {
        img:"https://odee.osu.edu/sites/default/files/styles/image_style_small/public/deadline-approaching.png?itok=enSSdDck",
        title:"user8"
    },
    {
        img:"https://hsaeuless.harmonytx.org/wp-content/uploads/sites/141/2018/12/deadline.jpg",
        title:"user9"
    },
    {
        img:"https://www.hse.ru/data/2019/07/15/1482556075/1caps%20%D0%A4%D0%9A%D0%9D_176_svfotograf.jpg",
        title:"user10"
    },
    {
        img:"https://odee.osu.edu/sites/default/files/styles/image_style_small/public/deadline-approaching.png?itok=enSSdDck",
        title:"user11"
    },
    {
        img:"https://hsaeuless.harmonytx.org/wp-content/uploads/sites/141/2018/12/deadline.jpg",
        title:"user12"
    },
];

class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputTagValue: null,
            items:null
        };
    }
    render() {
        return(
            <div>
            <AppBar className={style.appBar}>
                <Toolbar>
                    <InputString clickHandler={res => {
                        this.setState({items: res})

                    }}/>
                </Toolbar>
                
            </AppBar>

                <ItemsCollection
                           items={this.state.items}
                           cellHeight={25}
                           columnsCount={3}/>

                           </div>
                           
        );
    }
}
export default Users;