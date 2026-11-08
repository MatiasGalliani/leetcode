function findCircleNum(isConnected: number[][]): number {
    let visited = new Set<number>()
    let result: number = 0

    for (let i: number = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            result++
            dfs(i)
        }
    }

    function dfs(city: number) {
        if (visited.has(city)) {
            return
        }

        visited.add(city)

        for (let i: number = 0; i < isConnected[city].length; i++) {
            if (isConnected[city][i] === 1) {
                dfs(i)
            }
        }
    }

    return result
};
