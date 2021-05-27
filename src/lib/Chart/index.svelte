<script>
  import Combined from './Combined/index.svelte';
  import RightHand from './RightHand/index.svelte';
  import { emptyOpts } from './_convert.js';

  const opts = emptyOpts;
</script>

<p>steno charts</p>

<div><Combined {opts} /></div>
<div><RightHand keys={opts.rightHand} width="300" height="150" /></div>

<style>
  div {
    display: inline-block;
    border: 1px dotted black;
  }
</style>
