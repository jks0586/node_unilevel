import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTable from "../Components/Post/PostTable";
import { getPost } from "../redux/actions/postAction";

const Post = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const { post, auth } = useSelector((state) => state);
  //const router = useRouter();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  useEffect(() => {
    if (post && post.post) {
      setTableData(post.post.reverse());
    }
    console.log(post);
  }, [post]);

  // useEffect(() => {
  //   if (!auth.token) {
  //     router.push("/");
  //   }
  // }, [auth]);

  return (
    <div>
      <PostTable data={tableData} rowsPerPage={5} />
    </div>
  );
};

export default Post;
