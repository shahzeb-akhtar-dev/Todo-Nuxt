<template>


<div class="Task-Wraper d-flex my-3">
    <div class=" result">

        <div class="id gray">
            ID :{{ id  }}
        </div>
        <div class="title">
            <span class="task">
                <h3>Task | </h3>
            </span><span>{{ title  }}</span>
        </div>
        <div class="contant gray" v-if="toggle">
            {{ todo  }}
        </div>
        <div class="status row text-center">
            <span class="col-5">created by : {{ name  }}</span>
            <div class="col-2">|</div>
            <span class="col-5" :class="statusRender.text">Status :{{ status  }} </span>

        </div>
        <div id="action-btn " class="d-flex">
            <button type="button" class=" btn btn-outline-danger" @click="readmore()">More details</button>
            <button type="button" class="btn btn-outline-primary" @click="$emit('upstatus', { id: id, status: 'edit' })">Edit</button>
            <button type="button" class="btn btn-outline-danger" @click="$emit('del', id)">Delete</button>
            <button type="button" class="btn btn-outline-success" @click="$emit('upstatus', { id: id, status: 'done' })">Done</button>
            <button type="button" class="btn  btn-outline-warning" @click="$emit('upstatus', { id: id, status: 'pendding' })">Pandding</button>
        </div>
    </div>
    <div :class="statusRender.bg" id="border-line">

    </div>
</div>
</template>

<script>
export default {

    props: ["id", "title", "todo", "name", "status"],
    data() {
        return {
            toggle: false,

        }
    },
    mounted(){
        // console.log(this.id, this.title, this.todo,this.name,this.status)
    },
    computed: {
        statusRender() {
            if (this.status === "pendding") {
                return {
                    bg: "bg-warning",
                    text: "text-warning"
                };
            } else if (this.status === "edit") {
                return {
                    bg: "bg-primary",
                    text: "text-primary"
                };
            } else if (this.status === "done") {
                return {
                    bg: "bg-success",
                    text: "text-success"
                };
            }
            return false;
        }
    },
    methods: {
        readmore() {
           console.log(this.header)
            // this is teneroy oprator
            var a = this.toggle;
            a == false ? this.toggle = true : this.toggle = false;
        },
    }
}
</script>

<style>

</style>
