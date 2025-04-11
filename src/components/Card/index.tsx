import Styles from "./Card.module.css";
import Typography from "../Typography";

type CardProps = {
  title: string;
  price: number;
  image: string;
};

const Card = ({ title, price, image }: CardProps) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.imageContainer}>
        <img src={image} alt={title} className={Styles.cardImage} />
      </div>
      <div className={Styles.cardContent}>
        <div className={Styles.cardContentInner}>
          <Typography variant="h6">{title}</Typography>
          <Typography variantStyle="heading-semi-bold">
            {price.toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
