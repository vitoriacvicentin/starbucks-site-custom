import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image1 from "@assets/image1.png";
import image2 from "@assets/image2.png";
import image3 from "@assets/image3.png";
import styles from "./Carousel.module.css";
export default function example() {
  return (
    <AwesomeSlider className={styles.aws} mobileTouch={true}>
      <div data-src={image1} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AwesomeSlider>
  );
}
