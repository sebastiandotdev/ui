<script lang="ts">
    let count = $state(0)

    const handleIncrementCount = () => {
        count += 1
    }
</script>
<slot/>
<h2>{count}</h2>

<button class="bg-slate-400" onclick={handleIncrementCount} >
    Increment
</button>