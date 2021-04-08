import StagePackage from "./StagePackage";

interface InitialStagePackage<IdType = string> extends StagePackage<IdType> {
  stageId: IdType;
  groupId: IdType;
}

export default InitialStagePackage;
