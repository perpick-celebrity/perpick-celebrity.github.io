import mbtis from "../../constants/mbtis.json.proxy.js";
import tags from "../../constants/mbti_tags.json.proxy.js";
import titles from "../../constants/titles.json.proxy.js";
import genders from "../../constants/gender_tags.json.proxy.js";
import celebrities from "../../constants/titles.json.proxy.js";
export const getDescription = (mbti) => mbti ? mbtis.find((m) => m.mbti === mbti) : void 0;
export const getTagsWithAttr = (mbti) => {
  if (!mbti)
    return void 0;
  const attrs = mbti.split("");
  const tag = attrs.map((attr) => {
    const tag2 = tags.find((t) => t.type === attr);
    if (!tag2)
      return [];
    return tag2.tags;
  });
  if (tag.length !== 4)
    return void 0;
  return tag.flat();
};
export const getTitle = (title) => title ? titles.find((t) => t.type === title) : void 0;
export const getGender = (gender) => gender ? genders.find((g) => g.type === gender) : void 0;
export const getCelebruty = (name) => celebrities.find((c) => c.title === name);
