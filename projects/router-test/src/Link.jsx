import { BUTTONS, EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, "", href);

  //crear un evento persozaliado para cuando se cambie la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();

    const isMainEvent = event.button === BUTTONS.primary;
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
