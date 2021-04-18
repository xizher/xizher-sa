export function distanceByTwoPoint(pt1, pt2) {
    const [x1, y1] = Array.isArray(pt1)
        ? [pt1[0], pt2[1]]
        : [pt1.x, pt1.y];
    const [x2, y2] = Array.isArray(pt2)
        ? [pt2[0], pt2[1]]
        : [pt2.x, pt2.y];
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** .5;
}
