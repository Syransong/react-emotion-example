import logo from './logo.svg';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Heading = styled('h1') `
  background-color: ${props => props.bg};
  color: ${props => props.fg}
`;

const Subheading = Heading.withComponent('h2');

const Quote = styled('blockquote') (props => ({
  fontSize: props.size,
}));

const Cite = styled('cite') (
  {
    fontWeight: 100,
  },
  props => ({
    fontWeight: props.weight
  })
);

const Footer = styled('footer')`
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px
`;

function App() {
  return (
    <div css={css`background: #ddd;`}>
      <div css={css({padding: 10})}>
      <Heading bg="#008f68" fg="#fae042">
        Heading with a green background and yellow text
      </Heading>
      <Subheading>
        Subheading with default colors
      </Subheading>
      <Subheading fg="#6db65b">
        Subheading with light green text
      </Subheading>
      <Subheading bg="#6db65b">
        Subheading with light green background.
      </Subheading>
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
      <Quote>
        This is a quote!
      </Quote>
      <Quote size={25}>
        This is a quote with large text size!
      </Quote>
      <Cite>
        Citation with light text! <br></br>
      </Cite>
      <Cite weight={700}>
        Citation with heavy text!
      </Cite>
      <Footer>
        This is the footer!
      </Footer>
      </div>
    </div>
  );
}

export default App;
