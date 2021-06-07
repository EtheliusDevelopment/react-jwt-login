import {USER_REGISTER, USER_REGISTERED} from './Types';


export const register = (registerBlock) => dispatch => { 

    fetch('http://micheled20.sg-host.com/wp-json/wp/v2/users',{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIxMTQ2Nzk1LCJuYmYiOjE2MjExNDY3OTUsImV4cCI6MTYyMTc1MTU5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.7Gj3leSKbbhQ3EC-ltXXrAIF8UgqTzoY547XRo1wE6g"
        },
        body : JSON.stringify(registerBlock)
    })
    .then(res =>res.json())
    .then(data => dispatch({
            type : USER_REGISTER,
            payload : data
    }))
    .then(data => localStorage.email = data.payload.email) 
    .catch(err =>console.log(err))
    

    setTimeout (
        function(){
        let email = localStorage.email
        if (email && email !== "undefined" && email !== null ) {

        dispatch({

        type : USER_REGISTERED
        })

        } else {
        return null
        }
        },1200)
    

 }

 export const  register12 = async (registerBlock) => async dispatch => { 

    fetch('http://micheled20.sg-host.com/wp-json/wp/v2/users',{
        method : 'POST',
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIxMTQ2Nzk1LCJuYmYiOjE2MjExNDY3OTUsImV4cCI6MTYyMTc1MTU5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.7Gj3leSKbbhQ3EC-ltXXrAIF8UgqTzoY547XRo1wE6g"
        },
        body : JSON.stringify(registerBlock)
    })
    .then(res => res.ok ? res.json() : false)
    .then(data => {
        if (data) {
            
            dispatch({
            type : USER_REGISTER,
            payload : data
            })

        } else {
           return null
        }
    
    })
    .catch(err =>console.log(err))
   

 }

//  fetch().then(res => res.ok ? res : false).then(res => {
//     if (res) {
//         //res ok
//     } else {
//        //res not ok
//     }

// });





