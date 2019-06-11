import { Stub } from './spy.decorator';

class Test {

  // @ts-ignore
  @Stub() public func1: jest.Mock;

  // @ts-ignore
  @Stub() public func2: jest.Mock;

}

describe('mock', () => {
  it('stub returns mock function', () => {

    const mock = new Test();

    mock.func1();
    mock.func1();
    mock.func2();

    expect(mock.func1).toBeCalledTimes(2);
    expect(mock.func2).toBeCalledTimes(1);
  });
});
