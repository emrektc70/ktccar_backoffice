import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";

type Props = {
  groupes: any[];
  handleClickJoinGroupe: (id: number) => VoidFunction;
};

const View: React.FC<Props> = ({ groupes, handleClickJoinGroupe }) => {

  // console.log(groupes[1].isPrivate);
  // faire attention ici isPrivate pas toujoursd reconnue

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
              {
                !groupe.isPrivate ?
                  <Button
                    variant="contained"
                    className={styles.button}
                    onClick={handleClickJoinGroupe(groupe.id)}>
                    Rejoindre
                  </Button>
                  :
                  <Button
                    variant="contained"
                    className={styles.err}
                  >
                    Groupe privé
                  </Button>
              }
              {/*               faire attention ici tout probleme previens de la 
 */}              {/*    <Button
                variant="contained"
                className={styles.button}
                onClick={handleClickJoinGroupe(groupe.id)}>
                Rejoindre
              </Button> */}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default View;
