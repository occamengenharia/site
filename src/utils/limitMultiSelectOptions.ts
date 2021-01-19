import { ISelectOptions } from '@/components/Modals/SelectiveProcessForm/selectOptions'

export default function limitMultiSelectOptions(event: ISelectOptions[]): void {
  if (event && event.length > 2) {
    event.pop()
  }
}
