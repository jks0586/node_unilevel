import React from "react";
import Header from "../components/Header";
import styles from "../styles/dashboard.module.css";
import SideNavbar from "../components/SideNavbar";
import Design from "../components/Design";
const dashboard = () => {
  return (
    <div>
      <SideNavbar />
      <Design />
      <div className={styles.container}>
        <h1 className={styles.header}>Add Product</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="name"
              className="form-control"
              id="Name"
              placeholder="Name"
            />

            <label htmlFor="Email1">Email</label>
            <input
              type="email"
              className="form-control"
              id="Email1"
              placeholder="Email"
            />
          </div>

          <label htmlFor="Inputselect">Select Number</label>
          <select className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <label htmlFor=" Email1msg">Message:</label>

          <div className="checkbox">
            <label>
              <input type="checkbox" id="yesno" /> Yes / No
            </label>
          </div>

          <button type="submit" className="btn btn-info">
            Submit Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default dashboard;
