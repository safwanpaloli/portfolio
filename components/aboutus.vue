<template>
  <div class="bg-white h-screen dark:bg-black" id="about">
    <!-- Hero Section --> 
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6  max-w-7xl p-8 md:p-12 md:mt-0">
            <div class="lg:max-h-[600px]">
              <img src="/images/safwan.jpg" alt="profile" class="shadow-2xl md:w-96 m-auto w-96 h-56 md:h-3/5">
              <!-- <p class="font-bold">My journey taught me that setbacks are not the end—they are just part of the process. Stay committed, stay curious, and never stop believing in your ability to grow.</p> -->
            </div>
            <div class="grid grid-rows-2 gap-6 h-screen">
              <div>
                <h3 class="bg-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2 p-4 mb-6 font-bold inline-block shadow-md">About me</h3>
                <h1 class="text-4xl font-bold dark:text-gray-400" style="font-family: skyrocket">Code Meets Creativity: My Developer Journey</h1>
                <p class="mt-6 text-gray-600">I wasn’t the strongest student in high school, which led me to pursue humanities after school. But deep inside, I always knew I was meant for something more. After completing my Plus Two, I decided to shift my focus and took on a 3-year diploma in Computer Engineering. It was a challenging transition, but I embraced the learning curve.
After college, I found myself at a crossroads, unsure of the path ahead. Out of necessity, I took up a job unrelated to my passion, just to make ends meet.<span class="ml-3 text-gray-600">But</span> I never let go of my dream. I decided to take control of my future, enrolling in a course to master the MERN stack.
With renewed energy and a clear goal in mind, I returned to my hometown and began searching for a job in software development. It wasn’t easy—I faced rejections from several companies. But I refused to give up. I kept honing my skills, learning from each experience. And finally, after persistent effort and determination, I landed my dream job as a <span class="text-slate-700 font-semibold">Software developer</span>.</p> 
              </div>        
            </div>
          </div>
  </div>
</template>

<script setup>
const options = ref('skills');
const isShow = ref(false)
</script>