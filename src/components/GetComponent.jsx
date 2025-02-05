import React, { useEffect, useState } from 'react'
import { getEmployee, updateEmployee } from '../assets/services/EmployeeService'
import { useParams, useNavigate } from 'react-router-dom';

const GetComponent = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        emailId: '',
        designation: ''

    });
    const [error, setError] = useState({
        firstName: '',
        lastName: ''
    });
    

    const [da, setDa] = useState({
        firstName: '',
        lastName: '',
    });
    const { id } = useParams();
    useEffect(() => {
        getEmployee(id).then((resp) => {
            setEmployee(resp.data ? resp.data : '');
            console.log(resp.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [id])

    const handleError = () => {
        const errorCopy = { ...error };
        let valid = true;
        console.log("employ", employee)
        if (employee.firstName.trim) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = "FirstName cannot be empty"
            valid = false;
        }

        if (employee.lastName.trim) {
            errorCopy.lastName = '';
        } else {
            valid = false;
            errorCopy.lastName = "FirstName cannot be empty"
        }
        setError(errorCopy);
        console.log("error", errorCopy);
        return valid;
    }

    const navigate = useNavigate();
    const updateEmp = () => {
        console.log("updating  e -----")
        if (handleError()) {
            console.log("emp", employee);
            updateEmployee(id, employee).then(async (resp) => {
                const responseText = await resp.text();
                if (resp.status === 200) {
                    alert(responseText);
                } else {
                    alert("id not found");
                }
                navigate('/employee')
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-99 bg-light">
            <div className="card shadow" style={{ width: "25rem"}}>
                <div className="card-body mb">
                    <h5 className="card-title text-center">User info</h5>
                    <form>
                        <div className="form-group mb-3">
                            <label>First Name</label>
                            <input
                                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                type="text"
                                name="firstName"
                                value={employee.firstName}
                                onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                            />
                            <div className='invalid-feedback'>{error.firstName}</div>
                        </div>
                        <div className="form-group mb-3">
                            <label>Last Name</label>
                            <input type="text"
                                className="form-control"
                                name='lastName'
                                value={employee.lastName}
                                onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email"
                                className="form-control"
                                name='emailId'
                                value={employee.emailId}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Mobile Number</label>
                            <input type="text"
                                className="form-control"
                                name='mobile'
                                value={employee.mobile}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Designation</label>
                            <input type="text"
                                className="form-control"
                                name='designation'
                                value={employee.designation || ''}
                                onChange={(e)=> setEmployee({ ...employee, designation : e.target.value })}
                            />
                        </div>
                        <button type="button" className="btn btn-primary w-100" onClick={updateEmp}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetComponent;