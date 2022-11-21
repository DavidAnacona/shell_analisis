import BubbleSort, {
  BubbleSortDesc
} from 'feature/shellSort/algoritmit/BubbleSort'
import QuickSort, {
  QuickSortDesc
} from 'feature/shellSort/algoritmit/QuickSort'
import ShellSort, {
  ShellSortDesc
} from 'feature/shellSort/algoritmit/ShellSort'

import { bubbleSort, quickSort, shellSortMethod } from './functions'

export const OptionsSort = {
  shell: {
    selectedMethod: 'shell',
    title: 'Shellsort',
    description: ShellSortDesc,
    methodAnimation: (nums: any[]) => ShellSort(nums),
    methodAnalitycs: (nums: any[]) => shellSortMethod(nums)
  },
  bubble: {
    selectedMethod: 'bubble',
    title: 'Bubblesort',
    description: BubbleSortDesc,
    methodAnimation: (nums: any[]) => BubbleSort(nums),
    methodAnalitycs: (nums: any[]) => bubbleSort(nums)
  },
  quick: {
    selectedMethod: 'quick',
    title: 'Quicksort',
    description: QuickSortDesc,
    methodAnimation: (nums: any[]) => QuickSort(nums),
    methodAnalitycs: (nums: any[]) => quickSort(nums)
  }
}
