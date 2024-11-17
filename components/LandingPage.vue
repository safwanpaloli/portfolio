<template>
  <div class="bg-cover bg-center h-screen dark:bg-black dark:bg-none" style="background: url('images/image7.jpg');  background-repeat: no-repeat;">
    <Nav />
    <div class="landing-page-wrapper flex m-auto">
      <div class="flex flex-col m-auto">
        <div class="text-bold text-3xl md:font-extrabold md:text-4xl xl:text-6xl dark:text-white">I am</div>
        <div class="typed-out font-extrabold text-4xl md:text-7xl xl:text-8xl text-slate-500">SAFWAN</div>
        <div class="font-bold text-xl mt-4 dark:text-white">Full Stack Developer</div>
        <div class="mt-2 flex items-center">
          <a href="https://www.instagram.com/i_am_mern_dev/">
            <Icon icon="skill-icons:instagram" height="24" width="24"/>
          </a> 
          <a href="https://twitter.com/safwan_paloli" class="ml-2">
            <Icon icon="skill-icons:linkedin" height="24" width="24"/>
          </a>
          <a href="https://twitter.com/safwan_paloli" class="ml-2">
            <Icon icon="logos:reddit-icon" height="24" width="24"/>
          </a>
          <a href="https://github.com/safwanpaloli" class="ml-2">
            <Icon icon="logos:github-icon" height="24" width="24"/>
          </a>
      </div>
      </div>
      <div class="lg:flex m-auto">
        <img src="/images/safwan.jpg" alt="landingimage" class="w-96 h-96 object-cover object-center rounded-lg shadow-xl">
      </div>
    </div> 
   <div class="text-center">
       <div class="go_to_next d-flex justify-center w-10 h-10 text-center m-auto animate__animated animate-bounce animate__slow">
        <a href="#about" class="block mt-3"> <Icon icon="bx:bxs-down-arrow-circle" width="42" height="42" /> </a>
       </div>
   </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'

</script>
<style scoped>

.typed-out{
  overflow: hidden;
  /* border-right: .10em solid orange; */
  white-space: nowrap;
  animation: typing 3s steps(25, end) forwards, blinking .8s infinite;
  width: 0;
}
@keyframes typing {
  from { width: 0 } 
  to { width: 100% }
}
@keyframes blinking {
  from { border-color: transparent }
  to { border-color: orange; }
}

</style>