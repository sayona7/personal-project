import React, {Component} from 'react';
import {storage} from "../../../firebase/index";
import axios from "axios";
import {connect} from "react-redux";
import {getUser} from "../../../redux/reducer";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
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
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
            axios.put(`/api/user/${this.props.user.user_id}/photo`, {profile_picture: this.state.url})
              .then(res => {
                  console.log(res.data[0])
                  console.log(this.state.url);
                  this.props.getUser(res.data[0]);
                //   handleEditPhoto();
              })
              .catch(err => console.log(err));
        })
    });

      
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
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="auto" width="250"/>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState.reducer;
 
export default connect(mapStateToProps, {getUser})(ImageUpload);