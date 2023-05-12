import logo from './logo.svg';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  return (
    <div>
      <div css={css({
        margin: 10,
        padding: 10, 
        backgroundColor: '#eee',
      })}>
        This is an example of <code>`code`</code> using an object.
      </div>
      <div css={css`
        margin: 10px;
        padding: 10px;
        background-color: #eee;
      `}>
        This is an example of <code>`css` using a tagged template literal.</code>
      </div>
    </div>
  );
}

export default App;
