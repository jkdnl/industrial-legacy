import { useEffect, useMemo, useRef, useState } from 'react';

type UseInfiniteVisibleItemsOptions<T> = {
  items: T[];
  pageSize?: number;
  resetKey?: string | number;
};

export function useInfiniteVisibleItems<T>({
  items,
  pageSize = 10,
  resetKey,
}: UseInfiniteVisibleItemsOptions<T>) {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(pageSize, items.length),
  );
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleCount(Math.min(pageSize, items.length));
  }, [pageSize, resetKey, items.length]);

  const hasMore = visibleCount < items.length;

  useEffect(() => {
    if (!hasMore || !loadMoreRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((current) => Math.min(current + pageSize, items.length));
        }
      },
      {
        rootMargin: '240px 0px',
      },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasMore, items.length, pageSize]);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount],
  );

  return {
    visibleItems,
    visibleCount,
    hasMore,
    loadMoreRef,
  };
}
