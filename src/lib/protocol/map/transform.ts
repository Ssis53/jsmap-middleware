/*
 * @Author: Antem 
 * @Date: 2023-03-15 17:08:07 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 18:37:06
 */
import { ILaunchOptions } from "../map/options";

/**
 * 地图数据转换
 */
export interface IMapTransform {
    /** ------------------- 输入参数 ----------------------- */
    /**
     * 映射启动参数
     */
    inMapLaunchOptions(options: ILaunchOptions): any;

    /**
     * 映射事件名
     */
    inMapEventName(name: string): any;

    /**
     * 映射zoom
     * @param zoom 
     * @returns 返回传入给第三发地图的参数
     */
    inMapZoom(zoom: Number): any;

}