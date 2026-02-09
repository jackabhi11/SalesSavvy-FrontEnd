
import { NavLink, Outlet } from 'react-router-dom'
import '../style/AdminProductCompo.css'

function ManageProduct() {

    return (
        <div className='manage-product-div'>
            <h1>Manage Product</h1>
            <div className='product-manage-link-div'>
                    <NavLink className='m-link' to='/AdminHome/manageProduct/addProduct'>Add Product</NavLink>
                    <NavLink className='m-link' to='/AdminHome/manageProduct/updateProduct'>Update Product</NavLink>
                    <NavLink className='m-link' to='/AdminHome/manageProduct/searchProduct'>Search Product</NavLink>
                    <NavLink className='m-link' to='/AdminHome/manageProduct/deleteProduct'>Delete Product</NavLink>
                    
            </div>
            <div className='line'></div>
            <div className='admin-product-compo-div'>
                
                <Outlet/>
            </div>
        </div>
    )
}

export default ManageProduct
