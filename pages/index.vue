<template>
    <MainLayout>

        <!-- <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nemo eius odit odio, provident dolorem quasi! Odit rem, eligendi tempore culpa sapiente numquam excepturi debitis ex sint doloremque asperiores delectus?</p> -->
        <div id="indexPage" class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px] overflow-hidden">
                <div id="Posts" class="px-4 max-w-[600px] max-auto">
                    <div class="text-white" v-if="isPosts" v-for="post in posts" :key="post">
                        {{ post }}

                    </div>

                </div>

            </div>

        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useUserStore } from "~~/store/user";
const userStore = useUserStore()
// const user = useSupabaseUser()

let posts= ref([])
let isPosts = ref(true)
let isLoading = ref(false)

onBeforeMount(() =>{

    posts.value = [
        {
            name: 'john weeks Dev',
            image:'https://placehold.co/100',
            text:'This is the title',
            picture:'https://placehold.co/500'
        }
    ]
})

</script>
