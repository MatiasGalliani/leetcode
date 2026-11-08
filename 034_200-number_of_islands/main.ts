function numIslands(grid: string[][]): number {
    let result: number = 0

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                result++
                dfs(i, j)
            }
        }
    }   

    function dfs(row: number, col: number) {
        if (row >= grid.length) return
        if (row < 0) return
        if (col < 0) return
        if (col >= grid[row].length) return
        if (grid[row][col] === "0") return

        grid[row][col] = "0"

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1) 
    }

    return result
};
