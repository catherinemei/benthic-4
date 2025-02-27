import { Hypergraph } from "./priority-traversal-types";

export const FranconeriShowHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Bar chart",
    description:
      "Height of Charlie and River at different ages. With axes age and height in inches.",
    descriptionTokens: {
      label: "Bar chart",
      shortDescription: "Height of Charlie and River at different ages.",
      longDescription:
        "Height of Charlie and River at different ages. With axes age and height in inches.",
    },
    parents: [],
    children: ["2", "1"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Age",
    description: "Age. Contains 3 groups.",
    descriptionTokens: {
      label: "Age",
      shortDescription: "Contains 3 groups.",
      longDescription: "Contains 3 groups.",
    },
    parents: ["0"],
    children: ["3", "4", "5"],
    priority: 2,
  },
  "2": {
    id: "2",
    displayName: "Name",
    description: "Name of child. Contains 2 groups.",
    descriptionTokens: {
      label: "Name",
      shortDescription: "Contains 2 groups.",
      longDescription: "Contains 2 groups.",
    },
    parents: ["0"],
    children: ["6", "7"],
    priority: 1,
  },
  "3": {
    id: "3",
    displayName: "Age 8",
    description: "Age 8. Contains 2 points.",
    descriptionTokens: {
      label: "Age 8",
      shortDescription: "Age 8",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["8", "9"],
    priority: 1,
  },
  "4": {
    id: "4",
    displayName: "Age 10",
    description: "Age 10. Contains 2 points.",
    descriptionTokens: {
      label: "Age 10",
      shortDescription: "Age 10",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["10", "11"],
    priority: 1,
  },
  "5": {
    id: "5",
    displayName: "Age 12",
    description: "Age 12. Contains 2 points.",
    descriptionTokens: {
      label: "Age 12",
      shortDescription: "Age 12",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["12", "13"],
    priority: 1,
  },
  "6": {
    id: "6",
    displayName: "Charlie",
    description: "Charlie. Contains 3 points.",
    descriptionTokens: {
      label: "Charlie",
      shortDescription: "Charlie",
      longDescription: "Contains 3 points.",
    },
    parents: ["2"],
    children: ["8", "10", "12"],
    priority: 1,
  },
  "7": {
    id: "7",
    displayName: "River",
    description: "River. Contains 3 points.",
    descriptionTokens: {
      label: "River",
      shortDescription: "River",
      longDescription: "Contains 3 points.",
    },
    parents: ["2"],
    children: ["9", "11", "13"],
    priority: 1,
  },
  "8": {
    id: "8",
    displayName: "Charlie at 8",
    description: "Charlie at 8. 52 inches.",
    descriptionTokens: {
      label: "Charlie 8",
      shortDescription: "52 inches.",
      longDescription: "52 inches.",
    },
    parents: ["3", "6"],
    children: [],
    priority: 1,
  },
  "9": {
    id: "9",
    displayName: "River at 8",
    description: "River at 8. 50 inches.",
    descriptionTokens: {
      label: "River 8",
      shortDescription: "50 inches.",
      longDescription: "50 inches.",
    },
    parents: ["3", "7"],
    children: [],
    priority: 1,
  },
  "10": {
    id: "10",
    displayName: "Charlie at 10",
    description: "Charlie at 10. 54 inches.",
    descriptionTokens: {
      label: "Charlie 10",
      shortDescription: "54 inches.",
      longDescription: "54 inches.",
    },
    parents: ["4", "6"],
    children: [],
    priority: 1,
  },
  "11": {
    id: "11",
    displayName: "River at 10",
    description: "River at 10. 57 inches.",
    descriptionTokens: {
      label: "River 10",
      shortDescription: "57 inches.",
      longDescription: "57 inches.",
    },
    parents: ["4", "7"],
    children: [],
    priority: 1,
  },
  "12": {
    id: "12",
    displayName: "Charlie at 12",
    description: "Charlie at 12. 56 inches.",
    descriptionTokens: {
      label: "Charlie 12",
      shortDescription: "56 inches.",
      longDescription: "56 inches.",
    },
    parents: ["5", "6"],
    children: [],
    priority: 1,
  },
  "13": {
    id: "13",
    displayName: "River at 12",
    description: "River at 12. 55 inches.",
    descriptionTokens: {
      label: "River 12",
      shortDescription: "55 inches.",
      longDescription: "55 inches.",
    },
    parents: ["5", "7"],
    children: [],
    priority: 1,
  },
};
