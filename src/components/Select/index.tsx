import { BodySelect } from './styles'
// import { Link } from 'react-router-dom';
import makeAnimated from 'react-select/animated'
import { FaCaretDown } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'
import ErrorMessage from '@/components/ErrorMessage'
interface Props extends SelectProps<OptionTypeBase> {
  name: string
  multi?: boolean
  label?: string
}

const Select: React.FC<Props> = ({ name, multi, ...rest }) => {
  const animatedComponents = makeAnimated()
  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      }
    })
  }, [fieldName, registerField, rest.isMulti])

  const optionsStyle = {
    indicatorSeparator: styles => ({ display: 'none' }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#014BB4' : '#201E1E',
      background: '#fff',
      fontSize: 16,
      padding: 16
    })
  }

  return (
    <>
      <BodySelect isErrored={!!error}>
        <ReactSelect
          ref={selectRef}
          closeMenuOnSelect={true}
          components={animatedComponents}
          placeholder={defaultValue || 'Selecione'}
          className="react-select-container"
          classNamePrefix="react-select"
          styles={optionsStyle}
          isMulti={multi}
          {...rest}
        />
      </BodySelect>
      {error && <ErrorMessage message={error} />}
    </>
  )
}

export default Select
