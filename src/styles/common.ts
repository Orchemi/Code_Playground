import { css } from '@emotion/react';

export const commonContainerStyle = css`
  padding: 0 50px;
  margin: 0 auto;
  min-width: 800px;
  max-width: 2000px;
`;

export interface commonButtonProps {
  color?: string;
}
export const commonButtonCss = ({ color }: commonButtonProps) => css`
  color: ${color};

  &:hover {
    cursor: pointer;
  }
`;
