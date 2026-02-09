import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import ShowProduct from './ShowProduct';

function DeleteProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(-1);
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);

    const resetFormData = () => {
                setName("")
                setPrice("")
    }


    const handleSearchClick = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/searchProduct', {
            name,
            price
        }).then(res => {
            console.log(typeof(res.data.id))
            setProduct(res.data);

            if(typeof(res.data) === 'object'){           
                resetFormData();
                setId(res.data.id)
                setShow(true);
            }else {
                setShow(false);
                toast("Please Enter Valid Name and Price !")
            }
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }

    const handleDeleteClick = (e) => {
        e.preventDefault()
        console.log(id)
        setShow(false)
        axios
        .post('http://localhost:8080/deleteProduct',{
          id,
          name
        }).then(res=> {
           console.log(res.data)
              toast.success("Product is successfully removed !")
              resetFormData()
           
        }).catch(()=>toast("here Is An Server issue. Please Try Again After Some Time..."))
    }

    return (
        <div>
           <div className="form-container">
                <h2>Delete Product</h2>
                <form className="signin-form"
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
                    <div>
                    {show?<ShowProduct product={product}/>:null}
                    </div>
                    {!show?<button type="submit" onClick={handleSearchClick}>Search Product</button>:<button type="submit" onClick={handleDeleteClick}>Delete Product</button>}
                </form>
            </div>
        </div>
    )
}

export default DeleteProduct
