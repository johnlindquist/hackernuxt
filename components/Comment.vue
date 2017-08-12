<template>
    <div>
        <div class="bb b--gray pb2 mb4">
            <div class="mb1">
                <span class="i">{{item.id}} </span>
                <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link> {{item.time | timeSince}} ago</div>
            <div class="f6 mb1" v-html="item.text"></div>
            <div class="i f6 gray">
                kids: {{item.kids}}
            </div>
    
        </div>
        <ul class="ml3">
            <comment v-for="id in item.kids" :key="id" :id="id"></comment>
        </ul>
    </div>
</template>

<script>
import axios from "~/plugins/axios"

export default {
    name: 'comment',
    data() {
        return {
            item: {},
            kids: []
        }
    },
    props: [
        'id'
    ],

    async beforeMount() {
        const response = await axios.get(`item/${this.id}.json`)
        this.item = response.data
    },


    async mounted() {
        if (this.item.kids) {
            const idToPromise = id => axios.get(`item/${id}.json`)
            const kidPromises = this.item.kids.map(idToPromise)
            const kidResponses = await Promise.all(kidPromises)
            this.kids = kidResponses.map(res => res.data)
        }
    }
}
</script>

