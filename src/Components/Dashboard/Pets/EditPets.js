import React, {Component} from  "react";
import {connect} from "react-redux";
import "./pets.css";
import {addPet, updatePetArr, getPet} from "../../../redux/petReducer";
import {storage} from "../../../firebase/index";
// import axios from "axios";

class EditPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editNameView: false,
            editAgeView: false,
            editBreedView: false,
            editGenderView: false,
            editDescriptionView: false,
            editPhotoView: false,
            name: "",
            age: null,
            breed: "",
            gender: "",
            description: "",
            image: null,
            pet_photo: "",
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    // IMAGE UPLOAD SECTION //

    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({image}));
        }
      }

      handleUpload = () => {
          const {image} = this.state;
          const uploadTask = storage.ref(`images/${image.name}`).put(image);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
          }, 
          (error) => {
               // error function ....
            console.log(error);
          }, 
        () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(pet_photo => {
                console.log(pet_photo);
                this.setState({pet_photo});
    
                // axios.put(`/api/pet/${this.props.pet.pet_id}/photo`, {pet_id: this.props.pet.pet_id, pet_photo: this.state.pet_photo})
                //   .then(res => {
                //       console.log(res.data[0])
                //       console.log(this.props.petsArray.pet_id);
                //       console.log(this.state.pet_photo);
                //     //   this.props.updatePetArr(res.data[0]);
                //     //   handleEditPhoto();
                //   })
                //   .catch(err => console.log(err));
            })
        });
    
          
      }


    // INPUT FUNCTION //
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // VIEW TOGGLES //
    handleNameView = () => {
        this.setState({editNameView: !this.state.editNameView});
    }

    handleAgeView = () => {
        this.setState({editAgeView: !this.state.editAgeView});
    }

    handleBreedView = () => {
        this.setState({editBreedView: !this.state.editBreedView});
    }

    handleGenderView = () => {
        this.setState({editGenderView: !this.state.editGenderView});
    }

    handleDescriptionView = () => {
        this.setState({editDescriptionView: !this.state.editDescriptionView});
    }

    handlePhotoView = () => {
        this.setState({editPhotoView: !this.state.editPhotoView});
    }

    // Redux state update
    handleSubmit = (e) => {
        this.props.addPet({...this.state});
        console.log(this.props);
    }

    render() { 
        const style = {
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          };
        return ( 
            <div>

                <div className="editpets-wrapper">
                    <div classname="second-epw">

                    <div className="petsWrapper">
                        <p>Profile photo</p>
                        
                        {!this.state.editPhotoView 
                        ?
                        <div>
                            <img src={this.state.pet_photo} alt="Here goes your pet photo"/>
                            <button onClick={this.handlePhotoView} className="edit-profile-btn">Add a photo</button>
                        </div>
                        :
                        <div style={style}>
                            <progress value={this.state.progress} max="100"/>
                            <br/>
                            <input type="file" onChange={this.handleChange}/>
                            <button onClick={this.handleUpload} className="edit-profile-btn">Upload</button>
                            <br/>
                            <img src={this.state.pet_photo || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="auto" width="300"/>
                        </div>
                        }
                        
                    </div>
                    
                    <div className="petsWrapper">
                        <h3>Information</h3>

                        {!this.state.editNameView 
                        ? 
                        <div>
                            <h4>Name: {this.state.name}</h4>
                            <button onClick={this.handleNameView} className="edit-profile-btn">Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Name: {this.state.name}</h4>
                            <input
                            value={this.state.name} 
                            name='name' 
                            onChange={this.handleInput} />
                            <button onClick={this.handleNameView} className="edit-profile-btn">Save</button>
                        </div>
                        }

                        {!this.state.editAgeView
                        ?
                        <div>
                            <h4>Age: {this.state.age}</h4>
                            <button onClick={this.handleAgeView} className="edit-profile-btn">Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Age: {this.state.age}</h4>
                            <input name="age" onChange={this.handleInput} />
                            <button onClick={this.handleAgeView} className="edit-profile-btn">Save</button>
                        </div>
                        }

                        {!this.state.editBreedView 
                        ?
                        <div>
                            <h4>Breed: {this.state.breed}</h4>
                            <button onClick={this.handleBreedView} className="edit-profile-btn">Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Breed: {this.state.breed}</h4>
                            <input name='breed' onChange={this.handleInput} />
                            <button onClick={this.handleBreedView} className="edit-profile-btn">Save</button>
                        </div>
                        }

                        {!this.state.editGenderView 
                        ?
                        <div>
                            <h4>Gender: {this.state.gender}</h4>
                            <button onClick={this.handleGenderView} className="edit-profile-btn">Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Gender: {this.state.gender}</h4>
                            <input name='gender' onChange={this.handleInput} />
                            <button onClick={this.handleGenderView} className="edit-profile-btn">Save</button>
                            {/* <select>
                            <option>Female</option>
                            <option>Male</option>
                            </select> */}
                        </div>
                        }
                        
                        {!this.state.editDescriptionView 
                        ?
                        <div>
                            <h4>Description: {this.state.description}</h4>
                            <button onClick={this.handleDescriptionView} className="edit-profile-btn">Edit</button>
                        </div>
                        :
                        <div>
                            <h4>Description: </h4>
                            <input name='description' onChange={this.handleInput} />
                            <button onClick={this.handleDescriptionView} className="edit-profile-btn">Save</button>
                        </div>
                        }

                    </div>
                    <div className="epw-btn"><button onClick={(e) => this.handleSubmit(e)} className="edit-profile-btn" id="submit-pet">Submit</button></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState.petReducer;
 
export default connect(mapStateToProps, {addPet, updatePetArr, getPet})(EditPets);