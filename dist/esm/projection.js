/**
 * 经纬度坐标转Web墨卡托坐标
 * @returns Web墨卡托坐标
 */
export function lonlat2WebMercator(...args) {
    let lon, lat;
    if (args.length === 1) {
        [lon, lat] = [args[0].lon, args[0].lat];
    }
    else if (args.length === 2) {
        [lon, lat] = [args[0], args[1]];
    }
    const x = lon * 20037508.34 / 180;
    let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
    y = y * 20037508.34 / 180;
    return [x, y];
}
/**
 * Web墨卡托投影坐标转经纬度坐标
 * @returns 经纬度坐标
 */
export function webMercator2Lonlat(...args) {
    const T_NUM = 20037508.34;
    let x, y;
    if (args.length === 1) {
        [x, y] = [args[0].x, args[0].y];
    }
    else if (args.length === 2) {
        [x, y] = [args[0], args[1]];
    }
    const lon = x / T_NUM * 180;
    const lat = 180 / Math.PI * (2 * Math.atan(Math.exp(y / T_NUM * 180 * Math.PI / 180)) - Math.PI / 2);
    return [lon, lat];
}
