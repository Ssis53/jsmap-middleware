export interface IToolOption {
    position: EPosition,  //画图工具在容器中的相对位置，当前为右上
    offset: IOffset,  //偏移量
    drawMode: EDrawMode,  //画图类型POINT:画点  POLYLINE:画线  POLYGON:画面

    //画图结束的回调，返回所画的点的信息
    callback: (feature: IFeature) => void,
    //移除相应点的回调，返回相应点信息
    removeCallback: (feature: IFeature) => void,
    //编辑相应点的回调，返回相应点信息
    editCallback: (feature: IFeature) => void,
    //定位到相应点的回调，返回相应点信息
    locateCallback: (feature: IFeature) => void,
}
export interface IFeature {

}
export enum EPosition {
    RightTop = 'right-top',
}
export enum EDrawMode {
    /**
     * 画点
     */
    POINT = 'POINT',
    /**
     * 画线
     */
    POLYLINE = 'POLYLINE',
    /**
     * 画面
     */
    POLYGON = 'POLYGON'
}

export interface IOffset {
    x: number,
    y: number,
}