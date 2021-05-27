<script>
  export let keys;
  export let width = 30;
  export let height = 15;
</script>

<svg viewBox="0 0 30 15" stroke-width="0.75" {width} {height}>
  <defs>
    <path id="upper" d="m0 0 4.3 0 0 7-4.3 0z" />
    <clipPath id="upper-clip">
      <use xlink:href="#upper" />
    </clipPath>
    <path id="lower" d="m0 7.3 4.3 0 0 5.5c0 2.5-4.3 2.5-4.3 0z" />
    <clipPath id="lower-clip">
      <use xlink:href="#lower" />
    </clipPath>
    <path id="star-key" d="m0 0 4.7 0 0 12.8-.7 0c0 2.5-4 2.5-4 0z" />
    <clipPath id="star-key-clip">
      <use xlink:href="#star-key" />
    </clipPath>
    <path id="dzkeys-upper" d="m0 0 4.7 0 0 7-4.7 0z" />
    <clipPath id="dzkeys-upper-clip">
      <use xlink:href="#dzkeys-upper" />
    </clipPath>
    <path id="dzkeys-lower" d="m0 7.3 4.7 0 0 5.5c0 2.5-4 2.5-4 0l-.7 0z" />
    <clipPath id="dzkeys-lower-clip">
      <use xlink:href="#dzkeys-lower" />
    </clipPath>
  </defs>
  <g>
    <use
      xlink:href="#star-key"
      clip-path="url(#star-key-clip)"
      stroke={keys.starKey.top.stroke}
      fill={keys.starKey.top.fill}
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
  <g transform="translate(24.6, 0)">
    <use
      xlink:href="#dzkeys-upper"
      clip-path="url(#dzkeys-upper-clip)"
      stroke={keys.dzKey.top.stroke}
      fill={keys.dzKey.top.fill}
    />
    <use
      xlink:href="#dzkeys-lower"
      clip-path="url(#dzkeys-lower-clip)"
      stroke={keys.dzKey.bottom.stroke}
      fill={keys.dzKey.bottom.fill}
    />
  </g>
</svg>
