<script setup lang="ts">
const change = (formValues: any) => {
    console.log(formValues)
}

const formData = {
    fields: ['name', 'id', 'year', 'gender', 'color'],
    onSubmit: change
}
</script>
<template>
    <div v-form="formData">
        <input id="name" type="text">
        <input id="id" type="text">
        <input id="year" type="text">
        <div class="radio-container">
            <input id="gender" name="gender" value="Male" type="radio">
            <label>Male</label>
            <input id="gender" name="gender" checked value="Female" type="radio">
            <label>Female</label>
        </div>
        <select name="color" id="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
        </select>
        <button type="submit">Submit</button>
    </div>
</template>

<style>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 4px;
}

.form>input {
    border-radius: 4px;
    height: 2rem;
    border: none;
}

.radio-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.form>select {
    width: 100%;
    border-radius: 4px;
    border: none;
    height: 2rem;
    outline: none;
}
</style>