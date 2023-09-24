<template>
    <MainLayout>

        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nemo eius odit odio, provident dolorem quasi! Odit rem, eligendi tempore culpa sapiente numquam excepturi debitis ex sint doloremque asperiores delectus?</p>
        <div id="indexPage" class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px] overflow-hidden">
                <div id="Posts" class="px-4 max-w-[600px] max-auto">
                    <div v-if="isPosts" v-for="post in posts" :key="post">
                        {{ post }}

                    </div>

                </div>

            </div>

        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '../layouts/MainLayout.vue';
// const userStore = useUserStore()

</script>
