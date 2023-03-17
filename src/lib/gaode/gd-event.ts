import { IEventListener } from "../protocol/map/event";

/*
 * @Author: Antem 
 * @Date: 2023-03-11 18:58:42 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 18:35:16
 */
export class GDEventListener implements IEventListener {
    onClick(func: Function, e: any): void {
        // TODO: 参数映射处理;
        func(e);
    }
    onLoadComplete(func: Function): void {
        // TODO: 参数映射处理;
        func();
    }
    onScale(func: Function, ...args: any[]): void {
        // TODO: 参数映射处理;
        func(...args);
    }
    
}