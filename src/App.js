import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      postRegistrationDetails(inputs)
    }

    function postRegistrationDetails(inputs) {
        var transformedData = {
          "firstName": inputs.firstName,
          "middleName": inputs.middleName,
          "lastName": inputs.lastName,
          "aadharNumber": inputs.aadharNumber,
          "contactNumber": inputs.contactNumber,
          "address": {
            "firstLine": inputs.addressFirstLine,
            "secondLine": inputs.addressSecondLine,
            "city": inputs.addressCity,
            "pinCode": inputs.addressPinCode
          }
        }

        fetch('http://localhost:8080/api/maid-details', {  // Enter your IP address here

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(transformedData) // body data type must match "Content-Type" header

        }).then(response => alert("Maid data registered successfully."))

      }

  return (
    <div className="App-header">
          <h1>Maid Registration</h1>
          <form onSubmit={handleSubmit}>
          <fieldset>
             <label> <br/>
               <b>First Name</b> &nbsp;
               <input name="firstName" value={inputs.firstName || ""} onChange={handleChange} /> &nbsp;
               <b>Middle Name</b> &nbsp;
               <input name="middleName" value={inputs.middleName || ""} onChange={handleChange}/> &nbsp;
               <b>Last Name</b> &nbsp;
               <input name="lastName" value={inputs.lastName || ""} onChange={handleChange}/>
             </label>
             <br/><br/>
             <label>
                 <b>Aadhar Number</b> &nbsp;
                 <input name="aadharNumber" value={inputs.aadharNumber || ""} onChange={handleChange}/>
             </label>
             <br/><br/>
             <label>
               <b>Contact Number</b> &nbsp;
               <input name="contactNumber" value={inputs.contactNumber || ""} onChange={handleChange}/>
             </label>
             <label>
               <p><b>Address</b></p>
                 First Line &nbsp;
                 <input name="addressFirstLine" placeholder = "Flat/House" value={inputs.addressFirstLine || ""} onChange={handleChange}/> &nbsp;
                 Second Line &nbsp;
                 <input name="addressSecondLine" placeholder = "Area/Locality" value={inputs.addressSecondLine || ""} onChange={handleChange}/> &nbsp;
                 City &nbsp;
                 <input name="addressCity" value={inputs.addressCity || ""} onChange={handleChange}/> &nbsp;
                 <br/><br/>
                 Pin Code &nbsp;
                 <input name="addressPinCode" value={inputs.addressPinCode || ""} onChange={handleChange}/>
             </label>
           </fieldset>
           <br/>
           <button type="submit">SUBMIT</button>
          </form>
        </div>
  );
}

export default App;
