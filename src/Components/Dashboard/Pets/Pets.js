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

    componentDidMount() {
        const pets = this.state.pets;
        if (this.props.petsArray !== null) {
            const petsArray = this.props.petsArray[0];
            this.setState({pets: [...pets, petsArray]});
        }

        // if (prevProps.pets.length !== this.props.pets.length) {
        //     console.log("statement working")
        // }
 
    }

    // addPet = () => {
    //     const {pets} = this.state;
    //     const newPets = [];
       
    //     axios.post("/api/pet/add")
    //     .then((res) => {
    //         this.props.getPet(res.data[0]);
    //         console.log(this.props.pet)
    //         // this.props.getPet(newPets);

    //         newPets.push( <Pet petInfo={this.props.pet} />)
            
    //         this.setState({pets: [...pets, newPets]});
    //         console.log(this.state.pets);

    //         this.props.updatePetArr(newPets);
    //     }) 
    // }

    deletePet = () => {

    }

    toggleEdit = () => {
        this.setState({editing: !this.state.editing});
    }
    
    renderPetArray = () => {
        if (this.state.petsArray !== null && this.props.petsArray !== null) {
            let mappedPets;
            return mappedPets = this.props.petsArray.map((index, i) => (
                <div>
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
                <button onClick={this.props.getPetsArray}>Delete</button>
                </div>
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
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {getPet, updatePetArr})(Pets);