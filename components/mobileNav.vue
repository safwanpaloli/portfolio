<template>
        <div class="w-full md:hidden flex justify-end mr-3">
            <button @click="useChangeColormode()" class="flex items-center justify-center">
                <div class="flex items-center justify-center text-xl shadow-md w-12 h-12 rounded-full" :class="colorMode.value == 'light' ? 'bg-yellow-300' : 'bg-blue-300'">
                    <Icon :name="colorMode.value == 'light' ? 'material-symbols:sunny-outline-rounded' : 'material-symbols:dark-mode'" size="25px" color="white"/>
                </div>
            </button>
         </div>
</template>
<script setup lang="ts">

const {
  activeNav,
  colorMode,
  useChangeColormode
} = inject('context') as ReturnType<typeof useComposables>
</script>