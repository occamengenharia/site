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
  allColumnHeadersIsUnsortable?: true
}
/**
 * @param {ISortState} initialSortColumn Is a object of type { growing: boolean, columnIndex: number }, "growing" sets the sorting method as ascending if true and columnIndex is the number of the column minus one
 * @param {IcolumnHeaders} columnHeaders Is a array <IcolumnHeaders>
 * @param {true} allColumnHeadersIsUnsortable - Optional - Makes all columns impossible to sort
 * @example
 * <CustomDataTable
 * initialSortColumn={{ growing: true, columnIndex: 2 }}
    columnHeaders={[
      { title: 'Posição',sortable: true },
      { title: 'Membro' },
      { title: 'Cargo' },
      { title: 'Pontos' },
      { title: 'Nível' }
    ]}
  >
    <tr>
      <td>1</td>
      <td>Gabriel Prando</td>
      <td>Presidente</td>
      <td>1000</td>
      <td>10</td>
    </tr>

  </CustomDataTable>
 */
const CustomDataTable: React.FC<ICustomDataTableProps> = props => {
  const [columnHeaders, setColumnHeaders] = useState(props.columnHeaders)
  useEffect(() => {
    if (props.allColumnHeadersIsUnsortable) {
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
  console.log(props.initialSortColumn)

  const [sortButton, setSortButton] = useState<ISortState>({
    columnIndex: 0,
    growing: true
  })
  useEffect(() => {
    setSortButton(
      props.initialSortColumn || {
        columnIndex: columnHeaders.map((head, index) => {
          if (head.sortable) {
            return index
          }
        })[0],
        growing: true
      }
    )
  }, [columnHeaders])
  console.log(sortButton)

  useEffect(() => {
    if (tableRef.current) {
      let switching = true
      let i
      let x
      let y
      let shouldSwitch
      const tbody = tableRef.current.childNodes[1] // rever
      console.log(tbody)

      let rows = tbody.childNodes
      while (switching) {
        switching = false
        rows = tbody.childNodes
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
        <thead>
          <tr>
            {columnHeaders.map((marker, index) => (
              <Th
                cursorDefault={!marker.sortable}
                arrowDown={sortButton.growing}
                arrowVisible={
                  marker.sortable && sortButton.columnIndex === index
                }
                onClick={() => {
                  if (marker.sortable) {
                    sort(index)
                  }
                }}
                key={marker.title}
                role="button"
              >
                {marker.title} <IoMdArrowDropdown />
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </DivContainer>
  )
}
export default CustomDataTable
