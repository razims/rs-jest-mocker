// tslint:disable-next-line:ban-types
type Constructor<T> = (new(...args: any[]) => T) | ((...args: any[]) => T) | Function;

export function Stub(): any {
  return function(target: any, property: string): any {
    return {
      get: function(): any {
        const value = jest.fn();
        Object.defineProperty(this, property, {
          value: value
        });

        return value;
      }
    };
  };
}
