<script>
  import Combined from './Combined/index.svelte';
  import { emptyOpts } from './_convert.js';

  const opts = emptyOpts;
</script>

<p>the steno chart</p>

<Combined {opts} />
