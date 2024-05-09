import {Product} from "@/types";

interface RootState {
    products: Array<Product>,
    product: Product
}

export default {

    state: {
        products: [],
        product:{},
    },
    getters: {
        getAllProducts: (state: RootState) => state.products,
        getProduct: (state: RootState) => state.product,
    },
    mutations: {
        SET_PRODUCTS(state: RootState, products: Array<Product>) {
            state.products = products;
        },
        SET_PRODUCT(state: RootState, product: Product) {
            state.product = product;
        },
    },
    actions: {
        fetchProducts(context: any, catId = 0):void {
            const token = process.env.VUE_APP_TOKEN;
            const storeId = process.env.VUE_APP_STORE_ID;
            const url =catId===0? `https://app.ecwid.com/api/v3/${storeId}/products`:`https://app.ecwid.com/api/v3/${storeId}/products?categories=${catId}`
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', Authorization: `Bearer ${token}`}
            };

            fetch(url, options)
                .then(response => response.json())
                .then(response => {
                    context.commit('SET_PRODUCTS', response.items)
                }).catch(err => console.error(err));
        },

        fetchProduct(context: any, productId:number):void {
            const token = process.env.VUE_APP_TOKEN;
            const storeId = process.env.VUE_APP_STORE_ID;
            const url =`https://app.ecwid.com/api/v3/${storeId}/products/${productId}`;
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', Authorization: `Bearer ${token}`}
            };

            fetch(url, options)
                .then(response => response.json())
                .then(response => {
                    context.commit('SET_PRODUCT', response)
                }).catch(err => console.error(err));
        }
    }
}
