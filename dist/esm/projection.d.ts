import { ILonlat, IXY } from './';
/**
 * 经纬度坐标转Web墨卡托坐标
 * @param lon 经度
 * @param lat 纬度
 * @returns Web墨卡托坐标
 */
export declare function lonlat2WebMercator(lon: number, lat: number): [number, number];
/**
 * 经纬度坐标转Web墨卡托坐标
 * @param options 经纬度坐标
 * @returns Web墨卡托坐标
 */
export declare function lonlat2WebMercator(options: ILonlat): [number, number];
/**
 * Web墨卡托投影坐标转经纬度坐标
 * @param x X坐标
 * @param y Y坐标
 * @returns 经纬度坐标
 */
export declare function webMercator2Lonlat(x: number, y: number): [number, number];
/**
 * Web墨卡托投影坐标转经纬度坐标
 * @param options Web墨卡托投影坐标
 * @returns 经纬度坐标
 */
export declare function webMercator2Lonlat(options: IXY): [number, number];
