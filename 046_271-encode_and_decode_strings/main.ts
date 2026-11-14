function encode(strs: string[]): string {
  let result: string[] = [];
  const nonAscii: string = "ñ";

  for (let i: number = 0; i < strs.length; i++) {
    let elementLength: number = strs[i].length;
    let eleLength: string = elementLength.toString();
    result.push(eleLength);
    result.push(nonAscii);
    result.push(strs[i]);
  }

  return result.join("");
}

console.log(`The encoded word is: ${encode(["Hello", "World"])}`);

// The encoded word is: 5ñHello5ñWorld

function decode(str: string): string[] {
  const nonAscii: string = "ñ";
  let result: string[] = [];
  let start: number = 0;

  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === nonAscii) {
      const len: number = +str.slice(start, i);
      console.log(`len is ${len}`);
      let left: number = +i + 1;
      let right: number = +len + i + 1;
      start = right;

      console.log(`The sides are left: ${left} and right: ${right}`);

      result.push(str.slice(left, right));

      i = right - 1;
    }
  }

  return result;
}

let str: string = encode(["Hello", "World"]);

console.log(decode(str));
