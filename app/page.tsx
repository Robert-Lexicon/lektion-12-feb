import { fetchRecipe } from "@/actions";
import styles from "./page.module.css";
import { CardList } from "@/components/recipe-cards/cards";

export default async function Home() {
  const { recipes } = await fetchRecipe();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardList recipes={recipes} />
      </main>
    </div>
  );
}
