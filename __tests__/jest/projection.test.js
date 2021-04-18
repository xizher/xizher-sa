/* eslint-disable no-undef */
import {
  lonlat2WebMercator, webMercator2Lonlat
} from '../../dist/esm'

test('经纬度与Web墨卡托投影坐标互转', () => {
  const [lon, lat] = [0, 0]
  const [x, y] = [0, 0]
  let result = lonlat2WebMercator(lon, lat)
  expect(Number(result[0].toFixed(6)) === 0).toBe(true)
  expect(Number(result[1].toFixed(6)) === 0).toBe(true)
  result = lonlat2WebMercator({ lon, lat })
  expect(Number(result[0].toFixed(6)) === 0).toBe(true)
  expect(Number(result[1].toFixed(6)) === 0).toBe(true)
  result = webMercator2Lonlat(x, y)
  expect(Number(result[0].toFixed(6)) === 0).toBe(true)
  expect(Number(result[1].toFixed(6)) === 0).toBe(true)
  result = webMercator2Lonlat({ x, y })
  expect(Number(result[0].toFixed(6)) === 0).toBe(true)
  expect(Number(result[1].toFixed(6)) === 0).toBe(true)
})
