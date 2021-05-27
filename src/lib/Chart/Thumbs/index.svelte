<script>
  export let keys;
  export let width = 30;
  export let height = 15;
</script>

<svg viewBox="0 0 30 15" stroke-width="0.75" {width} {height}>
  <defs>
    <path id="thumb" d="m0 7.3 4.3 0 0 5.5c0 2.5-4.3 2.5-4.3 0z" />
    <clipPath id="thumb-clip">
      <use xlink:href="#thumb" />
    </clipPath>
  </defs>
  <g transform="translate(0, 0)">
    {#each keys.leftPair as k, i}
      <g transform={`translate(${i * 5}, 0)`}>
        <use
          xlink:href="#thumb"
          clip-path="url(#thumb-clip)"
          stroke={k.bottom.stroke}
          fill={k.bottom.fill}
        />
      </g>
    {/each}
  </g>
  <g transform="translate(13, 0)">
    {#each keys.rightPair as k, i}
      <g transform={`translate(${i * 5}, 0)`}>
        <use
          xlink:href="#thumb"
          clip-path="url(#thumb-clip)"
          stroke={k.bottom.stroke}
          fill={k.bottom.fill}
        />
      </g>
    {/each}
  </g>
</svg>
