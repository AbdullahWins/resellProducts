import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, img }) => {
  return (
    <Card style={{ width: "22rem" }} className="m-4">
      <Card.Img src={img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-light py-2 fs-1 text-center">
          <Link className="text-decoration-none" to={`/category/${category}`}>
            {category}
          </Link>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryCard;
