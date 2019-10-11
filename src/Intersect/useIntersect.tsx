import { useState, useRef, useEffect, LegacyRef } from "react";

export type UseIntersectConfig = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
  callback?(...args: any[]): void;
};

export type UseIntersectReturnValue = [
  LegacyRef<any>,
  IntersectionObserverEntry
];

export const useIntersect = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  callback
}: UseIntersectConfig): UseIntersectReturnValue => {
  // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
  const [entry, updateEntry] = useState<IntersectionObserverEntry>(null);
  const [node, setNode] = useState<HTMLElement>(null);

  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (callback) callback(entry);
        return updateEntry(entry);
      },
      {
        root,
        rootMargin,
        threshold
      }
    );
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode as LegacyRef<HTMLDivElement>, entry];
};
