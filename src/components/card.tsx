import './card.css'

interface CardProps{

    price: number,
    title: string,
    description: string,
    image: string

}

export function Card({price, title, description, image} : CardProps){
    return(
        <>
        <div className="card">
         <img src={image}/>
         <h2>{title}</h2>
         <p>{description}</p>
         <p><b>Valor:</b>{price}</p>

        </div>
        </>
    )
}