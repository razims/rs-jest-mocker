import { createMock } from './factory';

class Test {

  public func1() {
    return 'a';
  }

  public func2(val?: string) {
    return this.func1();
  }

}

describe('mock', () => {
  it('creates mock', () => {

    const mock = createMock(Test);

    mock.func1();
    mock.func2('test');

    expect(mock.func1).toBeCalledTimes(1);
    expect(mock.func2).toBeCalledTimes(1);
    expect(mock.func2).toBeCalledWith('test');

  });
});
