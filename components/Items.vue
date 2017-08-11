<template>
    <div class="code">
        <ul class="list pa2">
            <li class="item" v-for="item in items" :key="item.id">
                <div class="score f4">
                    {{item.score}}
                </div>
                <div class="title">
                    {{item.title}}
                </div>
                <div class="details">
                    by {{item.by}}
                    <!-- Adding a bit of extra styling -->
                    <p class="ma0 i f6">{{item.time | timeSince}} ago</p>
                </div>
                <div class="comments">
                    {{item.descendants}} comments
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    computed: mapState([
        "items"
    ])
}
</script>
<style scoped>
.item {
    display: grid;
    grid: repeat(4, 1.5em) / repeat(10, 1fr);
    grid-row-gap: 1em;
    grid-column-gap: 1em;
}

.score {
    grid-row: 1 / -1;
    grid-column: span 1;
    align-self: center;
    justify-self: center;
}

.title {
    grid-row: 1 / 3;
    grid-column: 2 / -2;
    align-self: end;
}


.comments {
    grid-row: 3 / -1;
    grid-column: 2 / 6;
    align-self: center;
}

.details {
    grid-row: 3 / -1;
    grid-column: 6 / -2;
    justify-self: end;
    align-self: center;
}
</style>