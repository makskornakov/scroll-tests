import { RubberCheckBoxInput } from './RubberCheckbox.styled';

import type { RubberCheckboxStylesProps } from './RubberCheckbox.styled';

const magicBorderModifier = 16;

export function RubberCheckbox({
  size = 25,
  borderRadius = (3 / magicBorderModifier) * size,
  borderWidth = size / magicBorderModifier,
  animation = '0.6s ease-out 0.08s',
  ...props
}: typeof RubberCheckBoxInput['defaultProps'] & Partial<RubberCheckboxStylesProps>) {
  return (
    <RubberCheckBoxInput
      {...props}
      size={size}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      animation={animation}
    />
  );
}
