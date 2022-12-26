import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost,  getPost,findSingle1Post } from "../../../redux/actions/postAction";
import { getDataApi } from "../../../config/fetchData";
import axios from "axios";
const editpost = () => {

  const pageroute=useRouter();

  const initalState = {
    firstName: "",
    mobile: "",
    title: "",
    description: "",
    city: "",
  };


  const [userData, setUserData] = useState(initalState);
  const { city, title, description, mobile, firstName } = userData;
  const { post, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter()


  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    // console.log(e.target,type,placeholder,'ggggggg');

    console.log(e.target.attributes, className);

    // if (name === "img") {
    //   setUserData({ ...userData, [name]: [...img, e.target.files[0]] });
    // } else
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    if (pageroute.query.id!=undefined) {
        // alert(pageroute.query.id);
        dispatch(editPost(pageroute.query.id, userData,router));
        alert("update");
        router.push("/posts/posttable");
    } else
    {
      dispatch(editPost(userData, router));
      alert("update");
      // console.log(userData);
      router.push("/post");
     
      
    }
  }; 

  useEffect(() => {
    if(pageroute.query.id!=undefined){
        // setUserData({ ...userData, ['firstName']: 'jjjlkjlljkl' });
        let _id=pageroute.query.id;
        const fetchdata=getDataApi('posts/'+_id).then(respose=>{
            // console.log(respose);
            setUserData({ ...userData, ['title']:respose.title,['firstName']:respose.firstName,['city']:respose.city,['description']:respose.description,});
            // setUserData(...userData,respose);
        });
        // console.log(fetchdata);
        // setUserData({ ...userData, fetchdata });
        // const response = getDataApi("posts/"+_id);
        // console.log(response);
        // if (response && response.status) {
        // return response;

        // } else {
        // }
    }
  }, [pageroute.query.id]);





  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Please Enter Your title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">FirstName</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Please Enter Your FirstName"
            onChange={handleChange}
            value={firstName}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            name="city"
            onChange={handleChange}
            value={city}
          >
            <option value="call1">Select City</option>
            <option value="Aligarh">Aligarh</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

       

        <div>
          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            className="form-control"
            //id="text"
            name="description"
            rows="7"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
            value={description}
          />
        </div>
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default editpost;
