import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../redux/user/userAction";
import { Button } from "react-bootstrap";
import UsersTable from "../components/UsersTable";
import EditUserModal from "../components/EditUserModal";
const emptyFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  role: "",
};

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [initialFormData, setInitialFormData] = useState(emptyFormData);

  return (
    <>
      <Button variant="success">Add User</Button>

      <UsersTable
        setShowModal={setShowModal}
        setInitialFormData={setInitialFormData}
      />
      <EditUserModal
        showModal={showModal}
        setShowModal={setShowModal}
        initialFormData={initialFormData}
      />
    </>
  );
};

export default UsersPage;
