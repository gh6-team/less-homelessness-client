import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Main from './Main';

describe('<Main />', () => {
  it('should have a the name of the app in a div', () => {
    const wrapper = shallow(<Main />);
    const actual = wrapper.find('div').text();
    const expected = 'Less Homelessness';

    expect(actual).to.equal(expected);
  });
});
