export default function cleanSet(set, startString) {
  let res = '';
  if (!startString) return res;
  for (const content of set) {
    if (content && content.startsWith(startString)) {
      res += `${content.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
