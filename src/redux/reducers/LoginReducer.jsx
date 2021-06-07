import {USER_LOADING, USER_VALID, USER_INVALID, LOGGING_OUT, USER_REGISTER , USER_REGISTERED} from '../actions/Types'



const initialState = {
    token : null,
    tokenHosted :localStorage.token,
    isLogged : false,
    msg : null,
    msgRegistration : null,
    response : [],
    isRegistered : false,
}

export default function (state=initialState, action) {
    switch (action.type) {
        
        case USER_LOADING:
          return {
              ...state,
              token : action.payload.token,
              msg : action.payload.message,
                           
          };
          case USER_VALID:
          return {
              ...state,
              isLogged : true
          };           
          case USER_INVALID:
          return {
              ...state,
              isLogged : false
          };  
          case LOGGING_OUT:
          return {
              ...state,
              isLogged : false,
              token: null
          };    
          case USER_REGISTER:
          return {
              ...state,
              isLogged : false,
              msgRegistration : action.payload.message,
              isRegistered : false
          };  
          case USER_REGISTERED:
            return {
                ...state,
               isRegistered : true
            };      
        default:
            return state;
            
    }
}


// const LoginReducer = "cancellami"

// export default LoginReducer //cancellami


// import {FETCH_POSTS, NEW_POST} from '../actions/Types' ==> variabili dispatch

//           return {
//               ...state,
//               items : action.payload 
//           };

//           case NEW_POST:
//           return {
//               ...state,
//               item : action.payload 
//           };           
    
//         default:
//             return state;
            
//     }
// }


// let fields = {
//     "username" : "etheliusdev@gmail.com",
//     "password" : "20aprile!"
// }

// const onChange = (e) => {

// //    fields = {[e.target.name] : e.target.value}

// }



// const onSubmit = (e) => {
//     e.preventDefault()
   
//     fetch('http://micheled20.sg-host.com/wp-json/jwt-auth/v1/token',{
//         method : 'POST',
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify(fields)

//     }).then(res => res.json()).then(data => console.log(data.token)).catch(err => console.log(err))
    
// }