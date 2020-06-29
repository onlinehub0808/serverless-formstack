import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Table,
  CardBody,
  Card,
  Button,
} from "reactstrap";

export default function RecordsTable({ toggle, records }) {
  return (
    <Fragment>
      <Card className="card-box mb-5" style={{ margin: 30, padding: 0 }}>
        <div className="card-header pr-2">
          <div className="card-header--title">Vinyl Records</div>
        </div>
        <CardBody>
          <div className="table-responsive-md">
            <Table hover borderless className="text-nowrap mb-0">
              <thead>
                <tr>
                  <th>id</th>
                  <th className="text-left">album</th>
                  <th className="text-center">artist/band</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records && records.map((item, index) => (
                  <tr key={item.recordId}> 
                    <td>{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="text-black-50 d-block">
                          {item.albumName}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="align-items-center">
                        <span className="text-black-50 d-block">
                          {item.artistName}
                        </span>
                      </div>
                    </td>

                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6"
                      ></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
        <div className="card-footer d-flex justify-content-between">
          <Button size="sm"></Button>
          <div>
            <Button size="sm" color="primary" onClick={toggle}>
              Add new entry
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
