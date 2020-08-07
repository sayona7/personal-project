import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import "./pets.css";
import Pet from "./Pet";
import {Link} from "react-router-dom";
import {getPet, updatePetArr} from "../../../redux/petReducer";
import axios from "axios";
import "../../../App.css";


class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            editing: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.petsArray.length !== prevProps.petsArray.length) {
            this.renderPetArray();
        }
    }


    toggleEdit = () => {
        this.setState({editing: !this.state.editing});
    }

    deletePet = (id) => {
        const pet_id = id;
        axios.delete(`/api/pet/${pet_id}`)
        .then((res) => {
            this.props.updatePetArr(res.data);
        })
        .catch(err => console.log(err));

    }
    
    renderPetArray = () => {
        if (this.props.petsArray !== undefined) {
            let mappedPets;
            return mappedPets = this.props.petsArray.map((index, i) => (
                <Pet
                key={index.pet_id}
                pet_id={this.props.petsArray[i].pet_id}
                name={this.props.petsArray[i].name}
                age={this.props.petsArray[i].age}
                breed={this.props.petsArray[i].breed}
                gender={this.props.petsArray[i].gender}
                description={this.props.petsArray[i].description}
                pet_photo={this.props.petsArray[i].pet_photo}
                getPets={this.props.getPetsArray} 
                deletePet={this.deletePet}
                />
            ))
        } else {
            return <button>Add your pet!</button>
        }
    }


    render() { 
    

        return ( 
            <div className="editpets-wrapper">
                {this.renderPetArray()}
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => {
    return {
        petsArray: reduxState.petReducer.petsArray
    }
};
 
export default connect(mapStateToProps, {getPet, updatePetArr})(Pets);