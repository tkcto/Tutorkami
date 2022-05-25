<script>
    let formData = {
        email: '',
        password: '',
    };

    function handleForm() {
        fetch('/v1/auth/register/local', {
            method: 'post',
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        }).then(res => console.log(res));
    }
</script>

<svelte:head>
    <title>Tutorkami :: Client Register</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-screen">
    <form method="post" class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 ">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Client Register
        </h2>

        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
            >

            <input
                type="email"
                id="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                bind:value={formData.email}
            />
        </div>

        <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600"
                >Password</label
            >
            <input
                type="password"
                id="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                bind:value={formData.password}
            />
        </div>

        <button
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            on:click|preventDefault={handleForm}>Login</button
        >

        <p class="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
        </p>
    </form>
</div>
