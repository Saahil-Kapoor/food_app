import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

    const [credentials,setCredentials] = React.useState({
        name:"",
        geolocation:"",
        password:"",
        email: ""
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'   
            },
            body:JSON.stringify({name:credentials.name,location:credentials.geolocation,email:credentials.email,password:credentials.password})

        });
        const json =await response.json();
        console.log(json);
        if(json.success){
            alert("Account created");
        }
    }
    
    function onChange(event){
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} name='name' onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name='email'/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Location</label>
                    <input type="text" className="form-control" onChange={onChange} name='geolocation' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/Login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
            </div>
        </>
    )
}
