import cardInvestmentCSS from './cardinvestment.module.css'

export default function CardInvestment(props) {


    return (

        <div className={cardInvestmentCSS.container_card_investment}>

            <div className={cardInvestmentCSS.divider} ></div>

            <div className={`${cardInvestmentCSS.container_card_investment_internal} `}>
                <div className={cardInvestmentCSS.investment_header}>
                    <h4>{props.company}</h4>
                    <p className={`${cardInvestmentCSS.small_text} ${cardInvestmentCSS.margin_top_4}`}>{props.industry}</p>
                </div>
                <div className={`${cardInvestmentCSS.investment_info}`} >
                    <p className={`${cardInvestmentCSS.small_text} ${cardInvestmentCSS.display_inline}`} ><i className={`fa-solid fa-dollar-sign ${cardInvestmentCSS.pink_icon}`}></i> <b>{props.amount}</b></p>
                    <p className={`${cardInvestmentCSS.small_text} ${cardInvestmentCSS.display_inline} ${cardInvestmentCSS.margin_start_1rem}`} ><i className={`fa-solid fa-calendar-days ${cardInvestmentCSS.pink_icon}`}></i> {props.date}</p>
                </div>
                <div className={`${cardInvestmentCSS.investment_action}`}>
                    <p className={`${cardInvestmentCSS.small_text}`}>This is none</p>
                </div>
            </div>

        </div>




    )

}