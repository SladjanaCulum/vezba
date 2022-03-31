import React from "react";
import "./Locations.css";
import { Link } from "react-router-dom";
import { Table } from "react-materialize";
import { useState } from "react";
import { lokacije } from "../services/lokacije";
import { PopUpAreYouSure } from "../PopUpAreYouSure/PopUpAreYouSure";

export const Locations = () => {
  const [show, setShow] = useState(false);
  const handleCloseBubble = () => setShow(false);
  const handleShowBubble = () => setShow(true);
  // let local = localStorage.setItem("lokacije", JSON.stringify(lokacije));

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("lokacije"))
  );

  let deleteUser = (id) => {
    const updateUser = users.filter((user) => user.id !== id);
    setUsers(updateUser);
    localStorage.setItem("lokacije", JSON.stringify(updateUser));
    handleCloseBubble();
    // const updateUser = users.filter((user) => user.id !== id);
    // setUsers(updateUser);
    // localStorage.setItem("lokacije", JSON.stringify(updateUser));
    // // setShow(false);
    console.log("Hi");
    console.log(JSON.parse(localStorage.getItem("lokacije")));
  };

  let component = users.map((location) => {
    const createDate = new Date(location.createdAt);
    const yC = createDate.getFullYear();
    const mC = createDate.getMonth() + 1;
    const dC = createDate.getDate();

    const modifiedDate = new Date(location.modifiedAt);
    const yM = modifiedDate.getFullYear();
    const mM = modifiedDate.getMonth() + 1;
    const dM = modifiedDate.getDate();

    return (
      <tr className="lista">
        <td>{location.id}</td>
        <td>{location.name}</td>
        <td>{location.legalName}</td>
        <td>{location.city}</td>
        <td>{location.address}</td>
        <td>{location.createdBy}</td>
        <td>{location.modifiedBy}</td>
        <td className="centar">{`${dC}.${mC}.${yC}`}</td>
        <td className="centar">{`${dM}.${mM}.${yM}`}</td>
        <td>
          <Link to={`/singlelocation/${location.id}`}>
            <i className="material-icons i">edit</i>
          </Link>
        </td>
        <td>
          <PopUpAreYouSure
            id={location.id}
            deleteUser={deleteUser}
            show={show}
            handleShowBubble={handleShowBubble}
            handleCloseBubble={handleCloseBubble}
          />
        </td>
        {/* <td>
          <button
            type="button"
            className="btn"
            onClick={() => deleteUser(location.id)}
          >
            <i className="material-icons">delete</i>
          </button>
        </td> */}
      </tr>
    );
  });

  return (
    <div>
      <Link to="/" className="link">
        Home
      </Link>
      <Table className="tabela">
        <thead>
          <tr className="lista">
            <th>RB</th>
            <th>Naziv</th>
            <th>Opstina</th>
            <th>Mesto</th>
            <th>Ulica</th>
            <th>Kreirao</th>
            <th>Modifikovao</th>
            <th>Datum kreiranja</th>
            <th>Datum modifikovanja</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>{component}</tbody>
      </Table>
    </div>
  );
};
