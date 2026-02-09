import axios from 'axios'
import { toast } from 'react-toastify';

export async function fetchProduct() {
        const resp = await axios.post("http://localhost:8080/getAllProducts")
                    .catch(err=>toast("There is an server issue in fetching the products."))
        return resp.data;
}

export async function fetchCategories() {
        let resp = await axios.post("http://localhost:8080/getAllCategories")
                    .catch(err=>toast("There is an server issue in fetching the categories."))
        return resp.data;    
}                    