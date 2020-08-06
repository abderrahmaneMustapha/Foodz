import React from "react"


class IpStack extends React.Component{
    state = {
        city : ""
    }

    componentDidMount (){
        fetch('http://api.ipstack.com/134.201.250.155'+
        '?access_key=1917221ad7bec92860fd22128b77eca0')
        .then(res=> res.json())
        .then((data)=>{
            this.setState({city : data.city})
        })
    }

    render(){
        return(
            <>  
            {this.state.city}
            </>
            
        )
    }
} 

export default IpStack