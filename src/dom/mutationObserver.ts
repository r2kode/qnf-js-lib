const DEFAULT_OPTIONS = { childList: true, subtree: true };

export const addMutationObserver = (
  targetNodeSelector: string,
  selector: string,
  event: string,
  callback: EventListenerOrEventListenerObject,
  opts = DEFAULT_OPTIONS
): void => {
  const targetNode = document.querySelector(targetNodeSelector) as Node;
  const domObserver = new MutationObserver((_mutationList, observer) => {
    const element = document.querySelector(selector);
    if (element != null) {
      element.addEventListener(event, callback);

      observer.disconnect();
    }
  });

  domObserver.observe(targetNode, opts);
};
