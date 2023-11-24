<script>
    import Character from './Character.svelte';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<div class="characters-wrapper">
    {#each characters as char}
        <Character {char} />
    {/each}
</div>

<style>
    .characters-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
