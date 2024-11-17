<template>
    <div class="flex items-center justify-center h-screen">
      <a class="relative block w-1/4 bg-gray-900 group" href="#">
        <img class="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
          src="https://cdn.pixabay.com/photo/2021/10/30/08/07/desert-6753729__340.jpg" alt="" />
        <div class="relative p-2">
          <div class="mt-40">
            <div
              class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div class="p-2">
                <p class="text-sm text-white">
                  image hover in text using tailwind css
                </p>
                <button class="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
</template>