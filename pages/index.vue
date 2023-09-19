<script setup>
import PageHeader from '../components/PageHeader.vue';

const { data } = await useAsyncData('reviews', () => {
    return queryContent('/review').sort({
        date_posted: -1
    }).find()
})
</script>

<template>
    <PageHeader />
    <div class="py-24 bg-zinc-950 sm:py-32">
        <div class="px-6 mx-auto max-w-7xl lg:px-8">
            <!-- <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div> -->
            <div class="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="movie in data" :key="movie.title" class="flex flex-col items-start justify-between">
                    <div class="relative w-full">
                        <a :href="movie._path">
                            <img :src="movie.image" alt="" class="object-cover w-full bg-gray-100" />
                        </a>
                        <!-- <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> -->
                    </div>
                    <div class="max-w-xl">
                        <div class="flex items-center mt-8 text-xs gap-x-4">
                            <time :datetime="movie.date_posted" class="text-gray-500">{{ movie.date_posted }}</time>
                            <a :href="movie._path"
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                    movie.title }}</a>
                        </div>
                        <div class="relative group">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a :href="movie._path">
                                    <span class="absolute inset-0" />
                                    {{ movie.title }}
                                </a>
                            </h3>
                            <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{{ movie.description }}</p>
                        </div>
                        <!-- <div class="relative flex items-center mt-8 gap-x-4">
                            <img :src="movie.author.imageUrl" alt="" class="w-10 h-10 bg-gray-100 rounded-full" />
                            <div class="text-sm leading-6">
                                <p class="font-semibold text-gray-900">
                                    <a :href="movie.author.href">
                                        <span class="absolute inset-0" />
                                        {{ movie.author.name }}
                                    </a>
                                </p>
                                <p class="text-gray-600">{{ movie.author.role }}</p>
                            </div>
                        </div> -->
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
