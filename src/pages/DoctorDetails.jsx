import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./doctorDetail.css";

function DoctorDetails() {
  return (
    <div>
      <Header />
      <SideBar />

      <table className="table  table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td>def@somemail.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Primary</td>
            <td>Joe</td>
            <td>joe@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Success</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Info</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Warning</td>
            <td>Refs</td>
            <td>bo@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>Activeson</td>
            <td>act@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>Secondson</td>
            <td>sec@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Light</td>
            <td>Angie</td>
            <td>angie@example.com</td>
            <td>web developer</td>
          </tr>
          <tr>
            <td>Dark</td>
            <td>Bo</td>
            <td>bo@example.com</td>
            <td>web developer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DoctorDetails;
