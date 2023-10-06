import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "18rem",
        paddingTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Card.Img
        variant="top"
        src={props.img}
        style={{
          width: "100%",
          height: 250,
          objectFit: "cover",
        }}
      />
      <Card.Body style={{ width: "100%" }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Button
          style={{ width: "100%" }}
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
