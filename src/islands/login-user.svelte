<script lang="ts">
  import Logo from '../../public/Logo.png'
  import Security from '../../public/images/password.svg'
  import User from '../../public/images/User.svg'
  import IconGoogle from '../../public/images/logoGoogle.svg'
  import Eye from '../../public/images/eye.svg'

  const states = $state({
    showPassword: false,
  })

  function togglePasswordVisibility() {
    states.showPassword = !states.showPassword
  }
</script>

<div class="w-full md:w-3/5 lg:w-2/5 mt-5 p-4 font-inter inline-block">
  <div class="border rounded-md border-[#e7e8ec] shadow-md">
    <a href="/" class=" items-center justify-center gap-1 mt-2 hidden md:flex">
      <img src={Logo.src} alt="" class="h-6 w-6" />
      <span class="text-[#8B8E99] text-2xl">Lynx</span>
    </a>

    <form class="bg-[#F5F5F7] px-8 pt-6 mb-4">
      <h3 class="mt-2 mb-4 text-[#8B8E99] font-semibold text-2xl text-center md:text-left">
        Login
      </h3>

      <div class="mb-2 relative">
        <label for="username" class="block text-[#8B8E99] text-xs mb-2">Username</label>
        <div class="relative">
          <input
            type="text"
            id="username"
            name="username"
            required
            class="w-full border text-sm rounded-md border-[#E4E7E9] outline-none focus:border-[#2563EB] py-2 px-3 pl-10 placeholder:text-xs md:placeholder:text-base"
            placeholder="Jhon Doe"
          />
          <img
            src={User.src}
            alt=""
            class="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      <div class="mb-2 relative">
        <label for="password" class="block text-[#8B8E99] text-xs mb-2">Password</label>
        <div class="relative">
          <input
            type={states.showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
            class="w-full border rounded-md border-[#E4E7E9] outline-none focus:border-[#2563EB] py-2 px-3 pl-10 placeholder:text-xs md:placeholder:text-base"
            placeholder="Enter your password"
          />
          <img
            src={Security.src}
            alt=""
            class="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2"
          />
          <button
            type="button"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onclick={togglePasswordVisibility}
          >
            {#if states.showPassword}
              <img src={Eye.src} alt="" />
            {:else}
              <svg height="15" width="15" viewBox="0 0 640 512"
                ><path
                  fill="#ababab"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"
                /></svg
              >
            {/if}
          </button>
        </div>
      </div>

      <div class="mb-2 mt-4 flex items-center justify-center font-semibold">
        <a href="/" class="text-[#2563EB] text-sm">Forgot Password?</a>
      </div>

      <div class="mb-2">
        <button
          type="submit"
          class="bg-[#2563EB] text-white py-2 px-4 rounded w-full hover:bg-[#2055c6]"
          >Ingresar</button
        >
      </div>
      <div class="mb-2 mt-4 flex gap-2">
        <p class="text-sm">Already have an account?</p>
        <a href="/Login" class="text-[#2563EB] text-sm font-semibold">Login Now</a>
      </div>
      <div class="relative mt-6 text-center">
        <hr class="text-[#dfdfe1] mt-4" />
        <p
          class="text-gray-dark text-sm absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F5F5F7] w-9 px-2 md:-top-0.7 md:left- md:right-2"
        >
          OR
        </p>
      </div>
      <div class="mt-6">
        <button
          class=" flex justify-center gap-2 items-center bg-[#d5d8e5] rounded-2xl text-sm py-2 px-4 w-full hover:bg-[#c3c5d1]"
        >
          <img src={IconGoogle.src} alt="Icon Google" />
          Continue wtih Google
        </button>
      </div>
    </form>
  </div>
</div>
