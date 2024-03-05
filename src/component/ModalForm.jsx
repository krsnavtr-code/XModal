import { useState } from "react";
import "./ModalForm.css";

function ModalForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [formVisible, setFormVisible] = useState(false);
  const makeFormVisible = () => {
    setFormVisible(true);
  };
  const makeFormInVisible = () => {
    setFormVisible(false);
  };
  const formHandle = (e) => {
    e.preventDefault();
    if (e.target[2].value.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(e.target[3].value) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };
  return (
    <div>
      <div className="formCloser" onClick={makeFormInVisible}></div>
      <div className="container">
        <h2>User Details Modal</h2>
        <button className="buttonStyle" onClick={makeFormVisible}>
          Open Form
        </button>
        {formVisible && (
          <div className="modal">
            <form onSubmit={formHandle}>
              <h3>Fill Details</h3>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    ["username"]: e.target.value,
                  }));
                }}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    ["email"]: e.target.value,
                  }));
                }}
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="number"
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    ["phone"]: e.target.value,
                  }));
                }}
                required
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    ["dob"]: e.target.value,
                  }));
                }}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalForm;
