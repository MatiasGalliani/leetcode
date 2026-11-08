function lengthOfLongestSubstring(s: string): number {
    let charIndexMap = new Map<string, number>();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (charIndexMap.has(char) && charIndexMap.get(char)! >= left) {
            left = charIndexMap.get(char)! + 1;
        }
        
        charIndexMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// given string s, find the lenght of the longest substring without duplicate characters

/*
input: s = "abcabcbb"
output:  3

expl: the answer is abc, with the length of 3. note that bca and cab are also correct answers.
*/
