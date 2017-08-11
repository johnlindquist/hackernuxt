<template>
    <div>
        <Items>
        </Items>
    </div>
</template>

<script>
import Items from "~/components/Items.vue"

export default {
    components: {
        Items
    },
    async fetch({ store }) {
        await store.dispatch("LOAD_ITEMS", "askstories.json")
    }
}
</script>

