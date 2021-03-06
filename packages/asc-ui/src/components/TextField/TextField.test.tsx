import { shallow } from 'enzyme'
import * as React from 'react'
import TextField from './TextField'
import { ThemeProvider } from '../../index'

describe('<TextField />', () => {
  it('should render', () => {
    const mockFn = jest.fn()
    const component = shallow(
      <ThemeProvider>
        <TextField
          label="description"
          srOnly={false}
          value="test-value"
          onBlur={mockFn}
          onChange={mockFn}
          onClear={mockFn}
          onFocus={mockFn}
          onKeyDown={mockFn}
        />
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
