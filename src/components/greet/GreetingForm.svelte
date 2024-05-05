<script lang="js">
    export let name;
</script>

<div class="container px-8 my-4">
    <form action="/greet" method="POST">
        <div class="my-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">
                What is your name? <span class="text-red-500">*</span>
            </label>

            <input
                type="text"
                id="name"
                name="name"
                class="h-16 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                value={name}
            >

            <div class="my-4">
                <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Say hello
                </button>
            </div>
        </div>
    </form>

    {#if name}
    <p class="text-3xl font-light">Hello <span class="font-bold">{name}</span>!</p>
    {/if}
</div>
