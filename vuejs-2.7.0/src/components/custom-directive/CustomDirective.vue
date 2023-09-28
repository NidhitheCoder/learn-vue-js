<script setup>
const vFocus = {
    mounted: (el) => el.focus()
}

const vDemo = {
    mounted: (el, data) => {
        try {

            data.value?.forEach((val) => {
                const child = document.createElement('p');
                child.innerText = val
                child.style.border = '1px solid green'
                el.appendChild(child)
            })
            el.style.backgroundColor = "red"
            el.style.padding = "1rem"
            el.text = data.value;
        } catch (error) {
            //sample 
        }
    }
}

const items = ['one', 'two', 'three'];
</script>

<template>
    <h1>Hello</h1>
    <input v-focus />
    <div v-demo="items">1</div>
    <div v-demo="items">2</div>

    <div v-for="item in items" :key="item.id">
        {{ item }}
    </div>
</template>

<style></style>

