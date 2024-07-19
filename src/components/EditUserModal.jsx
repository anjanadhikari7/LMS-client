import { Button, Form, Modal } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import CustomInput from "./CustomInput";
const USER_FORM_FIELDS = [
  {
    label: "First Name",
    name: "first_name",
    type: "text",
  },
  {
    label: "Last Name",
    name: "last_name",
    type: "text",
  },
  {
    label: "Email address",
    name: "email",
    type: "email",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "number",
  },
  {
    label: "Role",
    name: "role",
    type: "text",
  },
];

const EditUserModal = (props) => {
  const { showModal, setShowModal, initialFormData } = props;
  const { formData, handleOnChange } = useForm(initialFormData);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch();
    setShowModal(false);
  };
  console.log(initialFormData);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleOnSubmit}
            className="d-flex flex-column justify-content-between h-100"
          >
            {USER_FORM_FIELDS.map((field, index) => {
              return (
                <CustomInput
                  key={index}
                  label={field.label}
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: field.type,
                    name: field.name,
                    value: formData[field.name],
                  }}
                />
              );
            })}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUserModal;
