import { shallow } from 'enzyme';
import { AppComponent } from '../AppComponent';
import { getInfo, cleanInfo } from 'store/category';
import { logout } from 'store/user'
import { cleanError } from 'store/status'

describe('<AppComponent', () => {
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

  it('should send action cleanInfo() if user changed', () => {
    const fakeDispatch = jest.fn();
    const history = { push: jest.fn() };
    const user = { name: 'John' };
    const wrapper = shallow(<AppComponent user={user} history={history} dispatch={fakeDispatch} />);

    wrapper.setProps({ user: null });
    expect(fakeDispatch).toHaveBeenCalledWith(cleanInfo());
  });

  it('should show error and send action cleanError() after show error', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const instance = wrapper.instance();
    instance.container = { error: jest.fn() };
    const error = 'Some error';

    wrapper.setProps({ error });
    expect(fakeDispatch).toHaveBeenCalledWith(cleanError());
  });

  it('should send action logout() if user logout', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const instance = wrapper.instance();

    instance.onLogout();
    expect(fakeDispatch).toHaveBeenCalledWith(logout());
  });
});
