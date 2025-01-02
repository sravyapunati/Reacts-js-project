import react, { useEffect, useState } from 'react';
import { listEmployees } from '../assets/services/EmployeeService';
 
const ListComponent = () => {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        listEmployees().then((emp)=>{
            setEmployee(emp.data)

        }).catch(error => {
            console.error(error)
        })
    },[])

    
    return <div className ='container d-flex flex-column justify-content-center align-items-center'>
        <h2 className='text center'>User List</h2>
        <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Created Date</th>
            </tr>
        </thead>
        <tbody>
        {
            
            employees.map((u)=>(
                <tr key = {u.id}>
                    <td>{u.id}</td>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.emailId}</td>
                    <td>{u.mobile}</td>
                    <td>{u.createdDate}</td>
                </tr>
            ))
        }
        </tbody>
        </table>
        </div>

}
export default ListComponent;