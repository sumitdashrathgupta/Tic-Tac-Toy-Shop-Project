import React from "react";
import { useParams } from "react-router-dom";

const ProductID = () => {
    const {ProductID} = useParams()
    console.log(ProductID)
    return (
        <>
            {ProductID}
        </>
    )
}

export default ProductID