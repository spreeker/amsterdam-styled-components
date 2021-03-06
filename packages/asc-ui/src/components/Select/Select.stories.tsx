import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './Select'

storiesOf('Atoms/Select (Dropdown)', module)
  .addDecorator(storyFn => (
    <div
      style={{
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '40px 10px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <>
      <Select id="select-1" label="With label">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>

      <br />
      <br />
      <em>Without label</em>
      <Select id="select-2">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
  .add('disabled', () => (
    <>
      <Select id="select-1" label="Disabled" disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
      <br />
      <br />
      <Select id="select-2" label="Specific disabled">
        <option value="1" disabled>
          Option 1
        </option>
        <option value="2" disabled>
          Option 2
        </option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
  .add('error', () => (
    <>
      <Select id="select-1" label="Label" errorMessage="Error message">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
      <br />
      <br />
      <Select id="select-2" label="Label only" error>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
      <br />
      <br />
      <Select id="select-3" errorMessage="Error message only">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
      <br />
      <br />
      <em>No labels at all</em>
      <Select id="select-4" error>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
