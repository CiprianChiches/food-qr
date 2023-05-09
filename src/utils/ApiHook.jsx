import axios from "axios";

export default function getProduct(ean){
    return new Promise((resolve,reject)=>{
        if(ean === undefined) reject("No EAN provided");
        axios.get(`https://fr.openfoodfacts.org/api/v0/product/${ean}.json`)
        .then(datas=>resolve(datas));
    })
}