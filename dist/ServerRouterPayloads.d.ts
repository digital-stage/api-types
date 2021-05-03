import Router from './model/Router';
import Stage from './model/Stage';
declare namespace ServerRouterPayloads {
    type Ready = Router;
    type ServeStage = {
        kind: 'audio' | 'video' | 'both';
        type: string;
        stage: Stage;
    };
    type UnServeStage = {
        kind: 'audio' | 'video' | 'both';
        type: string;
        stageId: string;
    };
    type RouterAdded = Router;
    type RouterChanged = {
        _id: string;
    } & Partial<Router>;
    type RouterRemoved = string;
}
export default ServerRouterPayloads;
