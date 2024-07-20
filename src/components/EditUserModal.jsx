import React from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import CustomInput from "./CustomInput";
import { updateUserAction } from "../redux/user/userAction";

const USER_FORM_FIELDS = [
  { label: "First Name", name: "first_name", type: "text" },
  { label: "Last Name", name: "last_name", type: "text" },
  { label: "Email address", name: "email", type: "email" },
  { label: "Phone Number", name: "phone", type: "number" },
];

const ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "student", label: "Student" },
];

const EditUserModal = (props) => {
  const { showModal, setShowModal, initialFormData } = props;
  const { formData, handleOnChange } = useForm(initialFormData);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(formData));
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          {USER_FORM_FIELDS.map((field, index) => (
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
          ))}

          {/* Role Toggle */}
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <div>
              {ROLE_OPTIONS.map((option) => (
                <Form.Check
                  key={option.value}
                  type="radio"
                  id={`role-${option.value}`}
                  name="role"
                  value={option.value}
                  label={option.label}
                  checked={formData.role === option.value}
                  onChange={handleOnChange}
                />
              ))}
            </div>
          </Form.Group>

          <Stack direction="horizontal" gap={1} className="p-2 mt-3">
            <Button variant="outline-success" className="me-auto" type="submit">
              Update
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
