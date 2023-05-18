import styles from "./styles.module.scss";

type Props = {
  messageChat: any
};

const View: React.FC<Props> = ({ messageChat }) => {
  return (
    <div className={styles.contentMessage}>
      <div className={styles.messageBox}>
        {messageChat.message}
      </div>
    </div >
  )
};

export default View;
