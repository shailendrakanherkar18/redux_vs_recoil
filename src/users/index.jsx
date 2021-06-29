import { useRecoilValueLoadable } from "recoil";

import BootstrapTable from "react-bootstrap-table-next";
import { Container, Spinner } from "reactstrap";

import userTableColumns from "./userTableColumns";

import { fetchUserDetails } from "./selectors";

import "./style.css";

const UsersContainer = () => {
  const userDetails = useRecoilValueLoadable(fetchUserDetails);

  const { state } = userDetails;

  return (
    <Container className="mt-4">
      {state === "loading" && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}
      {state === "hasValue" && (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={userDetails.contents.data}
          columns={userTableColumns}
        />
      )}
    </Container>
  );
};

export default UsersContainer;
