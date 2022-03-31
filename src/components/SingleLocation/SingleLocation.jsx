import React from "react";
import "./SingleLocation.css";
import { Link } from "react-router-dom";
import { lokacije } from "../services/lokacije";
import { useParams } from "react-router-dom";
import { Table } from "react-materialize";

export const SingleLocation = (props) => {
    
    let idLocation = useParams();

    let componentId;
    let singleLocationReports = [];
    componentId = lokacije.map((location) => {
      if (parseInt(location.id) === parseInt(idLocation.id)) {
        singleLocationReports.push(location);
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
      </tr>
        );
      }
      return null;
    });

  return (
    <div>
      <Link to="/locations" className="link">
        Vrati se
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
          </tr>
        </thead>
        <tbody>{componentId}</tbody>
      </Table>
    </div>
  );
};
