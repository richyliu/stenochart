const emptyKey = {
  stroke: '#dbdbdb',
  fill: '#ffffff',
};

export const emptyLeftHand = {
  starKey: { top: emptyKey, bottom: emptyKey },
  middleKeys: [
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
  ],
  dzKey: { top: emptyKey, bottom: emptyKey },
};

/**
 * An empty key option for use with <Combined/>. All the keys are set to a gray
 * color.
 */
export const emptyOpts = {
  leftHand: emptyLeftHand,
};
