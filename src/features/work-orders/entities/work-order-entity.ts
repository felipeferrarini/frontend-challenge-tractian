export interface IWorkOrder {
  id: number;
  assetId: number;
  assignedUserIds: number[];
  title: string;
  description: string;
  checklist: IWorkOrderCheckList[];
  priority: WorkOrderPriority;
  status: WorkOrderStatus;
}

export interface IWorkOrderCheckList {
  completed: boolean;
  task: string;
}

export enum WorkOrderPriority {
  High = 'high',
  Medium = 'medium',
  Low = 'low'
}

export enum WorkOrderStatus {
  Completed = 'completed',
  InProgress = 'in progress'
}
