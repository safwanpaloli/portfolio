<template>
  <div class="bg-white h-screen" id="about">
    <!-- Hero Section --> 
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6  max-w-7xl p-8 md:p-12 md:mt-0">
            <div class="lg:max-h-[600px]">
              <img src="/images/safwan.jpg" alt="profile" class="shadow-2xl md:w-96 m-auto w-full h-48 md:h-3/5">
              <p class="font-bold">My journey taught me that setbacks are not the end—they are just part of the process. Stay committed, stay curious, and never stop believing in your ability to grow.</p>
            </div>
            <div class="grid grid-rows-2 gap-6">
              <div>
                <h3 class="bg-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2 p-4 mb-6 font-bold inline-block shadow-md">About me</h3>
                <h1 class="text-4xl font-bold dark:text-gray-400" style="font-family: skyrocket">Code Meets Creativity: My Developer Journey</h1>
                <p class="mt-6 text-gray-600">I wasn’t the strongest student in high school, which led me to pursue humanities after school. But deep inside, I always knew I was meant for something more. After completing my Plus Two, I decided to shift my focus and took on a 3-year diploma in Computer Engineering. It was a challenging transition, but I embraced the learning curve.
After college, I found myself at a crossroads, unsure of the path ahead. Out of necessity, I took up a job unrelated to my passion, just to make ends meet.<span class="ml-3 text-gray-600">But</span> I never let go of my dream. I decided to take control of my future, enrolling in a course to master the MERN stack.
With renewed energy and a clear goal in mind, I returned to my hometown and began searching for a job in software development. It wasn’t easy—I faced rejections from several companies. But I refused to give up. I kept honing my skills, learning from each experience. And finally, after persistent effort and determination, I landed my dream job as a <span class="text-slate-700 font-semibold">Software developer</span>.</p>
                <!-- <div class="flex mt-4 space-x-4">
                  <h1 class="text-md font-bold cursor-pointer dark:text-gray-400" :class="options === 'skills' ?  'border-b border-spacing-6 border-red-500' : ''" @click="options = 'skills'">Skills</h1>
                  <h1 class="text-base font-bold cursor-pointer dark:text-gray-400" :class="options === 'education' ?  'border-b border-spacing-6 border-red-500' : ''" @click="options= 'education'">Education</h1>
                </div>
                <div class="flex mt-4 space-x-4 md:space-x-8 dark:text-gray-400" v-if="options == 'skills'">
                  <div>
                    <h1>Nuxt</h1>
                    <h1>Expressjs</h1>
                    <h1>Mongodb</h1>
                  </div>
                  <div>
                    <h1>HTML5</h1>
                    <h1>CSS</h1>
                    <h1>Tailwind</h1>
                  </div>
                </div>
                <div class="dark:text-white mt-3" v-else-if="options == 'education'">
                  <h1>Diploma in Computer Engineering</h1>
                </div> -->
              </div>
              <!-- <div class="w-full" v-if="!isShow">
                <button class="transition ease-in-out delay-100 hover:scale-100 duration-300 bg-black  dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2  p-3 w-full md:w-1/2 text-white rounded-md shadow-md md:hover:bg-white md:hover:text-black hover:border-2 hover:border-black">
                  Download CV
                </button>
              </div> -->
            </div>
          </div>
  </div>
</template>

<script setup>
const options = ref('skills');
const isShow = ref(false)
</script>