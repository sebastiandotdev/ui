<script lang="ts">
  import Logo from '../../public/Logo.png'
  let isOpenMenuHamburguer = $state(false)
  let isClosingMenu = $state(false)

  const navbar = [
    {
      title: 'Home',
      src: '/',
    },
    {
      title: 'About',
      src: '/about',
    },
    {
      title: 'Contact',
      src: '/contact',
    },
  ]

  const hadnleIsOpenMenuHamburguer = () => {
    if (isOpenMenuHamburguer) {
      isClosingMenu = true
      setTimeout(() => {
        isOpenMenuHamburguer = false
        isClosingMenu = false
      }, 200)
    } else {
      isOpenMenuHamburguer = true
    }
  }
</script>

<!--  Version Tablets - Desktop -->
<nav
  class={'flex relative w-full h-[70px] bg-transparent shadow-md shadow-gray-dark justify-around items-center font-poppins '}
>
  <div class="flex items-center w-2/3 sm:w-20 hover:animate-pulse">
    <a href="/" class={'flex items-center w-full justify-around sm:w-20 gap-1 '}>
      <img src={Logo.src} alt="" class="h-6 w-6 " />
      <span class="text-[#8B8E99] hover:text-[#3858D6]">Lynx</span>
    </a>
  </div>
  <div class="gap-8 hidden sm:flex text-[#8B8E99] font-semibold font-inter">
    {#each navbar as content}
      <a
        href={content.src}
        class=" hover:text-[#3858D6]"
      >
        {content.title}
      </a>
    {/each}
  </div>

  <div class="font-semibold hidden sm:flex gap-2">
    <a href="/login" class="text-[#8B8E99] hover:text-[#3858D6]">Login</a>
    <span class="text-[#8B8E99]">|</span>
    <a href="/register" class="text-[#8B8E99] hover:text-[#3858D6]">Sign Up</a>
  </div>

  <button onclick={hadnleIsOpenMenuHamburguer} class=" flex sm:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: #8B8E99;transform: ;msFilter:;"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  </button>
</nav>

<!-- Version Mobile  -->
{#if isOpenMenuHamburguer}
  <div
    class={`fixed z-10 top-0 left-0 right-0 bottom-0 sm:hidden bg-black bg-opacity-20 bg-blend-darken ${
      isClosingMenu ? 'scale-out-tr' : 'scale-in-tr'
    }`}
  >
    <div
      class=" flex flex-col text-2xl items-center justify-center font-semibold font-inter bg-white bg- w-full h-[100vh]"
    >
      <a href="/" class="flex gap-2 items-center absolute left-2 top-4">
        <img src={Logo.src} alt="" class="h-10 w-10" />
        <span class="text-[#8B8E99] text-lg">Lynx</span>
      </a>
      <button
        onclick={hadnleIsOpenMenuHamburguer}
        class={` p-1 icon icon-tabler icon-tabler-x absolute right-3 top-6 cursor-pointer text-[#8B8E99] ${
          isClosingMenu ? 'rotate-out' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path
            d="M6 6l12 12"
          />
        </svg>
      </button>

      {#each navbar as content}
        <a href={content.src} class=" text-left font-inter m-6 text-[#8B8E99] hover:text-[#3858D6]">
          {content.title}
        </a>
      {/each}
      <div class="font-semibold sm:flex gap-2 m-6">
        <a href="/login" class="text-[#8B8E99] hover:text-[#3858D6]">Login</a>
        <span class="text-[#8B8E99]">|</span>
        <a href="/register" class="text-[#8B8E99] hover:text-[#3858D6]">Sign Up</a>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Animation Entrance Menu */
  .scale-in-tr {
    -webkit-animation: scale-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .scale-out-tr {
    -webkit-animation: scale-out-tr 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-out-tr 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes scale-in-tr {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
  @keyframes scale-in-tr {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  /* Animation Exit Menu  */
  .scale-out-tr {
    -webkit-animation: scale-out-tr 0.9s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
	        animation: scale-out-tr 0.9s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
  }
  
  @-webkit-keyframes scale-out-tr {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(2);
            transform: scaleY(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
}
@keyframes scale-out-tr {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(2);
            transform: scaleY(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
}


  .rotate-out {
    -webkit-animation: rotate-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: rotate-out 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes rotate-out {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(90deg);
      transform: rotate(290deg);
    }
  }

  @keyframes rotate-out {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(90deg);
      transform: rotate(290deg);
    }
  }
</style>
