<svelte:head>
    <title>Tutorkami</title>
</svelte:head>

<section class="flex flex-col justify-center items-center h-screen">
    <div>
        <h1 class="text-4xl">Welcome to Tutorkami</h1>
    </div>

    <div>
        <a
            class="text-sm hover:underline"
            href="/client/login"
            sveltekit:prefetch>Login</a
        >

        <a
            class="text-sm hover:underline"
            href="/client/register"
            sveltekit:prefetch>Register</a
        >
    </div>
</section>
