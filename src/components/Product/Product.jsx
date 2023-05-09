import styled from "styled-components"
import Nutriscore from "./../Nutriscore/Nutriscore"
import "./Product.css"
import { Button, Badge } from "react-bootstrap"

const ImgProduct = styled.img `
width:100%;
height:200px;
object-fit: scale-down;
transform: scale(0.8);
transition: all ease-in-out 0.5s;
overflow:hidden;
cursor:pointer;

&:hover{
    transform: scale(1.5);
}
`

export default function Product({product, deleteProduct}){
    return(
        <article className="col-md-4 mt-5">
            <div className="card" >
                <Badge pill bg="success" className="nutriscore-badge">{product.product.nutriscore_score}</Badge>
                <h5 className="card-header"><i className="bi bi-upc"></i> <em>({product.code})</em></h5>
                <div className="overflow">
                    <ImgProduct src={product.product.image_front_url} className="card-img-top" />
                </div>
                <div className="card-body overflow">
                    <h5 className="card-title">{product.product.product_name_fr}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.product.brands}</h6>
                    <Nutriscore grade={product.product.nutriscore_grade} />
                    <Button className="btn btn-danger btn-suppr-card" onClick={()=>deleteProduct(product)}>
                        <i className="bi bi-x-circle-fill me-2"></i>
                        ȘTERGE
                    </Button>
                </div>
            </div>
        </article>

    )
}