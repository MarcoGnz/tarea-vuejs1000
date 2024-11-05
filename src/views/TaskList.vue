<template>
    <div class="container mt-4">
        <h1>Lista de tareas</h1>
        <button @click="fetchTasks" class="btn btn-success mb-3">
            <i class="bi bi-eye me-2"></i><strong>Ver Tareas</strong>
        </button>
        <div v-if="showTasks" class="row">
            <div class="col-12 mb-4" v-for="task in tasks" :key="task.id">
                <div class="task-card">
                    <TodoItem :title="task.todo" :completed="task.completed"
                        @toggle-completion="toggleTaskCompletion(task)"
                        @delTodo="deleteTask(task.id)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import axios from "axios";

export default {
    props: ['tasks'],
    components: { TodoItem },
    data() {
        return {
            showTasks: false,
        };
    },
    methods: {
    
        fetchTasks() {
            axios
                .get("https://dummyjson.com/todos")
                .then((response) => {
                    this.$emit('update:tasks', response.data.todos); 
                    this.showTasks = true; 
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        },

        
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        
        deleteTask(taskId) {
            this.$emit('delete-task', taskId); 
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
}

.task-card {
    background-color: #f1ff70;
    color: #000000; 
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>