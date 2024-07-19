import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import {
  FaBook,
  FaListUl,
  FaRecycle,
  FaUsers,
  FaUser,
  FaFileAlt,
} from "react-icons/fa";

const DashBoard = () => {
  const data = [
    {
      icon: <FaBook style={{ fontSize: "300%" }} />,
      count: 2,
      label: "Books Listed",
    },
    {
      icon: <FaListUl style={{ fontSize: "300%" }} />,
      count: 16,
      label: "Times Book Issued",
    },
    {
      icon: <FaRecycle style={{ fontSize: "300%" }} />,
      count: 3,
      label: "Times Books Returned",
    },
    {
      icon: <FaUsers style={{ fontSize: "300%" }} />,
      count: 6,
      label: "Registered Users",
    },
    {
      icon: <FaUser style={{ fontSize: "300%" }} />,
      count: 2,
      label: "Authors Listed",
    },
    {
      icon: <FaFileAlt style={{ fontSize: "300%" }} />,
      count: 9,
      label: "Listed Categories",
    },
  ];

  return (
    <Container fluid>
      <h1 className="text-center">ADMIN DASHBOARD</h1>
      <Row>
        {data.map((item, index) => (
          <Col key={index} xs="6" sm="4" md="3" lg="2">
            <Card>
              <CardBody>
                {item.icon}
                <CardTitle tag="h5">{item.count}</CardTitle>
                <CardText>{item.label}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashBoard;
