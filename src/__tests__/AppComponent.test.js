import { shallow } from 'enzyme'
import { AppComponent } from '../AppComponent'
import { getInfo, cleanInfo } from 'store/category'

describe('<AppComponent />', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Header and Main', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Main').length).toBe(1);
  });

  it('should send action getInfo() if user changed', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const user = {};

    wrapper.setProps({ user });

    expect(fakeDispatch).toHaveBeenCalledWith(getInfo());
  });
});
