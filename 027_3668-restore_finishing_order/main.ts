function recoverOrder(order: number[], friends: number[]): number[] {
    const friendsMap = new Map<number, number>(
        friends.map((num, index) => [num, index])
    );

    let result: number[] = []

    for (const runner of order) {
        if (friendsMap.has(runner)) {
            result.push(runner)
        }
    }

    return result
};
