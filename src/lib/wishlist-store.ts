import { useSyncExternalStore } from "react";

const EMPTY: string[] = [];
let ids: string[] = EMPTY;
const listeners = new Set<() => void>();

export const readWishlistIds = () => ids;

export const setWishlistIds = (next: string[]) => {
  ids = next;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const useWishlistIds = () =>
  useSyncExternalStore(subscribe, readWishlistIds, () => EMPTY);