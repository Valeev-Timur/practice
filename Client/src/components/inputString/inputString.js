import React from "react";
import Paper from '@material-ui/core/Paper';
import ApiRequestAdapter from "../../request-adapters/api-request-adapter";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import style from './inputString.module.css';

const adapter = new ApiRequestAdapter();
const url = 'http://localhost:3001/collections/tag';

class InputString extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTagValue: null,
            items:null
        };
    };

    handleTag = (e) => {
        this.setState({inputTagValue: e.target.value})
    };

    handleButtonClick = (e) => {
        let tag = this.state.inputTagValue;
        if(tag !== null || !tag.eq(" ")){
            this.makeRequest(tag).then(response => {
                let res = Object.values(response[0]);
                this.setState({items:res})
                this.props.clickHandler(res);
            });
        }
    };

    makeRequest = async (tag) =>{
        let items = await adapter.makeGetRequest(url, tag);
        return items;
    };

    render() {
        return(
            <Paper>
                <InputBase
                    className={style.InputBase}
                    placeholder="Хештег"
                    onChange={this.handleTag}
                />
                <IconButton  className={'SearchBtn'}>
                    <SearchIcon onClick={this.handleButtonClick}/>
                </IconButton>
            </Paper>
        );
    }
}

export default InputString;