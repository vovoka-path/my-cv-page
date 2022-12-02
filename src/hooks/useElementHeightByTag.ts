import React from 'react';

const useElementHeightByTag = (tag: string) => {
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
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
