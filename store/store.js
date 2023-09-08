
import axios from 'axios';


export const state={

        todo:[]

    }
export const   getters={
        getData(state){
            return state.todo;
        }

    }
export const mutations={
        delete(state,payload){
            console.log(state)
            axios.delete('http://localhost:4000/todo/' + payload).then(

            )
        }

    }
export const actions={
        async callApi(){
         const x = await axios.get('http://localhost:4000/todo');
            this.state.todo = x.data;
        },
        deleteObj(mutation,payload){
            mutation.commit('delete',payload)

        },
    }
