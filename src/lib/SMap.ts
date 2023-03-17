/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-06 19:43:38
 * @Description: 🚀
 * @FilePath: /jsmap-middleware/src/lib/SMap.ts
 */

import { Factory } from "./facotry";
class SMap {
  // static Map = Map;
  static getMap = Factory.getMap;
  static getTool = Factory.getTool;
}

window["SMap"] = SMap;

export { SMap }
