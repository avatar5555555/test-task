// original function
export function func(s, a, b) {
  // check if string is empty
  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;

  while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex != -1) {
    if (bIndex == -1) {
      // useless statement since while loop has stopped on 'aIndex == -1' statement and (bIndex == -1) || (bIndex === aIndex)
      return aIndex;
    }
    else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex != -1) {
    return bIndex;
  }
  else {
    return -1;
  }
}

export const refactoredFunc = (str, a, b) => {
  const hasNotArgs = (str || a || b) == null // checks if any arg is null || undefined by coercion

  if (typeof str !== 'string' || str.length === 0 || hasNotArgs) return -1

  const aIndex = str.lastIndexOf(a)
  const bIndex = str.lastIndexOf(b)

  return Math.max(aIndex, bIndex)
}
