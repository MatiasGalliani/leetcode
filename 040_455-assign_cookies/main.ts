function findContentChildren(g: number[], s: number[]): number {
  let i: number = 0;
  let j: number = 0;
  let contentChildren: number = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (i < g.length && j < s.length) {
    let minSizeCookie: number = g[i];

    if (minSizeCookie > s[j]) {
      j++;
    } else if (minSizeCookie <= s[j]) {
      contentChildren++;
      j++;
      i++;
    }
  }

  return contentChildren;
}

/*
--- References ---

i = child
g[i] = min size of cookie

j = cookie
s[j] = cookie size

if cookie_size >= min_size_cookie {
    assign j cookie to i child
}

--- Example ---
input: g = [1, 2, 3], s = [1, 1]
output: 1

--- Explanation ---
Amount of children: 3 => g.length = Amount of children
Amount of cookies: 2 => s.length = Amount of cookies

Greed factor of the children are:  1, 2 and 3
And even if we have two cookies, both are size 1, so we can only make happy the child i = 0

So we output 1
*/
