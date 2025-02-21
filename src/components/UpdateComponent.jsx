// import React, { useState } from "react";
// import { updateEmployee } from "../assets/services/EmployeeService";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateComponent = () => {
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState({
//         firstName: '',
//         lastName: ''
//     });
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const handleError = () => {
//         const errorCopy = { ...error };
//         let valid = true;
//         if (firstName.trim) {
//             errorCopy.firstName = '';
//         } else {
//             errorCopy.firstName = "FirstName cannot be empty"
//             valid = false;
//         }

//         if (lastName.trim) {
//             errorCopy.lastName = '';
//         } else {
//             valid = false;
//             errorCopy.lastName = "FirstName cannot be empty"
//         }
//         setError(errorCopy);
//         return valid;
//     }
//     const updateEmp = () => {
//         console.log("updating  e -----")
//         if (handleError()) {
//             const emp = {firstName,lastName}
//             updateEmployee(id,emp).then(async (resp) => {
//                 const responseText = await resp.text();
//                 if (resp.status === 200) {
//                     alert(responseText);
//                     navigate("/employee")
//                 } else {
//                     alert("id not found")
//                     navigate("/employee")
//                 }
//             }).catch((error) => {
//                 console.log(error);
//             })
//         }
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <div className="card shadow" style={{ width: "25rem" }}>
//                 <div className="card-body mb">
//                     <h5 className="card-title text-center">Update User</h5>
//                     <form>
//                         <div className="form-group mb-3">
//                             <label>First Name</label>
//                             <input
//                                 type="text"
//                                 className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
//                                 placeholder="Enter your name"
//                                 name="firstName"
//                                 value={firstName}
//                                 onChange={(e) => setfirstName(e.target.value)}
//                             />
//                             <div className='invalid-feedback'>{error.firstName}</div>
//                         </div>
//                         <div className="form-group mb-3">
//                             <label>Last Name</label>
//                             <input type="text"
//                                 className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
//                                 placeholder="Enter your name"
//                                 name='lastName'
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                             {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
//                         </div>
//                         {/* <button type="submit" className="btn btn-primary w-100" onClick={updateEmp}>
//                             Update
//                         </button> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default UpdateComponent;