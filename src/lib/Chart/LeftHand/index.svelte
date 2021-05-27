<script>
  export let keys;
  export let width = 20;
  export let height = 15;
</script>

<svg viewBox="0 0 20 15" stroke-width="0.75" {width} {height}>
  <defs>
    <path id="upper" d="m0 0 4.3 0 0 7-4.3 0z" />
    <clipPath id="upper-clip">
      <use xlink:href="#upper" />
    </clipPath>
    <path id="lower" d="m0 7.3 4.3 0 0 6 c0 2-4.3 2-4.3 0z" />
    <clipPath id="lower-clip">
      <use xlink:href="#lower" />
    </clipPath>
    <path id="s-key" d="m0 0 4.3 0 0 12.8c0 2.5-4.3 2.5-4.3 0z" />
    <clipPath id="s-key-clip">
      <use xlink:href="#s-key" />
    </clipPath>
  </defs>
  <g>
    <use
      xlink:href="#s-key"
      clip-path="url(#s-key-clip)"
      stroke={keys.sKey.top.stroke}
      fill={keys.sKey.top.fill}
    />
  </g>
  <g transform="translate(5, 0)">
    {#each keys.middleKeys as k, i}
      <g transform={`translate(${i * 5}, 0)`}>
        <use
          xlink:href="#upper"
          clip-path="url(#upper-clip)"
          stroke={k.top.stroke}
          fill={k.top.fill}
        />
        <use
          xlink:href="#lower"
          clip-path="url(#lower-clip)"
          stroke={k.bottom.stroke}
          fill={k.bottom.fill}
        />
      </g>
    {/each}
  </g>
</svg>
