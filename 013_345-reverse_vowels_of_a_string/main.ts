function reverseVowels(s: string): string {
  let i: number = 0,
    j = s.length - 1;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const arr = s.split("");

  while (i < j) {
    if (!vowels.has(s[i])) {
      i++;
      continue;
    }

    if (!vowels.has(s[j])) {
      j--;
      continue;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join("");
}

function main() {
  const s: string = "IceCreAm";
  const reversedString: string = reverseVowels(s);

  console.log(reversedString);
}

main();
