import React, { Component } from 'react'
import { connect } from 'react-redux'
import './componentLogin.css'
import { login, validateToken, logout } from '../../redux/actions/LoginAction'


export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
                username : "",
                password : "",
                isLoading : false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        

    }

            onChange = (e) =>{
                
                this.setState({ [e.target.name] : e.target.value })
                
                
            }
            
            onSubmit = (e) => {
            e.preventDefault()

            const loginBlock = {
                username : this.state.username,
                password : this.state.password
            }
            
           this.props.login(loginBlock)
           
           this.setState({
            username : "",
            password : ""
           })

        
         
            
        
        }

        onClick = () => {
            
            this.props.logout()
           }

        componentDidMount(){
            this.props.validateToken()
        }

         

    render() {
     
        if ( this.props.isLogged ) {
            return ( 
                <>
                <h1 style={{fontSize : "80px"}}>LOGGED IN</h1>
                <button onClick={this.onClick}>LOGOUT</button>
                </>
            )
        }
        // console.log(`esce fuori ${this.props.msg}}`);
        return (
            
        <>
       
        
        <br />
        <h1>IF ERROR <span  style={{color:"teal"}}>{this.props.msg}</span></h1>      
        <br />
        <br />                  
            <form onSubmit={this.onSubmit}>
                
                <input name="username" type="text"onChange={this.onChange} value={this.state.username }/>
                <input name="password" type="text"onChange={this.onChange} value={this.state.password }/>
                <button type="submit">SUBMIT</button>
            
            </form>
            <hr />
            <hr />
            <h1 style={{color:"red"}}>THE TOKEN HOSTED IN LOCALSTORAGE IS <span  style={{color:"green"}}>{this.props.tokenHosted}</span></h1>
        </>
            
        )
    }
}



const mapStateToProps = (state) => ({
        
        token : state.login.token,
        tokenHosted : state.login.tokenHosted,
        isLogged : state.login.isLogged,
        msg : state.login.msg,
        response : state.login.response

})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, {login, validateToken, logout})(Login)



// import React from 'react';
// import { connect } from 'react-redux';


// const Login = () => {

//     let fields = {
//         "username" : "etheliusdev@gmail.com",
//         "password" : "20aprile!"
//     }

// const onChange = (e) => {
 
// //    fields = {[e.target.name] : e.target.value}
 
// }
  

// // portare in redux
// const onSubmit = (e) => {
//         e.preventDefault()
       
//         fetch('http://micheled20.sg-host.com/wp-json/jwt-auth/v1/token',{
//             method : 'POST',
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//             body : JSON.stringify(fields)

//         }).then(res => res.json()).then(data => console.log(data.token)).catch(err => console.log(err))
        
//     }
// // FINE portare in redux
    
//     return (
       
//         <>
//         <form onSubmit={onSubmit}>
//             <input name="user" type="text"onChange={onChange} />
//             <input name="password" type="text"onChange={onChange} />
//             <button type="submit">SUBMIT</button>
//         </form>
//         </>


//     )
// }


// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)






// const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => {
//     return (
//         <section>
//             <h2>Jugadores</h2>
//             <div className="contenedor-de-jugadores">
            
// {
//         jugadores.map( j => (
//             <article className="jugador" key={j.id}>
//             <img src={j.foto} alt={j.nombre}/>
//             <h3>{j.nombre}</h3>
//             <div>
//             <button onClick={() => agregarTitular(j)}>Titular</button>
//             <button onClick={() => agregarSuplente(j)}>Suplente</button>
//             </div>
//         </article>
//         ))
// }

//             </div>
//         </section>
//     )
// }

// const mapStateToProps = state => ({
//     jugadores : state.jugadores
// })

// const mapDispatchToProps = dispatch => ({
//     agregarTitular(jugador) {
//         dispatch({
//             type : "AGREGAR_TITULAR",
//             jugador
//         })
//     },
//     agregarSuplente(jugador){
//         dispatch({
//             type : "AGREGAR_SUPLENTE",
//             jugador
//         })
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)
