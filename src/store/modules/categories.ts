import {Categories} from "@/types";


interface RootState {
    categories: Array<Categories>
}

export default {

    state: {
        categories: [],
    },

    getters:  {
        getAllCategories:( state: RootState):Array<Categories> => state.categories
    },
    mutations: {
        SET_CATEGORIES(state:RootState, categories: Array<Categories>) {
            state.categories = categories;
        }
    },
    actions: {
        fetchCategories(context : any) {
            const token = process.env.VUE_APP_TOKEN;
            const storeId = process.env.VUE_APP_STORE_ID
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
            };

            fetch(`https://app.ecwid.com/api/v3/${storeId}/categories`, options)
                .then(response => response.json())
                .then(response => {
                    context.commit('SET_CATEGORIES', response.items)
                }).catch(err => console.error(err));
        }
    }
}
