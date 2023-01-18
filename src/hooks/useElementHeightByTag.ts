import { useLayoutEffect, useState } from 'react';

const useElementHeightByTag = (tag: string) => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const getHeight: ResizeObserverCallback = ([{ target: Elem }]) => {
      Elem && setHeight(Elem.clientHeight);
    };

    const resizeObserver = new ResizeObserver(getHeight);
    const footerElem = document.querySelector(tag) as Element;

    resizeObserver.observe(footerElem);
  }, [tag]);

  return height;
};

export default useElementHeightByTag;
