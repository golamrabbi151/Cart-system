import {
    CART_PRODUCT_REQUEST,
    CART_PRODUCT_SUCCESS,
    CART_PRODUCT_FAILED,
    ADD_CART_REQUEST,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    CLEAR_CART
} from "../types"
import { Toastify } from "../../components/toastify"

const initialState = {
    loading: false,
    products: [],
    error: "",
    success: ""
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        // All Cart Products
        case CART_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case CART_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }


        // Product Add To Cart
        case ADD_CART_REQUEST:
            let exists = state.products.find(x => x.id === action.payload.id)

            if (exists) {
                Toastify.Success("One product added into cart")
                return {
                    ...state,
                    products: state.products.map((product) => {
                        if (product.id === action.payload.id) {
                            product.quantity += action.payload.quantity || 1
                            localStorage.setItem('products', JSON.stringify(state.products))
                        }
                        return product
                    }),
                    success: true
                }
            } else {
                let products = []

                if (localStorage.getItem('products')) {
                    products = JSON.parse(localStorage.getItem('products'))
                }

                products.push(action.payload)
                localStorage.setItem('products', JSON.stringify(products))
                Toastify.Success("One product added into cart")

                return {
                    ...state,
                    products: [...state.products, action.payload],
                    success: true,
                    show: true
                }
            }


        // Product remove
        case REMOVE_FROM_CART:
            const items = JSON.parse(localStorage.getItem('products'))
            const filtered = items.filter(item => item.id !== action.payload)
            localStorage.setItem('products', JSON.stringify(filtered))

            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
                success: true
            }

        // Increment Quantity
        case INCREMENT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload) {
                        product.quantity += 1
                        localStorage.setItem('products', JSON.stringify(state.products))
                    }
                    return product
                }),

                success: true
            }

        // Decrement Quantity
        case DECREMENT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload) {
                        product.quantity -= 1
                        localStorage.setItem('products', JSON.stringify(state.products))
                    }
                    return product
                }),
                success: true
            }

        // Clear cart
        case CLEAR_CART:
            localStorage.removeItem('products')

            return {
                ...state,
                products: []
            }


        default:
            return state

    }
}