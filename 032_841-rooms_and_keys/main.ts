function canVisitAllRooms(rooms: number[][]): boolean {
    let visited = new Set<number>()

    function dfs(room: number) {
        // visited.add(the current room)
        visited.add(room)

        // base case
        if (rooms[room].length === 0) return

        // dfs(forEach element of the arr room; rooms[room])
        for (const currRoom of rooms[room]) {
            if (!visited.has(currRoom)) {
                dfs(currRoom)
            }
        }
    }

    dfs(0)

    return visited.size === rooms.length
};

/*
rooms = [[1], [2], [3], []]

add(0)
dfs(1)
add(1)
dfs(2)

base case

output: true
*/

/*
base case:
if (room.length === 0) {
    return
}
*/
