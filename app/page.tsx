"use client";
import { useBearsStore } from "@/stores/bears-store";

export default function Home() {
  const bears = useBearsStore(state => state.bears);
  const increasePopulation = useBearsStore(state => state.increasePopulation);

  const onBtnClick = () => {
    increasePopulation();
  }
  return (
    <div>
      <p>Bears: {bears}</p>
      <button onClick={onBtnClick}>2</button>
    </div>
  );
}
