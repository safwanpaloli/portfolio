<template>
  <div class="project-wrapper bg-gray-100/25 h-screen dark:bg-black" id="projects">
    <div class="flex flex-col mx-10">   
            <div>
                <span class="inline-block p-3 mt-4 text-base font-bold bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2">Projects</span>
            </div>  
            <!-- <div  class="mt-4 text-4xl font-bold dark:text-gray-400">
                <h1 >Projects</h1>
            </div> -->
    </div> 
    <div class="px-10 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">

     <div class="xl:relative max-w-sm transition-all duration-300 cursor-pointer"  v-for="project in projects" :key="project.id">
        <div
            class="overflow-hidden aspect-video bg-slate-300 cursor-pointer relative group mt-2  rounded-xl shadow-md">
            <div class="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                    <div class="p-4 space-y-3 text-xl group-hover:opacity-900 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div class="font-bold text-black">{{ project.title }}</div>

                        <div class="opacity-60 text-sm text-text-900">{{ project.description }}</div>
                    </div>
                </div>
            </div>
            <img
                :alt="project.title"
                class="w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                :class="project.image_class"
                :src="project.image"
            />
        </div> 
    </div>
  </div>
  </div>
</template>
<script setup>

const show= ref(false)

const projects = reactive([
    {
        id:1,
        title: 'Focus India',
        image: '/public/images/project_images/focus_india.png',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.',
        link: "https://focusindia.org/",
        image_class: '!bg-cover !bg-center'
    },
    {
        id:2,
        title: 'British county ooty',
        image: '/public/images/project_images/britishcountyooty.png',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.',
        link: "https://britishcountyooty.com/bco/"
    },
    {
        id:3,
        title: 'Parsons',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.'
    },
    {
        id:4,
        title: 'Stree',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.'
    },
    {
        id:5,
        title: 'Netflix clone',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.'
    },
    {
        id:6,
        title: 'Climate Companion',
        description: 'Governing its activities from Calicut, focus INDIA aims to spread the educational, social and financial self sufficiency of Kerala to other parts of the country, especially to the very backward north-eastern parts of India, by providing food, clothes and education and fulfilling their basic needs.'
    },
    
])
</script>