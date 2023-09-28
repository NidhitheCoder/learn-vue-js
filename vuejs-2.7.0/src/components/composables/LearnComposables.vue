<script setup lang="ts">
import { ref } from 'vue';
import { useMouse } from './useMouse';
import { useFetch } from './useFetch';
import { useUpdate } from './useUpdate';

const ballRef = ref();
const { x, y } = useMouse();
const baseURL = 'https://jsonplaceholder.typicode.com/users'
const { data: usersList, isLoading, error } = useFetch(baseURL);
const { isLoading: onUpdateLoading, onMutate } = useUpdate();

const onEditItemClick = (e: Event) => {
    const button = e.target as HTMLButtonElement;
    const firstData = usersList.value.find((user: any) => user.id.toString() === button.id);
    onMutate(baseURL, 'PATCH', firstData.id, '', { ...firstData, name: 'john' })
}

</script>
<template>
    <div v-if="isLoading">Loading</div>
    <div v-if="error">Error</div>
    <div v-if="usersList" class="composable-container">
        <div class="form">

        </div>
        <h1>Composables</h1>
        <div ref="ballRef" class="ball" :style="{ left: `${x}px`, top: `${y}px`, backgroundColor: `#${y}${x}` }"></div>
        <div class="user-container">
            <div class="user" v-for="item in usersList" :key="item.id">
                <p class="id-text">{{ item.id }}</p>
                <p class="name-text">{{ item.name }}</p>
                <p class="phone-text">{{ item.phone }}</p>
                <button :class="['edit-button', onUpdateLoading ? 'disable' : 'active']" :id="item.id"
                    :disabled="onUpdateLoading" @click="onEditItemClick">Edit
                    Item</button>
            </div>
        </div>
    </div>
</template>

<style>
.composable-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.ball {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: var(--x-value);
    top: var(--y-value)
}

.user-container {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: auto;
}

.user {
    width: 100%;
    min-width: 550px;
    height: auto;
    background-color: rgb(68, 68, 66);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.edit-button {
    white-space: nowrap;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 0.5rem;
}

.active {
    background-color: rgb(15, 87, 15);
}

.disable {
    background-color: gray;
}

.id-text {
    width: 2rem;
}

.name-text {
    padding-left: 0.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
}

.phone-text {
    width: 300px;
    white-space: nowrap;
    padding-right: 1rem;
    text-align: right;
}
</style>