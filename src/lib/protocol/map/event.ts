/*
 * @Author: Antem 
 * @Date: 2023-03-11 19:00:06 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-11 20:26:26
 */
export enum EEvent {
    /**
     * 点击事件
     */
    CLICK = 'click',
    /**
     * 缩放事件
     */
    SCAL = 'scal',
    /**
     * 地图加载完成事件
     */
    LOAD_COMPLETE = 'loadComplete'
}
type PEvent =  Parameters<(func: Function, ...args: any[]) => void>;

export interface IEventListener {

    /**
     * 点击事件
     */
    onClick(...args: PEvent): void;

    /**
     * 地图加载完成的事件
     */
    onLoadComplete(...args: PEvent): void;

    /**
     * 地图缩放事件
     */
    onScale(...args: PEvent): void;
}