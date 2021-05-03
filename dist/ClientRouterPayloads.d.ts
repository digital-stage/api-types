import Router from './model/Router';
import Stage from './model/Stage';
declare namespace ClientRouterPayloads {
    type ChangeRouter = {
        _id: string;
    } & Partial<Router>;
    type StageServed<StageType = Stage> = {
        kind: 'audio' | 'video' | 'both';
        type: string;
        update: Partial<StageType> & {
            _id: string;
        };
    };
    type ChangeStage<StageType = Stage> = Partial<StageType> & {
        _id: string;
    };
    type StageUnServed<StageType = Stage> = {
        kind: 'audio' | 'video' | 'both';
        type: string;
        update: Partial<StageType> & {
            _id: string;
        };
    };
}
export default ClientRouterPayloads;
