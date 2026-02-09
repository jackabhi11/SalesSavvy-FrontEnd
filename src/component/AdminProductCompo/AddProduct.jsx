import {useState} from 'react'
import axios from 'axios'
import {toast} from "react-toastify"


function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const resetFormData = () => {
                setName("")
                setPrice("")
                setPhoto("")
                setCategory("")
                setDescription("")
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/addProduct', {
            name,
            price,
            photo,
            category,
            description
        }).then(res => {
           
            if(res.data === "Product added successfully"){            
                toast.success(`Product ${name} is added successfully!`)
                resetFormData();
            }
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }
    return (
             <div className="form-container">
                <form className="signin-form" onSubmit={handleSubmit}
                method='post'>
                    <h2>Add Product</h2>
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

                        <label>Price</label>
                        <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        placeholder="Enter Price"
                        required
                        />

                        <label>Photo Url</label>
                        <input
                        type="text"
                        name="photo"
                        value={photo}
                        onChange={e=>setPhoto(e.target.value)}
                        placeholder="Enter Photo Url"
                        required
                        />
                    </div>

                    <div className="form-right">
                        <label>Category</label>
                        <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={e=>setCategory(e.target.value)}
                        placeholder='Enter Category'
                        required
                        />

                        <label>Description</label>
                        <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        placeholder='Enter Product Description'
                        required
                        />
                    </div>
                    </div>

                    <button type="submit">Add Product</button>
                </form>
            </div>
    )
}
export default AddProduct

