const Solution = (strs) => {
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) !== char) {
        return strs[j].substring(0, i);
      } //second index is exlusive
    }
  }
  return strs[0];
};

console.log(Solution(["abc1", "abc1", "abc1"]));
