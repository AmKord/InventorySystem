import React, { Component,useState } from 'react';
import data from './mock-data.json';
import Inventory from './Inventory';
//import "./InventoryTable.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//class InventoryTable extends Component {

const InventoryTable = () => {    
    const [contacts, setContacts] = useState (data);
    
        return (
            <div >
                 <h1 class="display-4">Inventory Data</h1>
                 <br/>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">One</th>
                            <th scope="col">Two</th>
                            <th scope="col">Three</th>
                            <th scope="col">Four</th>
                            <th scope="col">Five</th>
                        </tr>

                    </thead>
                    <tbody>
                        {contacts.map( (contact) => 
                        <tr>
                            <td>{contact.id}</td>
                            <td>{contact.fullName}</td>
                            <td>{contact.address}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                        </tr>
                    )}
                        
                    </tbody>
                </table>
            </div>
        );
    
};

export default InventoryTable;