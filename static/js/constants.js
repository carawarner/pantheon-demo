export const XX = "XX";
export const XY = "XY";

export const femaleGender = "F";
export const maleGender = "M";
export const nonBinaryGender = "NB";

export const genderLabelMap = {
  [femaleGender]: {
    [XX]: "female",
    [XY]: "female (trans)"
  },
  [maleGender]: {
    [XX]: "male (trans)",
    [XY]: "male"
  },
  [nonBinaryGender]: {
    [XX]: "non-binary",
    [XY]: "non-binary"
  }
};

export const genderTitleMap = {
  [femaleGender]: "Goddess",
  [maleGender]: "God",
  [nonBinaryGender]: "Divine Being"
};
