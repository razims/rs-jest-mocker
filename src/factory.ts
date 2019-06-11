import { generateFromMetadata, getMetadata } from 'jest-mock';

export type IConstructor<T> = new (...args: any[]) => T;

export function createMock<T>(cls: any) {
  const metadata = getMetadata(cls);

  if (metadata === null) {
    return cls;
  }

  const mock = generateFromMetadata(metadata);

  return new mock();
}
