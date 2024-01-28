import Link from "next/link";
import { useReward } from "react-rewards";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import SetColor from "../../components/setColor";
import styles from "./index.module.scss";

export default function birthdayPage() {
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward("balloonsReward", "balloons");
  const { reward: emojiReward, isAnimating: isEmojiAnimating } = useReward(
    "emojiReward",
    "emoji"
  );

  return (
    <div className={styles.birthdayPage}>
      <h1 className={styles.title}>Auguri</h1>
      <SetColor />
      <button
        className={styles.btn}
        disabled={isConfettiAnimating || isBalloonsAnimating}
        onClick={() => {
          confettiReward();
          balloonsReward();
          emojiReward();
        }}
      >
        <span id="confettiReward" />
        <span id="balloonsReward" elementSize={100} />
        <span id="emojiReward" />
        🎉 Cliccami
      </button>
      <Link href="http://localhost:3000/">
        <FaRegArrowAltCircleLeft /> Homepage
      </Link>
    </div>
  );
}
