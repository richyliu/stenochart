<script>
  import LeftHand from './LeftHand/index.svelte';
  export let opts;

  const leftHand = opts.leftHand || null;
</script>

<LeftHand keys={leftHand}/>
