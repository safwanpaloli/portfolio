<template>
    <div class="news-wrapper md:h-screen dark:bg-black">
        <div class="flex flex-col mx-10">   
            <div>
                <span class="inline-block bg-gray-300 p-3 mt-10 text-base font-bold dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2">News</span>
            </div>  
            <div  class="mt-4 text-4xl font-bold dark:text-white">
                <h1>Latest Blogs</h1>
            </div>
        </div> 
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <!--Card 1-->
    <div class="rounded shadow-lg bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2" id="news">
      <!-- <img class="w-full" src="/river.jpg" alt="River"> -->
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Curl</div>
        <p class="text-gray-700 text-base">
          cURL, which stands for client URL, is a command line tool that developers use to transfer data to and from a server. Curl deals with a bunch of Internet Protocols like HTTP, FTP, SMTP, TELNET, SCP, LDAP and so on.  </p>
      </div>
    </div>

    <!-- card 2 -->

    <div class="rounded shadow-lg bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2" id="news">
      <!-- <img class="w-full" src="/river.jpg" alt="River"> -->
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">SSH</div>
        <p class="text-gray-700 text-base">
          SSH, also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network.
        </p>
      </div>
    </div>

    <!-- Card 3 -->

    <div class="rounded shadow-lg bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:border-white dark:border-2" id="news">
      <!-- <img class="w-full" src="/river.jpg" alt="River"> -->
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Startup | Tryhackme</div>
        <p class="text-gray-700 text-base">
          Tryhackme challenge
        </p>
      </div>
    </div>
      <!-- footer -->
      <footer class="hidden md:rounded-lg dark:bg-gray-900 m-4 border-2 bg-white">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span class="block text-sm text-black text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">safwan™</a>. All Rights Reserved.</span>
        </div>
      </footer>
<!-- footer -->
  </div>


</div>
</template>