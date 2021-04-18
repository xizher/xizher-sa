import { ILonlat, IXY } from './'

/**
 * 经纬度坐标转Web墨卡托坐标
 * @param lon 经度
 * @param lat 纬度
 * @returns Web墨卡托坐标
 */
export function lonlat2WebMercator (lon: number, lat: number) : [number, number]
/**
 * 经纬度坐标转Web墨卡托坐标
 * @param options 经纬度坐标
 * @returns Web墨卡托坐标
 */
export function lonlat2WebMercator (options: ILonlat) : [number, number]
/**
 * 经纬度坐标转Web墨卡托坐标
 * @returns Web墨卡托坐标
 */
export function lonlat2WebMercator (...args: [number, number] | [ILonlat]) : [number, number] {
  let lon: number, lat: number
  if (args.length === 1) {
    [lon, lat] = [args[0].lon, args[0].lat]
  } else if (args.length === 2) {
    [lon, lat] = [args[0], args[1]]
  }
  const x = lon * 20037508.34 / 180
  let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180)
  y = y * 20037508.34 / 180
  return [x, y]
}

/**
 * Web墨卡托投影坐标转经纬度坐标
 * @param x X坐标
 * @param y Y坐标
 * @returns 经纬度坐标
 */
export function webMercator2Lonlat (x: number, y: number) : [number, number]
/**
 * Web墨卡托投影坐标转经纬度坐标
 * @param options Web墨卡托投影坐标
 * @returns 经纬度坐标
 */
export function webMercator2Lonlat (options: IXY) : [number, number]
/**
 * Web墨卡托投影坐标转经纬度坐标
 * @returns 经纬度坐标
 */
export function webMercator2Lonlat (...args: [number, number] | [IXY]) : [number, number] {
  const T_NUM = 20037508.34
  let x: number, y: number
  if (args.length === 1) {
    [x, y] = [args[0].x, args[0].y]
  } else if (args.length === 2) {
    [x, y] = [args[0], args[1]]
  }
  const lon = x / T_NUM * 180
  const lat = 180 / Math.PI * (2 * Math.atan(Math.exp(y / T_NUM * 180 * Math.PI / 180)) - Math.PI / 2)
  return [lon, lat]
}
