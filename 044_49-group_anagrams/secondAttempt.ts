console.time("Run time");

import strs from "./array.ts";

function groupAnagrams(strs: string[]): string[][] {
  let words = new Map<string, string[]>();

  for (const word of strs) {
    const sortedStr: string = word.split("").sort().join("");

    if (!words.has(sortedStr)) {
      words.set(sortedStr, []);
    }

    words.get(sortedStr)!.push(word);
  }

  return Array.from(words.values());
}

console.log(groupAnagrams(strs));

console.timeEnd("Run time");

/*
given an array of strings called strs, group the anagrams together.
you can return the answer in any order.

anagram = 'eat' -> 'tea'

--- initial thoughts ---
input: strs = ["eat","tea","tan","ate","nat","bat"]
output: [["bat"],["nat","tan"],["ate","eat","tea"]]

create a set
*/
