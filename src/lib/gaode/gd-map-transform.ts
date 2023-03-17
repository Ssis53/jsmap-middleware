/*
 * @Author: Antem 
 * @Date: 2023-03-15 17:08:18 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 18:41:16
 */
import { ILaunchOptions } from "../protocol/map/options";
import { IMapTransform } from "../protocol/map/transform";

export class GDMapTransform implements IMapTransform {
    inMapLaunchOptions(options: ILaunchOptions) {
        return options;
    }
    inMapEventName(name: string) {
        return name;
    }
    inMapZoom(zoom: Number) {
        return zoom;
    }
}