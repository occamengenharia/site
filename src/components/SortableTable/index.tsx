import { DivContainer, Th } from './styles'
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
interface ISortableTableProps {
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
 * <SortableTable
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

  </SortableTable>
 */
const SortableTable: React.FC<ISortableTableProps> = props => {
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
  }, [])
  const tableRef = useRef<HTMLTableElement>(null)

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

  useEffect(() => {
    if (tableRef.current) {
      let switching = true
      let i: number
      let x: HTMLTableCellElement
      let y: HTMLTableCellElement
      let shouldSwitch: boolean
      const tbody = tableRef.current.childNodes[1]
      let rows = tbody.childNodes
      while (switching) {
        switching = false
        rows = tbody.childNodes
        for (i = 0; i < rows.length - 1; i++) {
          shouldSwitch = false

          x = rows[i].childNodes[sortButton.columnIndex] as HTMLTableCellElement
          y = rows[i + 1].childNodes[
            sortButton.columnIndex
          ] as HTMLTableCellElement
          if (isNaN(Number(x?.textContent))) {
            if (sortButton.growing) {
              if (x?.textContent.toLowerCase() > y?.textContent.toLowerCase()) {
                shouldSwitch = true
                break
              }
            } else {
              if (x?.textContent.toLowerCase() < y?.textContent.toLowerCase()) {
                shouldSwitch = true
                break
              }
            }
          } else {
            if (sortButton.growing) {
              if (Number(x?.textContent) > Number(y?.textContent)) {
                shouldSwitch = true
                break
              }
            } else {
              if (Number(x?.textContent) < Number(y?.textContent)) {
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
                key={marker.title}
                role="button"
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
export default SortableTable
