import { css } from "@emotion/react";

const flexColumnCenterX2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  container: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    width: 100%;
    height: 100vh;
  `,
  h1: css`
    font-size: 4rem;
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 2rem;
  `,
  main: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    width: 410px;
  `,

  form: css`
    display: flex;
    gap: 5px;
    width: 100%;
    height: 40px;
  `,
  input: css`
    flex: 8;
    height: 100%;
    text-indent: 5px;
  `,
  addBtn: css`
    flex: 2;
    height: 100%;
    font-size: 1.5rem;
  `,
  sectionContainer: css`
    width: 100%;
  `,
  section: css`
    width: 100%;
  `,
  listItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    border: 1px solid #808080;
    border-radius: 5px;
  `,
  checkBox: css`
    width: 30px;
    height: 30px;
  `,
  delBtn: css`
    height: 30px;
    padding: 0 5px;
    border: none;
  `,
};
