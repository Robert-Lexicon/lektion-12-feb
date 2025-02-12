import Image from "next/image";
import styles from "./cards.module.css";
import { Recipe } from "@/interfaces";

//props till komponent
export function CardList({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul className={styles.cards} role="list">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

// interface cardProps {
//   recipe: Recipe
// }
//export function Card(props: cardProps) {
//export function Card(props: {recipe: Recipe}) {
//  const recipe = props.recipe
export function Card({ recipe }: { recipe: Recipe }) {
  return (
    <li className={styles.card}>
      <h2>{recipe.name}</h2>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={recipe.image}
          width={200}
          height={200}
          alt={`Bild ${recipe.name}`}
        />
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instructions, index) => (
          <li key={index}>{instructions}</li>
        ))}
      </ol>
    </li>
  );
}
