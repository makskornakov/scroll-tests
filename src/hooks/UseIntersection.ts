import type { MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true
) {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionPercent, setIntersectionPercent] = useState(0);
  const observer = useRef<null | IntersectionObserver>(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();
    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
        setIntersectionPercent(entry.intersectionRatio);
      },
      { ...options }
    ));
    ob.observe(element);
    return () => {
      cleanOb();
    };
  }, [element, options]);

  return {
    isIntersecting,
    intersectionPercent,
  };
}
