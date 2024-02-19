import { v4 as uuidv4 } from "uuid";

export interface ListItem {
  id: string;
  name: string;
}

export const mockDataList: ListItem[] = [
  { id: uuidv4(), name: "todo1" },
  { id: uuidv4(), name: "todo2" },
  { id: uuidv4(), name: "todo3" },
];
