import React, { useEffect, useState } from 'react'
import styles from "../styles/form.module.css"
import axios from "axios"


const Form = () => {
    const[name, setname] = useState("");
    const [email, setemail] = useState("");

    const [posts, setPosts] = useState([]);
    const header = {"Access-Control-Allow-Origin":"*"}
    const apiEndPoint = ""
      
    
    const handleSubmit= async (e) => {
        e.preventDefault();
        console.log("clicked");
    

    await axios.post(
        "",
        {
            name: name,
            email: email,
            header,
        }
    );

    getPosts();
    setname("");
    setemail("");
    };
    
    useEffect(() =>{
        getPosts()
    },[]);

    const getPosts = async ( ) => {
        const { data: res } = await axios.get(apiEndPoint);
        console.log(res);
        setPosts(res);
    }

    
      


  return (
    <div>
     <div className={styles.form}>
      <div className="form-group">
      <h1 className={styles.header}>Form</h1>
      <div className="center">
    <form>
    <div class="mb-3">
    <label for="name">name</label>
    <input type="text" class="form-control" onChange={(e) => setname(e.target.value)} value={name}/>
    </div>
    <br/>
    <div class="mb-3">
    <label for="email">email</label>
    <input type="email" class="form-control" onChange={(e) => setemail(e.target.value)} value={email}/>
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    
     </div>
     </div>
     </div>
    
     </div>
     
)
}


    
      
  
  

export default Form
