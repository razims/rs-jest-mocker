import { Mock } from './mock.decorator';

@Mock()
class Test {

  public func1(): jest.Mock {
    return 'a';
  }

  public func2(val?: string): jest.Mock {
    return this.func1();
  }

}

describe('mock', () => {
  it('creates mock', () => {

    const mock = new Test();

    mock.func1();
    const result = mock.func2('test');

    expect(result).toBe('a');

    expect(mock.func1).toBeCalledTimes(2);
    expect(mock.func2).toBeCalledTimes(1);
    expect(mock.func2).toBeCalledWith('test');
  });
});
