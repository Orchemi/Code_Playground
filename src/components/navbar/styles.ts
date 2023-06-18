import { css } from '@emotion/react';
import { COLORS } from '@styles/colors';

export const globalNavbarCss = css`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  background-color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.gray200};
  box-shadow: 0 1px 6px ${COLORS.gray200};

  a {
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.gray700};

    &:visited {
      color: ${COLORS.gray700};
    }
  }
`;
