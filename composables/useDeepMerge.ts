import deepmerge from "deepmerge";

export function useDeepMerge(...args) {
  return deepmerge(...args);
}