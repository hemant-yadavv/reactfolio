import { useState } from 'react'
import './App.css'

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)

  // function firstNameHandler(event){
  //   // console.log(event.target)
  //   // console.log(event.target.value)
  //   // console.log("first name handler")
  //   setFirstName(event.target.value)
  // }
  // function lastNameHandler(event){
  //   // console.log(event.target)
  //   // console.log(event.target.value)
  //   // console.log("last name handler")
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isAgree: false,
      mode: "",
      favCar: ""
    }
  );

  // console.log(formData)

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      }
    });
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Form Give Data");
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input required
          type="text"
          placeholder='first name'
          // onChange={firstNameHandler}
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <input required
          type="text"
          placeholder='last name'
          // onChange={lastNameHandler}
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <input required
          type="email"
          placeholder='email'
          // onChange={lastNameHandler}
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <textarea
          name="comments"
          placeholder="Enter your Comments"
          onChange={changeHandler}
          value={formData.value}
        />

        <br />
        <input required
          type="checkbox"
          name="isAgree"
          onChange={changeHandler}
          id="isAgree"
          checked={formData.isAgree}
        />

        <label htmlFor="isAgree">Agree Term and Condition</label>

        <fieldset>

          <input required
            type="radio"
            name="mode"
            id="Dark-mode"
            value="Dark-mode"
            onChange={changeHandler}
            checked={formData.mode === "Dark-mode"}
          />

          <label htmlFor="Dark-mode">Dark Mode</label>

          <input required
            type="radio"
            name="mode"
            id="Light-mode"
            value="Light-mode"
            onChange={changeHandler}
            checked={formData.mode === "Light-mode"}
          />
          <label htmlFor="Light-mode">Light Mode</label>
        </fieldset>

        <select required
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="">Select Car</option>
          <option value="porche">Porche</option>
          <option value="lambo">Lambo</option>
          <option value="thar">Thar</option>
          <option value="bmw">BMW</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="favCar">Your Favrioute Car</label>

        <input type="submit" value="Submit" />

      </form>

    </>
  )
}

export default App
