import styles from "./styles.module.scss";

type Props = {
  groupes: any[];
};

const View: React.FC<Props> = ({ groupes }) => {
  return (
    <div className={styles.box}>
      {groupes.map((groupe) => (
        <div className={styles.content}>
          <>
            <h3> Nom du groupe: {groupe.groupName}</h3>
            <p>
              Nombre dans le groupe: {groupe.nbUser} / {groupe.capacity}
            </p>
            <div className={styles.join}>Rejoindre</div>
          </>
        </div>
      ))}
    </div>
  );
};

export default View;
