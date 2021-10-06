import { DivContainer, Th, SpanIcon } from './styles'
import { useRef, useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
interface IColumnHeaders {
  title: string
  sortable?: boolean
}
interface ISortState {
  columnIndex: number
  growing: boolean
}
interface ICustomDataTableProps {
  itemSelected?: number
  columnHeaders: Array<IColumnHeaders>
  initialSortColumn?: ISortState
  allcolumnHeadersIsUnsortable?: true
}
/**
 *
 * @param columnHeaders Is a array <IcolumnHeaders>
 * @returns
 */
const CustomDataTable: React.FC<ICustomDataTableProps> = props => {
  const [columnHeaders, setColumnHeaders] = useState(props.columnHeaders)
  useEffect(() => {
    if (props.allcolumnHeadersIsUnsortable) {
      setColumnHeaders(state => {
        return state.map(header => {
          return { ...header, sortable: false }
        })
      })
    } else if (
      props.columnHeaders.filter(header => header.sortable !== undefined)
        .length === 0
    ) {
      setColumnHeaders(state => {
        return state.map(header => {
          return { ...header, sortable: true }
        })
      })
    }
    console.log(
      props.columnHeaders.filter(header => header.sortable !== undefined).length
    )
  }, [])
  const tableRef = useRef<HTMLTableElement>(null)
  const [sortButton, setSortButton] = useState<ISortState>(
    props.initialSortColumn || {
      columnIndex: 0,
      growing: true
    }
  )
  useEffect(() => {
    setSortButton({
      columnIndex: columnHeaders.map((head, index) => {
        if (head.sortable) {
          return index
        }
      })[0],
      growing: true
    })
  }, [columnHeaders])
  console.log(sortButton)

  useEffect(() => {
    if (tableRef.current) {
      let switching = true
      let i
      let x
      let y
      let shouldSwitch

      let rows = tableRef.current.childNodes
      while (switching) {
        switching = false
        rows = tableRef.current.childNodes
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false

          x = rows[i].childNodes[sortButton.columnIndex]
          y = rows[i + 1].childNodes[sortButton.columnIndex]
          if (
            (x?.innerHTML.charCodeAt() >= 48 &&
              x?.innerHTML.charCodeAt() <= 57) ||
            (y?.innerHTML.charCodeAt() >= 48 && y?.innerHTML.charCodeAt() <= 57)
          ) {
            if (sortButton.growing) {
              if (Number(x?.innerHTML) > Number(y?.innerHTML)) {
                shouldSwitch = true
                break
              }
            } else {
              if (Number(x?.innerHTML) < Number(y?.innerHTML)) {
                shouldSwitch = true
                break
              }
            }
          } else {
            if (sortButton.growing) {
              if (x?.innerHTML.toLowerCase() > y?.innerHTML.toLowerCase()) {
                shouldSwitch = true
                break
              }
            } else {
              if (x?.innerHTML.toLowerCase() < y?.innerHTML.toLowerCase()) {
                shouldSwitch = true
                break
              }
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    }
  }, [sortButton])
  const sort = (columnIndex: number) => {
    setSortButton(button => {
      if (columnIndex === button.columnIndex) {
        return {
          ...button,
          growing: !button.growing
        }
      } else {
        return {
          growing: true,
          columnIndex: columnIndex
        }
      }
    })
  }

  return (
    <DivContainer>
      <table ref={tableRef}>
        <tr>
          {columnHeaders.map((marker, index) => (
            <Th
              cursorDefault={!marker.sortable}
              onClick={() => {
                if (marker.sortable) {
                  sort(index)
                }
              }}
              key={marker.title}
              role="button"
            >
              <button>
                {marker.title}{' '}
                <SpanIcon arrowDown={sortButton.growing}>
                  {marker.sortable && sortButton.columnIndex === index && (
                    <IoMdArrowDropdown size={20} />
                  )}
                </SpanIcon>
              </button>
            </Th>
          ))}
        </tr>
        {props.children}
      </table>
    </DivContainer>
  )
}
export default CustomDataTable
