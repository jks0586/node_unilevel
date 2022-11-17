import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTable from "../Components/Post/PostTable";
import { getPost } from "../redux/actions/postAction";
import { addPost } from "../redux/actions/postAction";
const Post = () => {
  
  // const [tableData, setTableData] = useState([]);
  // const [posts, setPosts] = useState([]);
  // const dispatch = useDispatch();
  // const { post, auth } = useSelector((state) => state);


  // useEffect(() => {
  //  addPost('http://localhost:5000/posts/create').then((res) => {
  //        setPosts(res.data.slice(0, 10));
  //           console.log(posts);
  //       })
  //   }); 
 

  //const router = useRouter();

  // useEffect(() => {
  //   dispatch(getPost());
  // }, []);

  // useEffect(() => {
  //   if (post && post.post) {
  //     setTableData(post.post.reverse());
  //   }
  //   console.log(post);
  // }, [post]);

  // useEffect(() => {
  //   if (!auth.token) {
  //     router.push("/");
  //   }
  // }, [auth]);

  return (
    <div>
      <PostTable />
    </div>
  );
};

export default Post;
