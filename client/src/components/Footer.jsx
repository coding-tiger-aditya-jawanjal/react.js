import { useShop } from "../Context";
import Styles from "../styles/footer.module.css";

const Footer = () => {
  const { name } = useShop();

  return (
    <footer className={Styles.footer}>
      <p className={Styles.p}>
        All the rights are reserved &copy; copyright - 2024 Mindstay Technology.
        {name}
      </p>
    </footer>
  );
};

export default Footer;
