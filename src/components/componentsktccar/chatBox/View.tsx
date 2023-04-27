import styles from "./styles.module.scss";

type Props = {
  groupes: any[];
  handleClickJoinGroupe: (id: number) => VoidFunction;
};

const View: React.FC<Props> = ({ groupes, handleClickJoinGroupe }) => {
  return (
    <div className={styles.box}>
      {groupes.map((groupe) => (
        <div className={styles.content}>
          <>
            <h3> Nom du groupe: {groupe.groupName}</h3>
            <p>
              Nombre dans le groupe: {groupe.nbUser} / {groupe.capacity}
            </p>
            <div
              className={styles.join}
              onClick={handleClickJoinGroupe(groupe.id)}>
              Rejoindre
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default View;
