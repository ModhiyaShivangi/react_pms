import cardPurpleCSS from './card_purple.module.css';
import CardInvestment from '../CardInvestment/CardInvestment';

function CardPurple() {
  return (

    <div className={cardPurpleCSS.card_purple}>
      <ul className={cardPurpleCSS.list_investment}>
        <li><CardInvestment company="ABC" industry="XYZ" amount={10000} date="27-02-2024" /></li>
        <li><CardInvestment company="ABC" industry="XYZ" amount={10000} date="27-02-2024" /></li>
        <li><CardInvestment company="ABC" industry="XYZ" amount={10000} date="27-02-2024" /></li>

      </ul>
    </div>
  
  );
}

export default CardPurple;
