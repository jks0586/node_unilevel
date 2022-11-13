import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Components/Table";
import { GLOBAL_CONSTANT } from "../config/GlobalConstant";
import { getRecipes } from "../redux/actions/recipeAction";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const { recipe, auth } = useSelector((state) => state);
  const router = useRouter();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  useEffect(() => {
    if (recipe && recipe.recipes) {
      setTableData(recipe.recipes.reverse());
    }
    console.log(recipe);
  }, [recipe]);

  useEffect(() => {
    if (!auth.token) {
      router.push("/");
    }
  }, [auth]);

  return (
    <div>
      <title>Dashboard | {GLOBAL_CONSTANT.APP_NAME}</title>
      <meta
        name="description"
        content={`Dashboard | ${GLOBAL_CONSTANT.APP_NAME}`}
      />
      <link rel="icon" href="/favicon.ico" />

      <div style={{ marginTop: "0rem", marginBottom: "0rem" }}>
        <Table data={tableData} rowsPerPage={5} />
      </div>
    </div>
  );
};

export default Dashboard;
