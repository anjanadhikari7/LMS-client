import { useState } from "react";
import BooksTable from "../components/BooksTable";
import CreateOrEditBookModal from "../components/CreateOrEditBookModal";
import { Button } from "react-bootstrap";

const emptyFormData = {
  thumbnail: "",
  title: "",
  author: "",
  publish_year: "",
  isbn: "",
  description: "",
};
const BooksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [initialFormData, setInitialFormData] = useState(emptyFormData);

  // handle create Books

  const openCreateBookModal = () => {
    setInitialFormData(emptyFormData);
    setShowModal(true);
  };
  return (
    <>
      {/* Button to Launch create book modal */}
      <Button variant="success" onClick={openCreateBookModal}>
        Add Book
      </Button>

      {/* Table to display Books */}
      <BooksTable
        setShowModal={setShowModal}
        setInitialFormData={setInitialFormData}
      />
      {/* Create Books Modal */}
      <CreateOrEditBookModal
        showModal={showModal}
        setShowModal={setShowModal}
        initialFormData={initialFormData}
      />
    </>
  );
};

export default BooksPage;
