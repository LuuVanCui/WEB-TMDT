import Axios from "axios"

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await Axios.get('api/products/' + productId);
    } catch (error) {

    }
}