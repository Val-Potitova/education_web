<script>

export default {
    props: {
        changeAmount: {
            type: Function,
            required: true,
        },
        convert: {
            type: Function,
            required: true,
        },
        favourite: {
            type: Function,
            required: true,
        },

    }
}
</script>

<template>
  <input min="0" type="number" @input="changeAmount($event.target.value)" placeholder="Введите число">
  <div>
    <button @click="convert()">Конвертировать</button>
    <button @click="favourite()">В избранное</button>
  </div>
  
</template>

<style scoped>
input {
    outline: none;
    width: 500px;
    position: relative;
    font-size: 1.2em;
    border-radius: 3px;
    border: 0;
    padding: 10px 15px;
    background: #fafafa;
    color: #333;
}
button {
    position: relative;
    padding: 15px 20px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background: #34065a;
    border-radius: 3px;
    border: 3px solid #000;
    margin: 20px;
}
</style>