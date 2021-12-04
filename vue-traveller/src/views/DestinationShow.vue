<template>
    <section v-if="destination" class="destination">
        <h2>{{destination.name}} </h2>

        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
        </div>

        <p>{{destination.description}} </p>
    </section>
</template>

<script>

// import sourceData from "@/data.json"

export default {
    data() {
        return {
            destination: null   
        }
    },
    computed: {
        destinationId() {
            return parseInt(this.$route.params.id)
        },
    },

    async created () {

        this.initData()   

        this.$watch (() => this.$route.params, this.initData())
    },

    methods: {
        async initData (){
            const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)

            this.destination = await response.json()
        }
    },
}
</script>