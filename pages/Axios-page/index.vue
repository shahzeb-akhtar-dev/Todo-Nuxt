<script setup>
import TaskBox from '@/components/TaskBox.vue';
</script>
    <template>
<div>
    <h1>Axios Arrays</h1>
    <form id="todo">
        <input v-model="title" type="text" placeholder="Title" />
        <input v-model="todo" type="text" placeholder="Write Your Todo  !" />
        <input v-model="name" type="text" placeholder="Your Name" />
        <button type="button" @click="createTask()">Add Task</button>
        <hr />
    </form>

        <TaskBox v-for="item in Todolist" :key="item.id" :id="item.id" :title="item.header" :name="item.Uname"
            :todo="item.contant" :status="item.status" @del="deletetodo" @upstatus="upstatus" />


</div>
</template>


    <script>
import axios from 'axios';
export default {
    components: {
        TaskBox
    },
    name: "TodoPage",
    data() {
        return {

            Todolist: [],
            title: null,
            todo: null,
            name: null,

            status: "pendding"

        };
    },
    mounted() {

        this.readTask()
        // axios.get('http://localhost:4000/todo').then((x) => {
        //     this.Todolist = x.data

        //     // console.log("get requ",this.Todolist,this.Todolist[0].id,x)
        // })

    },
    methods: {
        async createTask() {

            var task = {
                header: this.title,
                contant: this.todo,
                Uname: this.name,

                status: this.status,

            }
            console.log("task",task)
            await axios.post('http://localhost:4000/todo', task)

            this.name = null;
            this.todo = null;
            this.title = null;

        },

        readTask() {
            axios.get('http://localhost:4000/todo').then((x) => {
              console.log(x)

              if(Array.isArray(x.data)){
                this.Todolist = x.data
              }
            }).catch(er=>console.log("readTask error",er))
        },
        deletetodo(id) {

            axios.delete('http://localhost:4000/todo/' + id).then(
                this.readTask()
            )

        },
        upstatus(val) {
            var o = this.Todolist.findIndex((o) => o.id == val.id)
            this.Todolist[o].status = val.status
            console.log()

        }

    },

};
</script>

<style>
</style>
