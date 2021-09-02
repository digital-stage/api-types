import { StagePackage } from './StagePackage'

interface InitialStagePackage<IdType = string> extends StagePackage<IdType> {
    stageId: IdType
    stageMemberId: IdType
    groupId: IdType
}

export { InitialStagePackage }
