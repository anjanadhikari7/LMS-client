import { Button, Stack, Table } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../redux/user/userAction";
import { useEffect } from "react";

const UsersTable = (props) => {
  const { setShowModal, setInitialFormData } = props;
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const openEditUserModal = (user) => {
    const userData = {
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };

    setInitialFormData(userData);
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);
  const handleOnDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteBookAction(userId)); // Dispatch delete action
    }
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index </th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td className="fw-bold">
                {user.first_name}
                {"  "}
                {user.last_name}
              </td>
              <td className="fst-italic">{user.role}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Stack
                  direction="horizontal"
                  gap={2}
                  className="p-2 justify-content-center"
                >
                  <Button
                    variant="outline-light"
                    onClick={() => openEditUserModal(user)}
                  >
                    <BsPencil color="green" />
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => handleOnDelete(user._id)}
                  >
                    <BsTrash color="red" />
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UsersTable;
