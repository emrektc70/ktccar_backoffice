import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";

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
              effectif : {groupe.nbUser} / {groupe.capacity}
            </p>
            <div className={styles.join}>
              <Button
                variant="contained"
                className={styles.button}
                onClick={handleClickJoinGroupe(groupe.id)}>
                Rejoindre
              </Button>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default View;
