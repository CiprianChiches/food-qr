export default function productSearch(search, selectGrade, products){
    let res = [...products];
    if(selectGrade != ""){
        res = res.filter(product=>{
            if(selectGrade.toLowerCase() === product.product.nutriscore_grade) return product
        });
    }
    
    
    res = res.filter(productData =>{
        let searchMini = search.toLowerCase();
        let product = productData.product;
        
        if(product.product_name_fr.toLowerCase().indexOf(searchMini) > -1) return productData;
        if(product.brands.toLowerCase().indexOf(searchMini) > -1) return productData;
        if(product.code.toLowerCase().indexOf(searchMini) > -1) return productData;
    })
    return res;
}