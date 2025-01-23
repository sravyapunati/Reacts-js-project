import react, { useEffect, useState } from 'react';
import { listEmployees } from '../assets/services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListComponent = () => {
    const [employees, setEmployee] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    //const [endIndex, setEndIndex] = useState(5);
    let isLoading = false;

    const createdDate = new Date();
    const year = createdDate.getFullYear();
    const month = String(createdDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(createdDate.getDate()).padStart(2, "0");  //Dates are 
    const formattedDate = `${year}-${month}-${day}`;
    //const formattedDate = `2025-01-05`;
    const endIndex = 5;
    const fetchData = (startIndex, endIndex, formattedDate) => {
        console.log("fetchstartIndex---", startIndex)
        // setStartIndex(startIndex);
        listEmployees(startIndex, endIndex, formattedDate).then((emp) => {
            console.log("response", emp.data.responseList)
            setEmployee(emp.data ? emp.data.responseList : []);
            setTotalRecords(emp.data.totalRecords);
            isLoading = true;

        }).catch(error => {
            console.error(error)
            isLoading = false;

        })
    };

    useEffect(() => {
        setStartIndex(startIndex)
        fetchData(startIndex, endIndex, formattedDate)

    }, [startIndex])

    const navigate = useNavigate();
    const addEmployee = () => {
        navigate('/create')
    }

    const totalPages = Math.ceil(totalRecords / 5);
    const handlePage = (page) => {
        if (page >= 0 && page <= totalPages) {
            // const calculatedStartIndex = (page - 1) * endIndex; // Calculate the actual start index for the API
            setStartIndex(page - 1); // Update the state
            console.log("Page selected:", page);
            //console.log("Calculated Start Index:", startIndex, calculatedStartIndex);
            console.log("Total Pages:", totalPages);
        }
    };

    return <div className='container d-flex flex-column justify-content-center align-items-center'>
        <h2 className='text center'>User List</h2>
        <div className="w-100 d-flex justify-content-end">
            <button className="btn btn-primary me-md-2" type="button" onClick={addEmployee}>
                Create</button>
        </div>
        <br></br>

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
                    isLoading = true && employees.length > 0 ? (
                        employees.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.emailId}</td>
                                <td>{u.mobile}</td>
                                <td>{u.createdDate}</td>
                            </tr>
                        ))
                    ) : (<tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>
                            No records found
                        </td>
                    </tr>)}
            </tbody>
        </table>
        <div className="pagination-container">
            <ul className="pagination">
                <li className={`page-item ${startIndex === 0 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePage(startIndex)}
                    >
                        &laquo;
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, idx) => (
                    <li key={idx} className={`page-item ${startIndex === idx ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePage(idx + 1)}
                        >
                            {idx + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${startIndex > totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePage(startIndex + 2)}
                    >
                        &raquo;
                    </button>
                </li>
            </ul>
        </div>

    </div>
}
export default ListComponent;