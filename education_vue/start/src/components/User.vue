<template>
    <div className="user">
        <div>
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }} - {{ user.pass }}</p>
        </div>
        <button @click="deleteUser(index)">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        deleteUser: {
            type: Function,
            required: true
        }
    }
}

</script>

<style scoped>
.user {
    display: flex;
}
button {
    display: block;
    max-width: 100px;
    max-height: 40px;
    padding: 5px 10px;
    margin: 25px auto;
    background-color: aquamarine;
}
button:hover {
    background-color: aqua;
}
</style>