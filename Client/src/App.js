import React from 'react';
import './App.css';
import ItemsCollection from "./components/ItemsCollection/Items-Collection";
import {Appbar} from "./components/appbar/appbar";
import {Route, Switch} from 'react-router-dom';
import InputString from './components/inputString/inputString';
import Layout from './components/Layout/Layout';
import Users from './components/Users/users';
import Admin from './components/admin/admin';

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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTagValue: null,
            items:tst
        };
    }

  render(){
    return(
        <Layout>
         <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/" component={Users}/>
         </Switch>
        </Layout>
    );
  }
}

export default App;
