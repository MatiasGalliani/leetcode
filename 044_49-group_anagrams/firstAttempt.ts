function groupAnagrams(strs: string[]): string[][] {
    let word = new Set<string>();
    let result: string[][] = [];

    for (const words of strs) {
        const sortedStr = words.split('').sort().join('');
        word.add(sortedStr)
    }

    console.log(`This is the set word ${word}`);

    const wordsArr = [...word];

    console.log(`This is the array wordsArr ${wordsArr}`)

    for (let i: number = 0; i < wordsArr.length; i++) {
        let letterSet: string = wordsArr[i]

        console.log(`This is the letterSet ${letterSet} on the iteration number ${i}`)

        let toPush: string[] = []
        
        for (const word of strs) {
            const sortedStr = word.split('').sort().join('');
            if (sortedStr === letterSet) {
                toPush.push(word)
            }
        }

        result.push(toPush);
    }

    return result
};

let strs: string[] = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));

/*
given an array of strings called strs, group the anagrams together.
you can return the answer in any order.

anagram = 'eat' -> 'tea'

--- initial thoughts ---
input: strs = ["eat","tea","tan","ate","nat","bat"]
output: [["bat"],["nat","tan"],["ate","eat","tea"]]

create a set
*/
