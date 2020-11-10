import React, {Component} from 'react'
import API from './../Api/config';





class MamadsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels : [null]
        };
            // addr: "string",
            // name: "string",
            // pics: null
      }

      getHotelData = async () => {
        console.log("clickd")
        const response = await API.get('/hotels_list');
        this.setState((state, props)=>{
            return {
                hotels : response.data.data
            }
        })
        console.log(this.state)
      }

    render(){
        return (
            <div>
                <p>MamadsPage</p>
                <button onClick={
                this.getHotelData
                }> click here</button>
                {/* <p>hotel name:</p>
                <p>{this.state.name}</p>
                <p>hotel address:</p>
                <p>{this.state.addr}</p>
                <p>number of pics:</p>
                <p>{this.state.pics}</p> */}
            </div>
        )
    }
  }



export default MamadsPage