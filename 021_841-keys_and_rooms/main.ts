function canVisitAllRooms(rooms: number[][]): boolean {
  // declare the set to store the visited rooms
  let visited: Set<number> = new Set();

  // function to visit a room and do the recursion
  function visitRoom(room: number): void {
    // base case
    if (visited.has(room)) {
      return;
    }

    // store the visited room in the Set
    visited.add(room);

    // do the same for the rest of the keys of the room
    for (const key of rooms[room]) {
      visitRoom(key);
    }
  }

  // first call to visit room
  visitRoom(0);

  //success case or final output
  return visited.size === rooms.length ? true : false;
}
