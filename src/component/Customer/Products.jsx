import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchCategories, fetchProduct } from '../../databaseCall/productData'
import { setCategoryList } from '../../Redux/features/categoriesSlice';
import { setProduct } from '../../Redux/features/productSlice';
import {useSelector, useDispatch} from 'react-redux';

function Products() {
    const [categoryType, setCategoryType] = useState('All');
    const {categoryList} = useSelector(store => store.category)
    const {productList} = useSelector(store => store.product)

    const dispatch = useDispatch();

    useEffect(function(){
            const getCategory = async () => {
            const resp = await fetchCategories();
            dispatch(setCategoryList(resp))
            }
            getCategory();
    },[dispatch])

    useEffect(function() {
            const getProduct = async () => {
            const resp = await fetchProduct();
            console.log(resp)
            let list;
            if(categoryType === "All") {
               list = resp;
            } else {
               list = resp.filter(ele => ele.category === categoryType) 
            }
            console.log(list);
            dispatch(setProduct(list));  
            }
            getProduct();
    },[categoryType, dispatch])

    function handleClick(type) {
        setCategoryType(type);
        console.log(categoryType);
    }

    return (
        <div className='product_main_div'>
            <div className='product_btn_div'>
                <button onClick={()=>handleClick("All")}>All</button>
                {
                  categoryList.map((category,indx)=> <button onClick={()=>handleClick(category)} key={indx}>{category}</button>)
                  
                }
            </div>
            <div className='productcard_div'>
                {
                  productList.map((product)=><ProductCard product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products
