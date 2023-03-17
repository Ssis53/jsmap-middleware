/*
 * @Author: Antem 
 * @Date: 2023-03-11 18:58:47 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 17:09:06
 */
import { IEventListener } from "../protocol/map/event";
import { ILaunchOptions } from "../protocol/map/options";
import { AbstractMap } from "../base/abstract-map";
import { GDEventListener } from "./gd-event";
import { IMapTransform } from "../protocol/map/transform";
import { GDMapTransform } from "./gd-map-transform";

export class GDMap extends AbstractMap {
    transform: IMapTransform;
    listener: IEventListener;

    map: any;
    
    constructor(launchOptions: ILaunchOptions) {
        super(launchOptions);
        this.listener = new GDEventListener();
        this.transform = new GDMapTransform();
		this.load();
    }

    protected load(): void {
        const options = this.transform.inMapLaunchOptions(this.launchOptions);
        this.map = new AMap.Map(this.launchOptions.id, options);
    }
}