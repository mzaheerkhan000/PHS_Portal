import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./patientDetail.css";
import Info from "./info";

function PatientsDetail() {
  return (
    <div>
      <Header />
      <SideBar />

      <div className="patient-table">
        <table className="table  table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Moris</td>
              <td>Steven</td>
              <td>850438928925852</td>
              <td>def@somemail.com</td>
            </tr>

            {Info.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.patientFirstName}</td>
                <td>{patient.patientLastName}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>{patient.disease}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsDetail;
