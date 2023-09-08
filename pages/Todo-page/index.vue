

<script setup>
import TaskBox from '@/components/TaskBox.vue';
</script>
<template>
<div>
    <h1>ToDo Arrays</h1>
    <form id="todo">
        <input type="text" placeholder="Title" v-model="title" />
        <input type="text" placeholder="Write Your Todo  !" v-model="todo" />
        <input type="text" placeholder="Your Name" v-model="name" />
        <button type="button" @click="createTask()">Add Task</button>
        <hr />
    </form>
 
    <TaskBox v-for="item in Todolist" :key="item" :id="item.id" :title="item.header" :name="item.Uname" :todo="item.contant" :status="item.status" @del="deletetodo" @upstatus="upstatus" />

</div>
</template>

<script>


export default {
    components: {
       TaskBox 
    },
    name: "TodoPage",
    data() {
        return {
            Todolist: [],
            title: "",
            todo: "",
            name: "",
            id: 0,
            status:"pendding"

        };
    },

    methods: {
        createTask() {
           
            var task = {
                header: this.title,
                contant: this.todo,
                Uname: this.name,
                id: this.id++,
                status:this.status,
            }
            console.log(this.Todolist);
            this.Todolist.push(task);
            this.name = null;
            this.todo = null;
            this.title = null;

        },

   
        deletetodo(id) {
            var i = this.Todolist.findIndex((o) => o.id == id);
            this.Todolist.splice(i, 1);
        },
        upstatus(val) {
           var o=this.Todolist.findIndex((o)=> o.id == val.id)
           this.Todolist[o].status=val.status
        },
        // pandding() {
        //     this.status = "pendding";
        // }
    },

};
</script>

<style>
#todo input {
    width: 33%;
    border: none;
    outline: none;
    font-size: 22px;
    margin: 30px 0px;
    color: black;
}

#todo button {
    border: none;
    outline: none;
    background-color: transparent;
    color: rgb(79, 199, 159);
    padding: 5px;
    font-size: 20px;
    width: 100%;
}

#todo button:hover {
    background-color: rgb(79, 199, 159);
    color: #fff;
    border-radius: 10px;
}

/* task box section star here  */
.gray {
    color: rgb(174, 174, 174);
}

.task h3 {
    display: inline;
    padding: 3px 8px;
    font-weight: 800;
    color: rgb(95, 240, 191);
}

.result {
    background-color: rgb(241 245 249);
    padding: 10px;
    width: 100%;

}

.title span {
    font-size: 30px;
}

#border-line {
    /* background-color: rgb(172, 172, 39); */
    width: 10px;
    padding: 0;
    margin: 0px 5px;
    border-radius: 30px;
}

#action-btn button {
    width: 20%;

    border: none;
}
</style>
