import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import ShowProduct from './ShowProduct';

function SearchProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);

    const resetFormData = () => {
                setName("")
                setPrice("")
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/searchProduct', {
            name,
            price
        }).then(res => {
            // console.log(typeof(res.data.id))
            setProduct(res.data);

            if(typeof(res.data) === 'object'){           
                resetFormData();
                setShow(true);
            }else {
                setShow(false);
                toast("Please Enter Valid Name and Price !")
            }
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }
    return (
        <div>
           <div className="form-container">
                <h2>Search Product</h2>
                <form className="signin-form" onSubmit={handleSubmit}
                method='post'>
                    <div className="form-grid">
                    <div className="form-left">
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        placeholder="Enter Product Name"
                        required
                        />
                    </div>

                    <div className="form-right">
                        <label>Price</label>
                        <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        placeholder="Enter Price"
                        required
                        />
                    </div>
                    </div>
                    <button type="submit">Search Product</button>
                </form>
                <div>
                    {show?<ShowProduct product={product}/>:null}
                </div>
            </div>
        </div>
    )
}

export default SearchProduct
