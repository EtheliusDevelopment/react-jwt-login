import React, { Component } from 'react'
import { connect } from 'react-redux'
import './componentRegistration.css'
import { register } from '../../redux/actions/RegisterAction'


export class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
                username : "",
                password : "",
                email : "",
                isLoading : false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        

    }

            onChange = (e) =>{
                
                this.setState({ [e.target.name] : e.target.value });
                console.log(this.state);
                               
                
            }
            
            onSubmit = (e) => {
            e.preventDefault()

            const registerBlock = {
                username : this.state.username,
                password : this.state.password,
                email : this.state.email
            }
            
            this.props.register(registerBlock)
            console.log(registerBlock)
        //    this.setState({
        //     username : "",
        //     password : ""
        //    })
   
        }

 
        // componentDidMount(){
        //     this.props.validateToken()
        // }

         

    render() {
     
        if ( this.props.isLogged) {
            return ( 
                <>
                <h1 style={{fontSize : "80px"}}>LOGGED IN </h1>
                <button type="submit" onClick={this.onClick}>HELLO FROM REGISTRATION.JSX - this.props.isLogged</button>
                </>
            )
        }

        if ( this.props.isRegistered) {
            return ( 
                <>
                <h1 style={{fontSize : "90px", color:"violet"}}>REGISTERED</h1>
                <button type="submit" onClick={this.onClick}>HELLO FROM REGISTRATION.JSX - this.props.isRegistered</button>
                </>
            )
        }
        // console.log(`esce fuori ${this.props.msg}}`);
        return (
            
        <>
          <br />
        <br />   
        <br />
        <br />   
        <br />
        <br />   
        <h4 style ={{color: "orange"}}>REGISTRAZIONE</h4>
        <h4 style ={{color: "orange"}}>{}</h4>
       
        <br />
        <br />
        <h1>IF ERROR <span  style={{color:"teal"}}>{this.props.msgRegistration}</span></h1>      
        <br />
        <br />                  
            <form onSubmit={this.onSubmit}>
                
                <input name="username" type="text"onChange={this.onChange} value={this.state.username }/>
                <input name="password" type="text"onChange={this.onChange} value={this.state.password }/>
                <input name="email" type="email"onChange={this.onChange} value={this.state.email }/>
                <button type="submit">SUBMIT</button>
            
            </form>
            <hr />
            <hr />
        </>
            
        )
    }
}


const mapStateToProps = (state) => ({
        
        isLogged : state.login.isLogged,
        msgRegistration : state.login.msgRegistration,
        isRegistered : state.login.isRegistered

})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, {register})(Registration)


