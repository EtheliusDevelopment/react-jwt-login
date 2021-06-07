import {USER_LOADING, USER_VALID, USER_INVALID, LOGGING_OUT} from './Types';
import jwt_decode from "jwt-decode";





// export const fetchPosts = () => dispatch => {
    
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type : FETCH_POSTS,
//             payload : posts
//         }));
    
// }
export const login = (fields) => dispatch => {
   
    

    fetch('http://micheled20.sg-host.com/wp-json/jwt-auth/v1/token',{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(fields)

        })
        .then(res => res.json())
        .then(data => dispatch({
            type : USER_LOADING,
            payload : data
        }))
        .then(data => localStorage.token = data.payload.token) 
        .catch(err => console.log(err));
        
        setTimeout (
                function(){
                let token = localStorage.token
                if (token && token !== "undefined" && token !== null && token.length === 240) {

                dispatch({

                type : USER_VALID
                })

                } else {
                return null
                }
        },800)

    }


export const validateToken = () => dispatch => {
        
        
    
    

        let token = localStorage.token

        if (token && token !== "undefined" && token !== null && token.length === 240) {
        let decodedToken = jwt_decode(token); 
        // console.log("Decoded Token", decodedToken);

        let currentDate = new Date();

        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            dispatch({
                type : USER_INVALID
                
            })
        
        } else { 
            dispatch({
            type : USER_VALID
            
        })
        
        }}

}

export const logout = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({
        type : LOGGING_OUT
        
    })
    console.log("Logged Out")
}




// export const newPost = (postData) => dispatch => {
    
    
//     fetch("https://jsonplaceholder.typicode.com/posts", {
        
//     method : 'POST',
//         headers : {
//             'content-type' : 'application/json'
//         },
//         body : JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post => dispatch({
//         type : NEW_POST,
//         payload : post
//     }))
   

// }