/*
 * @Author: Antem 
 * @Date: 2023-03-11 19:00:16 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-11 23:40:25
 */
export interface ILaunchOptions {
    /**
     * element id;
     */
    id: string;
    /**
     * 园区
     */
    code1: string;
    /**
     * 厂房
     */
    code2: string;
    /**
     * 厂房下级
     */
    code3: string;
    /**
     * 显示级别
     */
    level: any[];
    /**
     * 初始默认展示经纬度比例
     */
    init: any[];
    /**
     * 样式设置
     */
    style: any;
}