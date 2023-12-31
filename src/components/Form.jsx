import {useState} from "react";
import validation from "./validation";



const Forms = () =>{
    const [userData,setUserData]= useState({
        email:'',
        password:''
         
    });

    const [errors, setErrors] = useState({

    });

    const handleChange= (event)=>{
        setErrors(validation({...userData,[event.targer.name]: event.target.value}))
        setUserData({
            ...userData,
            [event.targer.name]: event.target.value
        })

        


    };

    return (
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={userData.email}  type="text" name="email"/>
                {errors.e1 ?(<p>{errors.e1}</p>) :errors.e2 ? (
                    <p>{errors.e2} </p>
                ) : (
                    <p>{errors.e3}</p>
                )
                }
                <hr/>

                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value={userData.password} type="password" name="password"/>
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)
                }

                <br/>
               
                <button type="submit">SUBMIT</button>
            </form>

        </div>
    )
};

export default Forms;