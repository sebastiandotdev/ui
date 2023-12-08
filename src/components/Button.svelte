<script lang="ts">
    let count = $state(0)

    const handleIncrementCount = () => {
        count += 1
    }
</script>

<h2>{count}</h2>
<button onclick={handleIncrementCount}>
    Increment
</button>