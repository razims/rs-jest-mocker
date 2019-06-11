import { getMetadata, generateFromMetadata } from 'jest-mock';

export function Mock() {
  return (target: any) => {
    // the new constructor behaviour
    const metadata = getMetadata(target);

    if (metadata === null) {
      return target;
    }

    const mock = generateFromMetadata(metadata);

    // copy prototype so intanceof operator still works
    mock.prototype = target.prototype;

    // return new constructor (will override original)
    return mock;
  };
}
