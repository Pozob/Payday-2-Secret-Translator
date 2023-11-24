<script>
    import { toggleReverseSearch, searchReversed } from '../achievementStore';

    let text = $searchReversed ? 'Reverse Search' : 'Normal Search';
</script>

<button class="btn btn-primary reverse-btn" on:click={toggleReverseSearch}>{text}</button>
