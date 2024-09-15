import { useContext } from "react"
import { currencyFormatter } from "../util/formatting"
import Button from "./UI/Button";
import CortContext from "../store/CartContext";

export default function MealItem({ meal }) {
    const cartCtx = useContext(CortContext);

    function handleAddItemToCart() {
        cartCtx.addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-descriptopn">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddItemToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}