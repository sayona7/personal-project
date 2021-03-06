import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Pets from "./Pets/Pets";
import Cal from "./Calendar/Calendar";
import Img from "./ImgUpload/Img";
import "./main.css";
import {updatePetArr} from "../../redux/petReducer";
import {connect} from 'react-redux';
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            petsArray: null
         }
    }

    componentDidMount() {
        this.getPetsArray();
    }

    getPetsArray = () => {
        const {user_id} = this.props.user;

        axios.get("/api/pet/get-pets", {user_id})
        .then((res) => {
            this.setState({petsArray: res.data})
            this.props.updatePetArr(this.state.petsArray);
        })
    }

    

    render() { 

        return ( 
            <div>
                <Cal />
                {/* <ImgUpload/> */}
                {/* <Img /> */}
                <div className="mainWrapper">
                    <Profile />
                    <Pets 
                    getPetsArray={this.getPetsArray}
                    />
                </div>
                
            </div>
        );
    }
}
 
const mapStateToProps = reduxState => reduxState.reducer;

export default connect(mapStateToProps, {updatePetArr})(Dashboard);