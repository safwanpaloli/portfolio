<template>
  <div class="navigation">
    <nav class="navigation-wrapper">
      <div class="flex m-0">
        <div class="flex">
          <a class="items-center">
            <img :src="$colorMode.value === 'light' ? 'images/logo.png' : 'images/logowhite.png'" class="h-32" alt="Logo" />
          </a>
        </div>
        <div class="hidden md:block w-auto m-auto top-0" id="navbar-default">
          <ul class="flex flex-row bg-slate-100/50 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2 font-medium items-center text-md shadow-md border-1 rounded-full px-8 pb-3 space-x-8">
            <li>
              <a href="#" class="block text-red-700 mt-3 border-b border-black">Home</a>
            </li>
            <li>
              <a href="#about" class="block mt-3" :class="activeNav">About</a>
            </li>
            <li>
              <a href="#projects" class="block mt-3" :class="activeNav">Projects</a>
            </li>
            <li>
              <a href="#news" class="block mt-3" :class="activeNav">News</a>
            </li>
            <li>
              <a href="#news" class="block mt-3" :class="activeNav">Download Cv</a>
            </li>
          </ul>
        </div>
        <div class="hidden md:flex items-center space-x-2 mx-8">
         
          <div  @click="useChangeColormode()" class="text-xl text-md shadow-md px-5 py-3 rounded-full cursor-pointer" :class="colorMode.value == 'light' ? 'bg-yellow-300' : 'bg-black'">
            <Icon :name="colorMode.value == 'light' ? 'material-symbols:sunny-outline-rounded' : 'solar:moon-bold'" size="25px" color="white"/>
          </div>
      
        </div>
        <!-- mobile device navigation-->
        <mobile-nav />

        <div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';

const {
  activeNav,
  colorMode,
  useChangeColormode
} = inject('context') as ReturnType<typeof useComposables>
</script> 
<style scoped>
/* Use this if needed for fine-tuning */
input:checked + label > img {
  transform: translateY(-85px);
}

#s1:checked ~ .circle {
  transform: translateX(-100%);
}
#s2:checked ~ .circle {
  transform: translateX(0);
}
#s3:checked ~ .circle {
  transform: translateX(100%);
}

</style>