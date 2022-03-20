import React from "react";
import "./Locations.css";
import { lokacije } from "../services/lokacije";
import { Link } from "react-router-dom";
import { Table } from "react-materialize";
import { useState } from "react";


export const Locations = () => {

  const [show, setShow] = useState(false);
  const handleCloseBubble = () => setShow(false);
  const handleShowBubble = () => setShow(true);
  const [list, updateList] = useState(lokacije);

  const deleteUser = (e) => {
    const name = e.target.getAttribute("id")
     updateList(list.filter(item => item.name !== name));
   };

  let component = lokacije.map((location) => {
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
            <i class="material-icons i">edit</i>
          </Link>
        </td>
        <td>
        <button
            className="btn btn-light "
            type="button"
            onClick={handleShowBubble}
          >
            <i class="material-icons i">delete</i>
          </button>
          <div
            style={{ display: show ? "block" : "none" }}
          >
            <p>Are you sure?</p>
            <div >
              <button
                className="btn btn-light"
                type="button"
                onClick={handleCloseBubble}
              >
                No
              </button>
              <button
              onClick={() => deleteUser(location.id)}
                className="btn btn-light"
              >
                Yes
              </button>
            </div>
          </div>
          
        </td>
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
