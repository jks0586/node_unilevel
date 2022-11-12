import React from 'react'
import styles from "../styles/form.module.css"
import Link from "next/link";
const Dashboard = () => {
  return (
    <div>
      <div className={styles.form}>
        <div className="form-group">
          <h1 className={styles.header}>Form</h1>
          <div className="center">
            <form>
              <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="age">Age</label>
                <input type="number" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="address">Address</label>
                <input type="address" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="class">Class</label>
                <select class="form-control" id="class">
                  <option value="value">Btech</option>
                  <option value="value">Mba</option>
                  <option value="value">Bca</option>
                  <option value="value">Bsc</option>
                </select>
              </div>
              <br />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      
    </div>
    
  )
}

export default Dashboard
