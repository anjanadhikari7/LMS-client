import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../redux/book/bookAction";
import { Container, Row } from "react-bootstrap";
import LibraryCarousel from "../components/LibraryCarousel";

const HomePage = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookAction());
  }, [dispatch]);

  return (
    <>
      <div className="m-2">
        <LibraryCarousel />
      </div>

      <Container>
        <Row gap={4}>
          {books.map((book) => (
            <Col key={book._id} className="my-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
