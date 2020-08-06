import React, { Component } from 'react';
import "./pets.css";
import {connect} from "react-redux";
import "./pets.css";
import Pet from "./Pet";
import {Link} from "react-router-dom";
import {getPet, updatePetArr} from "../../../redux/petReducer";


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
    
    renderPetArray = () => {
        if (this.props.petsArray !== undefined) {
            let mappedPets;
            return mappedPets = this.props.petsArray.map((index, i) => (
                <Pet
                key={index}
                pet_id={this.props.petsArray[i].pet_id}
                name={this.props.petsArray[i].name}
                age={this.props.petsArray[i].age}
                breed={this.props.petsArray[i].breed}
                gender={this.props.petsArray[i].gender}
                description={this.props.petsArray[i].description}
                getPets={this.props.getPetsArray} 
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
                <Link to="/edit-pet">
                    <div>
                        <button>Add your pet!</button>
                    </div> 
                </Link>
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