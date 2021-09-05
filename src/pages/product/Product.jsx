import React from 'react'
import './product.css'
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {productData} from "../../dummyData"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link>
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="" alt="" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom"></div>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    )
}
