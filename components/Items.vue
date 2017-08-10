<template>
    <div class="code">
        <ul class="list pa2">
            <li v-for="item in items" :key="item.id">
                {{item.title}}
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