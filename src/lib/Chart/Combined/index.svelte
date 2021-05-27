<script>
  import LeftHand from '../LeftHand/index.svelte';
  import Thumbs from '../Thumbs/index.svelte';
  import RightHand from '../RightHand/index.svelte';
  export let opts;

  const leftHand = opts.leftHand || null;
  const rightHand = opts.rightHand || null;
  const thumbs = opts.thumbs || null;
</script>

<svg viewBox="0 0 60 30" width="500" height="250">
  {#if leftHand}
    <g transform="translate(0, 0)"> <LeftHand keys={leftHand} /></g>
  {/if}
  {#if thumbs}
    <g transform="translate(12, 10)"> <Thumbs keys={thumbs} /></g>
  {/if}
  {#if rightHand}
    <g transform="translate(21, 0)"> <RightHand keys={rightHand} /></g>
  {/if}
</svg>
