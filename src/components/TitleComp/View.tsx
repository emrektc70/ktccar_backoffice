import styles from "./styles.module.scss";
import i from "./assets/i.svg"
type Props = {
  title: string;
  icon?: boolean;
  onClick?: () => void

};

const View: React.FC<Props> = ({ title, icon, onClick }) => {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div className={styles.title}>{title} </div>
        <div className={styles.separator} />
        {
          icon &&
          <div className={styles.icon} onClick={onClick}><img src={i} alt='' width={24} height={24} /></div>
        }
      </div>
    </div>
  )
};

export default View;
