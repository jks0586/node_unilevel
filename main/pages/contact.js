import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/form.module.css";
const Contact = () => {
  return (
     < div className = "center" >
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Form</h1>
    <div className="center">
     <form className="form-horizontal"> 
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div> 
  <br/>
  <div class="form-group">
    <label for="exampleFormControlInput1">age</label>
    < input type="number" class="form-control"  id="quantity" placeholder="age" />
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlSelect1">City</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>kanpur</option>
      <option>lucknow</option>
      <option>delhi</option>
      <option>nagpur</option>
      <option>Aligarh</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlSelect2"> multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br/>
   <div class="form-group">
   <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
  <br/>
  <div>
    <Button as="input" type="submit" value="Submit" />{' '}
    <Button as="input" type="reset" value="Reset" />
</div>
</form>
 </div>
       </div>
       </div>
       </div>
       </div>
       </div>
  )
}


   
   
    
export default Contact;
