const emptyKey = {
  stroke: '#dbdbdb',
  fill: '#ffffff',
};

export const emptyLeftHand = {
  sKey: { top: emptyKey, bottom: emptyKey },
  middleKeys: [
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
  ],
};

export const emptyThumbs = {
  leftPair: [
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
  ],
  rightPair: [
    { top: emptyKey, bottom: emptyKey },
    { top: emptyKey, bottom: emptyKey },
  ],
};

export const emptyRightHand = {
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
  thumbs: emptyThumbs,
  rightHand: emptyRightHand,
};
