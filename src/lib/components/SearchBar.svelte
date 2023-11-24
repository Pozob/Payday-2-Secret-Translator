<script>
    import { search } from '../achievementStore';
</script>

<input type="text" bind:value={$search} class="form-control" placeholder="Use the Symbols below or type something" />

<style>
    input {
        margin: 0.25rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        width: 25vw;
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: #9f9f9f;
    }
</style>
