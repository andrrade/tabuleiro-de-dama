import Board from "./components/tabuleiro";
import Styles from "./components/style.module.css";

export default function page() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.titulo}>Tabuleiro de damas</h1>
      <Board />
    </div>
  );
}
