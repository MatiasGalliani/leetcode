function romanToInt(s: string): number {
    let result: number = 0

    const mapRoman = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    // s[length - 1]

    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i + 1] !== undefined) {
            if (mapRoman.get(s[i]) < mapRoman.get(s[i + 1])) {
                result = result - mapRoman.get(s[i])
            } else {
                result += mapRoman.get(s[i])
            }
        } else {
            result += mapRoman.get(s[i])
        }
    }

    return result
};

/*
I: 1
V: 5
X: 10
L: 50
C: 100
D: 500
M: 1000

IV:
5 - 1 = 4

CLX : 10 + 50 + 100

LVIII: 1 + 1 + 1 + 5 + 50

MCMXCIV: 
*/
