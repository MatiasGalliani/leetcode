function reverseWords(s: string): string {
  let i: number = 0;
  let listS: string[] = [];

  for (let m: number = 0; m < s.length; m++) {
    listS[m] = s[m];
  }

  for (let k: number = 0; k < s.length; k++) {
    if (listS[k] === " " || k === s.length - 1) {
      let j: number = k - 1;

      if (k === s.length - 1) {
        j = k;
      }

      while (i < j) {
        [listS[i], listS[j]] = [listS[j], listS[i]];
        i++;
        j--;
      }

      i = k + 1;
    }
  }

  let result: string = listS.join("");

  return result;
}

/*
given a string s, reverse the order of characters in each word, within a sentence while still preserving whitespace and initial word order

--- example ---

input: s = "Let's take Leetcode contest"
output: "s'teL ekat edoCteeL tsetnoc"

algorithm = two pointers

hello -> pointerOne = index 0; pointerTwo = index s.length - 1;

hello world -> 
s[0] = h
s[1] = e
s[2] = l
s[3] = l
s[4] = o

s[5] = " " -> word ended

k = 5

i = 0 (increments)
j = k - 1 (decrements)


*/
