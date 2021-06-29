import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import { Container, Spinner } from "reactstrap";

import userTableColumns from "../users-shared/userTableColumns";

import { fetchUsers } from "./redux-state/actionCreators";

import "../users-shared/style.css";

const UsersContainer = () => {
  const dispatch = useDispatch();

  // subscribed to usersReducer
  const { users, isLoading } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    // get users from server
    fetchUsers(dispatch);
  }, [dispatch]);

  return (
    <Container className="mt-4">
      {isLoading && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}

      {!isLoading && (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={users}
          columns={userTableColumns("users-redux")}
        />
      )}
    </Container>
  );
};

export default UsersContainer;
