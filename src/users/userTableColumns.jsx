import { Link } from "react-router-dom";

const userTableColumns = [
  {
    dataField: "id",
    text: "User ID",
  },
  {
    dataField: "first_name",
    text: "User Name",
    formatter: (cell, row) => {
      return (
        <div>
          <img
            className="table-profile-pic"
            src={row.avatar}
            alt="profile pic"
          />
          <span className="ml-3">
            <Link to={`/users/${row.id}`}>{`${cell} ${row.last_name}`}</Link>
          </span>
        </div>
      );
    },
  },
  {
    dataField: "email",
    text: "Email",
  },
];

export default userTableColumns;
