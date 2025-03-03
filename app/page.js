import Board from "./components/tabuleiro";
import Styles from "./components/style.module.css";

export default function page() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.titulo}>Tabuleiro de Dama</h1>
      <Board />
    </div>
  );
}
