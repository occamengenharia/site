import { Container, Error } from './styles'
// import { Link } from 'react-router-dom';
import makeAnimated from 'react-select/animated'
import { FiAlertCircle } from 'react-icons/fi'
import { useRef, useEffect, useState, useCallback } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'
interface Props extends SelectProps<OptionTypeBase> {
  name: string
  multi?: boolean
  label?: string
}

const Select: React.FC<Props> = ({ name, multi, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

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

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!selectRef.current?.value)
  }, [])

  const optionsStyle = {
    indicatorSeparator: () => ({ display: 'none' }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#014BB4' : '#201E1E',
      background: '#fff',
      fontSize: 16,
      padding: 16
    }),
    multiValue: styles => {
      return {
        ...styles,
        fontSize: 16
      }
    }
  }

  return (
    <>
      <Container isErrored={!!error} isFocused={isFocused} isField={isField}>
        <ReactSelect
          ref={selectRef}
          closeMenuOnSelect={true}
          components={animatedComponents}
          placeholder={defaultValue || 'Selecione'}
          className="react-select-container"
          classNamePrefix="react-select"
          styles={optionsStyle}
          isMulti={multi}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#E45B5B" size={20} />
          </Error>
        )}
      </Container>
    </>
  )
}

export default Select
