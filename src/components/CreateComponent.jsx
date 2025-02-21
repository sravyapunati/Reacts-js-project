import react, { useState } from 'react'
import { createEmployee } from '../assets/services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const CreateComponent = () => {

  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobile: '',
    designation: ''
  });

  const navigate = useNavigate();

  const handleError = () => {
    let valid = true;
    const errorCopy = { ...error }; ///spread operator
    if (firstName.trim()) {
      errorCopy.firstName = ''
    } else {
      errorCopy.firstName = "First name cannot be empty"
      valid = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = ''
    } else {
      errorCopy.lastName = "Last name cannot be empty"
      valid = false;
    }
    if (emailId.trim()) {
      errorCopy.emailId = ''
    } else {
      errorCopy.emailId = "Email cannot be empty"
      valid = false;
    }
    if (mobile.trim()) {
      errorCopy.mobile = ''
    } else {
      errorCopy.mobile = "Mobile cannot be empty"
      valid = false;
    }
    if (designation.trim()) {
      errorCopy.designation = ''
    } else {
      errorCopy.designation = "Designation cannot be empty"
      valid = false;
    }
    setError(errorCopy);
    return valid;

  }
  // function onhandleFirstName(e){
  //   setfirstName(e.target.value);
  // }

  // function onhandleLastName(e){
  //   setLastName(e.target.value)
  // }

  // function onhandleEmail(e){
  //   setEmail(e.target.value)
  // }

  // const onhandleMobile = (e)=>setMobile(e.target.mobile)


  const addEmployee = (e) => {
    console.log("form submitted")
    e.preventDefault()  //prevents from reloading page
    if (handleError()) {
      const emp = { firstName, lastName, emailId, mobile }
      // console.log("createcomponent",createEmployee(emp))
      createEmployee(emp).then(async (response) => {
        if (response.status === 400) {
          console.log("ErrorStatus", response.status)
          const res = await response.text();
          alert(res)
          console.log(emp)
        } else {
          const message = await response.text();
          alert(message)
          navigate("/employee")
        }
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-99 bg-light">
      <div className="card shadow" style={{ width: "25rem" }}>
        <div className="card-body mb">
          <h5 className="card-title text-center">Add User</h5>
          <form>
            <div className="form-group mb-3">
              <label>First Name</label>
              <input
                type="text"
                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
              <div className='invalid-feedback'>{error.firstName}</div>
            </div>
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input type="text"
                className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                placeholder="Enter your name"
                name='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email"
                className={`form-control ${error.emailId ? 'is-invalid' :''}`}
                placeholder="Enter email"
                name='emailId'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              {error.emailId && <div className='invalid-feedback'>{error.emailId}</div>}
            </div>
            <div className="form-group mb-3">
              <label>Mobile Number</label>
              <input type="text"
                className={`form-control ${error.mobile ? 'is-invalid' : ''}`}
                placeholder="Enter your mobile number"
                name='mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {error.mobile && <div className='invalid-feedback'>{error.mobile}</div>}
            </div>
            <div className="form-group mb-3">
              <label>Designation</label>
              <input type="text"
                className={`form-control ${error.designation ? 'is-invalid' : ''}`}
                placeholder="Enter your designation"
                name='designation'
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              {error.designation && <div className='invalid-feedback'>{error.designation}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={addEmployee}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateComponent;