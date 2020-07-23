import React, {Component} from 'react';
import ButtonHashtag from "../Button_hashtag/button_hashtag";
import ApiRequestAdapter from "../../request-adapters/api-request-adapter";
import PhotoAdmin from "../photoAdmin/photoAdmin";
import ButtonPhotoCategory from "../button_photo_category/button_photo_category";
import { Accordion, AccordionItem } from 'react-sanfona';
import {Gallery, Image} from "react-stylish-gallery";


const adapter = new ApiRequestAdapter();
const url = 'http://localhost:3001/admin';
const url1 = 'http://localhost:3001/admin/warnposts';
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
];




class Admin extends Component{


    constructor(props) {
        super(props);
        this.state = {
            inputTagValue: null,
            items:null
        };
    };

    componentDidMount() {

        this.hashtagList();


    }

    handleButtonClick = (e) => {

    };

    hashtagList = () => {
        this.makeRequest().then(response => {
        let q = Object.values(response).map(e => Object.values(e));
        this.setState({items:q});
        });
    };

    makeRequest = (e) =>{
        console.log(e)
        let items = adapter.makeGetRequest(url);
        return items;
    };


    render() {
        if (!this.state.items) {
            return <div />
        }
        return(
            <div >
                <Accordion>
                    {this.state.items.map(item => {
                        return (
                            <AccordionItem title={`#${item}`} expanded={item === 1} >
                                <div>
                                    {
                                        <Gallery withModal>
                                            {tst.map(item => (
                                                <Image
                                                    src={item.img}
                                                    alt="Image 1"
                                                    size={2}
                                                    theme={{ padding: '5px' }}
                                                >
                                                </Image>
                                            ))}

                                        </Gallery>
                                    }
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        )
    }
}

export default Admin;



