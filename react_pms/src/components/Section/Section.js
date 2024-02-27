import sectionCSS from './section.module.css'
import CardPurple from '../CardPurple/CardPurple'


export default function Section (){
    return(
        <div className={sectionCSS.product_container}>
            <h1 className={`${sectionCSS.product_name} ${sectionCSS.text_white}`}>Mern PMS</h1>
            <p className={`${sectionCSS.product_info} ${sectionCSS.text_white}`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            <CardPurple/>
        </div>
    )
}