
import { Route, Routes, Navigate} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import AdminHome from './component/AdminHome'
import CustomerHome from './component/CustomerHome'
import WelcomeHome from './component/WelcomeHome'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import ManageProduct from './component/ManageProduct'
import ManageUser from './component/ManageUser'
import AdminHomeInfo from './component/AdminHomeInfo'
import AddProduct from './component/AdminProductCompo/AddProduct'
import DeleteProduct from './component/AdminProductCompo/DeleteProduct'
import SearchProduct from './component/AdminProductCompo/SearchProduct'
import UpdateProduct from './component/AdminProductCompo/UpdateProduct'
import ProductHome from './component/Customer/ProductHome'
import About from './component/Customer/About'
import Products from './component/Customer/Products'


function App() {
     

  return (
    <>
      <div className='parent'>
          <Routes>
             <Route path='/' element={<Home/>}>
                    <Route path='welcomeHome' element = {<WelcomeHome/>}/>
                    <Route path='signIn' element = {<SignIn/>}/>
                    <Route path='signUp' element = {<SignUp/>}/>
                    <Route path='/' element = {<Navigate to='/welcomeHome'/>}/>         
             </Route>
             <Route path='/AdminHome' element={<AdminHome/>}>
                    <Route path='adminHomeInfo' element={<AdminHomeInfo/>}/>
                    <Route path='/AdminHome/manageProduct' element={<ManageProduct/>}>
                       <Route path='/AdminHome/manageProduct/addProduct' element={<AddProduct/>}/>
                       <Route path='/AdminHome/manageProduct/deleteProduct' element={<DeleteProduct/>}/>
                       <Route path='/AdminHome/manageProduct/updateProduct' element={<UpdateProduct/>}/>
                       <Route path='/AdminHome/manageProduct/searchProduct' element={<SearchProduct/>}/>
                       <Route path='/AdminHome/manageProduct' element={<Navigate to= '/AdminHome/manageProduct/addProduct'/>}/>
                    </Route>
                    <Route path='/AdminHome/manageUser' element={<ManageUser/>}/>
                    <Route path='/AdminHome' element = {<Navigate to='/AdminHome/adminHomeInfo'/>}/>
             </Route>
             <Route path='/CustomerHome' element={<CustomerHome/>}>
                    <Route path='/CustomerHome/Products' element={<Products/>}/>
                    <Route path='/CustomerHome/About' element={<About/>}/>
                    <Route path='/CustomerHome/Home' element={<ProductHome/>}/>
                    <Route path='/CustomerHome' element={<Navigate to='/CustomerHome/Home'/>}/>
             </Route>
          </Routes>
      </div>
    </>
  )
}

export default App
