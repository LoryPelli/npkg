<script lang="ts">
    import Wrapper from './Wrapper.svelte';
    interface Props {
        lastPage: number;
        query: string;
    }
    const { lastPage, query }: Props = $props();
</script>

<svelte:window
    onkeydown={(e) => {
        if (e.shiftKey && e.key == 'P') {
            e.preventDefault();
            location.hash = '#p_select';
        }
        if (location.hash == '#p_select' && e.key == 'Escape') {
            e.preventDefault();
            location.hash = '#';
        }
    }}
/>

<a href="#p_select">...</a>
<Wrapper hash="p_select" close="center">
    <form action="/search" autocomplete="off">
        <input type="hidden" name="q" value={query} readonly required />
        <input
            class="bg-primary dark:bg-primary_dark rounded-xl border-2 border-black p-3 dark:border-white"
            type="number"
            name="page"
            min="1"
            max={lastPage}
            required
        />
        <button
            type="submit"
            class="bg-primary dark:bg-primary_dark cursor-pointer rounded-xl border-2 border-black p-3 active:bg-gray-300 dark:border-white dark:active:bg-gray-800"
            >Go</button
        >
    </form>
</Wrapper>
