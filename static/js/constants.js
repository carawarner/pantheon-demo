export const XX = "XX";
export const XY = "XY";

export const femaleGender = "female";
export const maleGender = "male";
export const nonBinaryGender = "non-binary";

export const genderLabelMap = {
  [femaleGender]: {
    [XX]: femaleGender,
    [XY]: femaleGender + "(trans)"
  },
  [maleGender]: {
    [XX]: maleGender + "(trans)",
    [XY]: maleGender
  },
  [nonBinaryGender]: {
    [XX]: nonBinaryGender,
    [XY]: nonBinaryGender
  }
};

export const genderTitleMap = {
  [femaleGender]: "Goddess",
  [maleGender]: "God",
  [nonBinaryGender]: "Divine Being"
};
