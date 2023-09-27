<script setup>
const headerTitle = " Title of the header";
const contents = "There are some content for the content section";
const defaultSlotValue = {
    name: "default slots",
    value: "some values are default "
};
</script>
<template>
    <div class="container">
        <div class="header">
            <slot name="header" :title="headerTitle"></slot>
        </div>
        <div class="content">
            <slot name="content" :content="contents"></slot>
        </div>
        <div class="default">
            <slot :content="defaultSlotValue"></slot>
        </div>
    </div>
</template>
<style>
.container {
    background: gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container>div {
    display: grid;
    place-items: center;
    padding: 0.5rem;
    width: 100%;
    flex: 1;
}

.header {
    background-color: cyan;
    color: black;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.content {
    background-color: rgb(245, 112, 64);
    color: bisque;
}

.default {
    background-color: blue;
    border-radius: 0px 0px 5px 5px;
}
</style>