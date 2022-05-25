<script lang="ts">
    import { goto } from '$app/navigation';

    let form = {
        email: '',
        password: '',
    };

    let validation_err: { email: string; password: string } = {
        email: '',
        password: '',
    };

    let auth_err: string | null = '';

    async function postLogin() {
        try {
            const response = await fetch('/v1/auth/login/local', {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                    group: 'Admin',
                }),
            });

            const json = await response.json();

            if (json.status === 0) {
                goto('/admin', { replaceState: true });
                return;
            }

            if (json.code === 400) {
                validation_err = { email: '', password: '' };

                for (const err of json.error) {
                    //@ts-ignore
                    validation_err[err.param] = err.message;
                }
            }
            if (json.code === 401) {
                validation_err = { email: '', password: '' };
                auth_err = 'Invalid login';
            }
        } catch (err) {
            auth_err = err as string;
        }
    }
</script>

<svelte:head>
    <title>Tutorkami :: Admin Login</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-screen">
    <form method="post" class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 ">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-2">
            Admin Login
        </h2>

        {#if auth_err}
            <span class="text-sm text-red-600 inline-block mb-2"
                >{auth_err}</span
            >
        {/if}

        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
            >

            <input
                type="email"
                id="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                bind:value={form.email}
            />

            <span class="text-xs text-red-600">{validation_err.email}</span>
        </div>

        <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600"
                >Password</label
            >
            <input
                type="password"
                id="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                bind:value={form.password}
            />

            <span class="text-xs text-red-600">{validation_err.password}</span>
        </div>

        <button
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            on:click|preventDefault={postLogin}>Login</button
        >

        <p class="text-xs text-gray-500 mt-3">Tutorkami®</p>
    </form>
</div>
