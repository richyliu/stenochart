<script>
  // http://bl.ocks.org/biovisualize/8187844
  // https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/
  export let keys;
</script>

<svg
  width="300"
  viewBox="0 0 50 50"
  fill="blue"
  stroke="green"
  stroke-width="1"
>
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
      stroke={keys.starKey.top.stroke}
      stroke-width="0.75"
      fill={keys.starKey.top.fill}
      clip-path="url(#star-key-clip)"
    />
  </g>
  <g transform="translate(5, 0)">
    {#each keys.middleKeys as k, i}
      <g transform={`translate(${i * 5}, 0)`}>
        <use
          xlink:href="#upper"
          stroke={k.top.stroke}
          stroke-width="0.75"
          fill={k.top.fill}
          clip-path="url(#upper-clip)"
        />
        <use
          xlink:href="#lower"
          stroke={k.bottom.stroke}
          stroke-width="0.75"
          fill={k.bottom.fill}
          clip-path="url(#lower-clip)"
        />
      </g>
    {/each}
  </g>
  <g transform="translate(24.6, 0)">
    <use
      xlink:href="#dzkeys-upper"
      stroke={keys.dzKey.top.stroke}
      stroke-width="0.75"
      fill={keys.dzKey.top.fill}
      clip-path="url(#dzkeys-upper-clip)"
    />
    <use
      xlink:href="#dzkeys-lower"
      stroke={keys.dzKey.bottom.stroke}
      stroke-width="0.75"
      fill={keys.dzKey.bottom.fill}
      clip-path="url(#dzkeys-lower-clip)"
    />
  </g>
</svg>
