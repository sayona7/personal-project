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

    // componentDidMount() {
    //     // const {pets} = this.state.pets;
        
    //     if (this.props.petsArray !== null) {
    //         console.log(this.props.petsArray)
    //         const petsArray = this.props.petsArray[0];
    //         this.setState({pets: this.props.petsArray});
    //         console.log(this.props.petsArray)
    //     }
    // }

    componentDidUpdate(prevProps) {
        console.log(prevProps.petsArray.length)
        if (this.props.petsArray.length !== prevProps.petsArray.length) {
            console.log("prevprops are working")
            this.renderPetArray();
        }
    }


    toggleEdit = () => {
        this.setState({editing: !this.state.editing});
    }
    
    renderPetArray = () => {
        console.log(this.props.petsArray)
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
    console.log(reduxState.petReducer.petsArray)
    return {
        petsArray: reduxState.petReducer.petsArray
    }
};
 
export default connect(mapStateToProps, {getPet, updatePetArr})(Pets);