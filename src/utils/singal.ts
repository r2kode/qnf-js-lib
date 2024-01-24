/**
 * Based on article https://dev.to/ratiu5/implementing-signals-from-scratch-3e4c
 */

// TODO: Fix types for this function

type Subscriber = (v: any) => void;

export const signal = <T>(initialValue: T) => {
  let _value = initialValue;
  const subscribers: Subscriber[] = [];

  const notify = (): void => {
    subscribers.forEach((subscriber) => {
      subscriber(_value);
    });
  };

  return {
    get value() {
      return _value;
    },
    set value(v) {
      _value = v;
      notify();
    },
    subscribe: (subscriber: Subscriber) => subscribers.push(subscriber),
  };
};
