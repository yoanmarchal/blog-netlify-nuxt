<template>
  <nav class="px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <svg class="h-6 mr-3 sm:h-9" viewBox="0 0 1920 730">
          <g class="lines" fill="none" fill-rule="evenodd" stroke="#fff" style="
              stroke-width: 10px;
          ">
            <path d="M287.057 729.986L2 730.279 292 2.667l251.327.946-256.27 726.373z"></path>
            <path d="M803.522 729.983H511.923L292 2.667l251.327.946 260.195 726.37z"></path>
            <path d="M803.522 729.983H511.923L812 2.667l247.232.946-255.71 726.37z"></path>
            <path d="M1646.942 3.064L1922 2l-286.254 729.187-246.457-1.55L1646.942 3.064z"></path>
            <path
              d="M1339.956 730.279l-311.92-1.243L812 2.667h253.422l274.534 727.612zM1212.38 3.41l290.7-.28 65.134 227.02-137.945 387.697L1212.38 3.41z">
            </path>
          </g>
        </svg>
      </NuxtLink>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <NuxtLink
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
