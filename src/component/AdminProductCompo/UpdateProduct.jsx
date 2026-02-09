import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import ShowProduct from './ShowProduct';

function UpdateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);
    const [newProperty, setNewProperty] = useState('');
    const [updateKey, setUpdateKey] = useState('');
    const [id, setId] = useState(-1);

    const resetFormData = () => {
                setName("")
                setPrice("")
    }


    const handleSearch = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/searchProduct', {
            name,
            price
        }).then(res => {
            setProduct(res.data);

            if(typeof(res.data) === 'object'){           
                resetFormData();
                setShow(true);
                setId(res.data.id);
                console.log(id)
            }else {
                setShow(false);
                toast("Please Enter Valid Name and Price !")
            }
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:8080/updateProduct', {
            id,
            updateKey,
            newProperty
        }).then(res => {
            
            console.log(res.data);
            console.log(id);
            
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }
    return (
        <div>
           <div className="form-container">
                <h2>Update Product</h2>
                <form className="signin-form"
                method='post'>
                    {show?null:<div className="form-grid">
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
                    }

                    <div>
                    {show?<ShowProduct product={product}/>:null}
                    </div>
                    {show?          <div className='updateOption'>
                       <label>
                        <input
                          type='radio'
                          name='update'
                          value='updateName'
                          onChange={(e) => setUpdateKey(e.target.value)}
                        />
                        Update Name
                       </label>
                       <label>
                        <input
                          type='radio'
                          name='update'
                          value='updateCategory'
                          onChange={(e) => setUpdateKey(e.target.value)}
                        />
                        Update Category
                       </label>
                       <label>
                        <input
                          type='radio'
                          name='update'
                          value='updatePrice'
                          onChange={(e) => setUpdateKey(e.target.value)}
                        />
                        Update Price
                       </label>
                       <label>
                        <input
                          type='radio'
                          name='update'
                          value='updateDescription'
                          onChange={(e) => setUpdateKey(e.target.value)}
                        />
                        Update Description
                       </label>
                       <label>
                        <input
                          type='radio'
                          name='update'
                          value='updatePhoto'
                          onChange={(e) => setUpdateKey(e.target.value)}
                        />
                        Update Photo
                       </label>
                       <input 
                       placeholder='Enter Updated Properties'
                       type='text'
                       name='newProperty'
                       value={newProperty}
                       onChange={(e) => setNewProperty(e.target.value)}
                       />
                    </div> :null}
                    {show? <button onClick={handleUpdate}>Update Product</button>:<button onClick={handleSearch}>Search Product</button>}
                </form>
            
            </div>
        </div>
    )
}

export default UpdateProduct
