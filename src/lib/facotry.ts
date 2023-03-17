/*
 * @Author: Antem 
 * @Date: 2023-03-11 18:59:59 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 18:26:47
 */
import { ILaunchOptions } from "./protocol/map/options";
import { EMapType } from "./protocol/map/map";
import { GDMap } from "./gaode/gd-map";
import { AbstractMap } from "./base/abstract-map";
import { IToolOption } from "./protocol/tools/options";
import { AbstractTools } from "./base/abstract-tools";
import { GDTools } from "./gaode/gd-tools";

export class Factory {
    static getMap(type: EMapType, options: ILaunchOptions): AbstractMap {
        switch (type) {
            case EMapType.GAODE:
                return new GDMap(options);
            default:
                return new GDMap(options);
        }
    }

    static getTool(type: EMapType, options: IToolOption): AbstractTools {
        switch (type) {
            case EMapType.GAODE:
                return new GDTools(options);
            default:
                return new GDTools(options);
        }
    }
}