import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import "./pets.css";
import Pet from "./Pet";
import axios from 'axios';
import {Link} from "react-router-dom";
import {getPet, updatePetArr} from "../../../redux/petReducer";
import EditPets from './EditPets';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            editing: false
        }
    }

    addPet = () => {
        const {pets} = this.state;
        const newPets = [];
       
        axios.post("/api/pet/add")
        .then((res) => {
            this.props.getPet(res.data[0]);
            console.log(this.props.pet)
            // this.props.getPet(newPets);

            newPets.push( <Pet petInfo={this.props.pet} />)
            
            this.setState({pets: [...pets, newPets]});
            console.log(this.state.pets);

            this.props.updatePetArr(newPets);
        })

        
        
    }

    deletePet = () => {

    }

    toggleEdit = () => {
        this.setState({editing: !this.state.editing});
    }


    render() { 
        console.log(this.props.petsArray)
        // const mappedPets = this.props.petsArray((index) => (
        //     <Pet
        //     key={index}
        //     name={this.props.pet.name}
        //     age={this.props.pet.age}
        //     breed={this.props.pet.breed}
        //     gender={this.props.pet.gender}
        //     description={this.props.pet.description} />
        // ))

        return ( 
            <div className="editpets-wrapper">
                <div>
                    <Link to="/edit-pet">
                        {/* {mappedPets} */}
                        <button>Add your pet!</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet, updatePetArr})(Pets);