/*
 * @Author: Antem 
 * @Date: 2023-03-11 18:58:31 
 * @Last Modified by: Antem
 * @Last Modified time: 2023-03-15 17:29:07
 */
import { EEvent, IEventListener } from "../protocol/map/event";
import { ILaunchOptions } from "../protocol/map/options";
import { IMapTransform } from "../protocol/map/transform";


export abstract class AbstractMap {
	/**
	 * 地图实例
	 */
	abstract map: any;

	/**
	 * 事件代理
	 */
	abstract listener: IEventListener;

	/**
	 * 数据转换代理
	 */
	abstract transform: IMapTransform;

	protected _launchOptions: ILaunchOptions;

	get launchOptions() {
		return this._launchOptions;
	}

	constructor(options: ILaunchOptions) {
		this._launchOptions = options;
	}
	setZoom(zoom: number) {
		if (this.map) {
			this.map.setZoom(this.transform.inMapZoom(zoom));
		}
	};

	on(name: EEvent, func: Function) {
		if (!name || !Object.values(EEvent).includes(name)) {
			console.log(`未知的事件: ${name}`)
			return 
		}
		if (!func) {
			console.log(`请设置事件${name}的回掉函数`);
			return;
		}
		if (!!this.map.on) {
			this.map.on(this.transform.inMapEventName(name), (...arg: any[]) => {
				this.recieveEvent(name, func, ...arg)
			});
		}
		console.log(AbstractMap.name, '第三方地图暂无on方法监听事件，请查阅第三方文档自行处理！');
	}

	protected abstract load(): void;

	private recieveEvent(name: EEvent, func: Function, ...args: any[]) {
		switch (name) {
			case EEvent.CLICK:
				this.listener.onClick(func, ...args);
				break;
			case EEvent.SCAL:
				this.listener.onScale(func, ...args);
				break;
			case EEvent.LOAD_COMPLETE:
				this.listener.onLoadComplete(func, ...args);
				break;
			default:
				func(...args);
				break;
		}
	};

}