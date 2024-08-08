import type { SegmentedButtonGroup } from 'mdui';

export default (): string => {
  return ((document.querySelector('#platform') as SegmentedButtonGroup).value as string);
};