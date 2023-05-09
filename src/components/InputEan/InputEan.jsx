import { useState } from 'react'
import { Button } from 'react-bootstrap'
import getProduct  from './../../utils/ApiHook'
import productExist  from './../../utils/ProductExist'
import ModalCamera from '../../components/ModalCamera/ModalCamera';

export default function InputEan({products, setProducts, scan, show, closeModal}){
    const  [ean, setEan] = useState("");
    
    async function addProduct(optEan){
        const datas = (typeof optEan === "object")
            ? await getProduct(ean.trim())
            : await getProduct(optEan.trim())
       
        if(datas.data.status === 0){
            alert("Produsul nu a fost găsit");
            return false;
        }
        
        const product = datas.data;

        if(productExist(product, products)){
            alert("Produs deja existent");
            return false;
        }

        let tmpProducts = [...products];
        tmpProducts.push(product);
        setProducts(tmpProducts);
        setEan("");
    }

    return (
        <div>
            <ModalCamera 
                show={show} 
                closeModal={closeModal} 
                setEan={setEan} 
                addProduct={addProduct} 
            />
            <div className="input-group mb-3">
                <Button variant="primary" onClick={scan}>
                    <i className="bi bi-upc-scan"></i>
                </Button>
                <input type="text" value={ean} onChange={e=>setEan(e.target.value)} className="form-control" placeholder="Introduceți un EAN" />
                <button onClick={addProduct} className="btn btn-outline-info" type="button"><i className="bi bi-plus-circle-fill"></i></button>
            </div>
        </div>
    )
}