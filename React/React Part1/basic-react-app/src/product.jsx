import "./Product.css";
import Price from "./Price";


function Product({ title, idx }) {
    let oldPrices = ["12,000","10,999","1,999","660"]
    let newPrices = ["9,999","8,880","999","350"]
    let Description = [["8,000 DPI", "5 Programmable Buttons"], ["Intuitive surface", "Designed for ipad"], ["Intuitive surface","Designed for ipad"], ["Wireless", "Optical orientation"]]
    return (
    <div className="Product">
        <h4>{title}</h4>
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
    );
}

export default Product;