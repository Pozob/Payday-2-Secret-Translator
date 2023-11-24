<script>
    import alphabet from '../../assets/alphabet.svg';
    import { appendToSearch, symbolsFlipped } from '../achievementStore';

    export let char;

    let flippClass = $symbolsFlipped ? 'flipped' : '';
</script>

<button class="character {flippClass}" on:click={() => appendToSearch(char)}>
    <svg aria-label={char}>
        <use href={`${alphabet}#${char}`}></use>
    </svg>
    <span>{char}</span>
</button>

<style>
    .character {
        color: white;
        border-radius: 0.25rem;
        margin: 0.25rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1/1;
        height: 8rem;
        font-size: 0.5em;
    }

    .character svg {
        font-size: 0.5em;
        --primary-symbol-color: #9f9f9f;
        stroke: var(--primary-symbol-color);
        fill: var(--primary-symbol-color);
    }
</style>
