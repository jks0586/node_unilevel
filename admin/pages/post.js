import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTable from "../Components/Post/PostTable";
import { getPost } from "../redux/actions/postAction";
import { addPost } from "../redux/actions/postAction";
const Post = () => {

  return (
    <div>
      <PostTable />
    </div>
  );
};

export default Post;
