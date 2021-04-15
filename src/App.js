import { Header } from './styles/Header';
import { Main } from './styles/Main';
import { Typography } from './styles/Typography';
import { Blockquote } from './styles/typography/BlockQuote';
import { HeadingOne } from './styles/typography/HeadingOne';
import { HeadingThree } from './styles/typography/HeadingThree';
import { HeadingTwo } from './styles/typography/HeadingTwo';
import { Paragraph } from './styles/typography/Paragraph';
import { Wrapper } from './styles/Wrapper';

function App() {
  return (
    <Main>
      <Header>
        <Typography as={HeadingOne} fontWeight="900">Typography Library</Typography>
      </Header>
      <Wrapper>
        <Typography as={HeadingTwo} fontWeight="600">Heading 2</Typography>
        <Typography as={HeadingThree}>Heading 3</Typography>
        <Typography as={Blockquote} quoteBy="Ada Lovelace">Religion to me is science and science is religion.</Typography>
        <Typography as={Paragraph}>
          Cupcake ipsum dolor sit amet. Jelly beans jelly-o I love pie bonbon. 
          Gingerbread toffee sugar plum chupa chups chocolate sweet roll icing. 
          Cupcake I love donut sugar plum tiramisu biscuit soufflé cotton candy. 
          Cookie gummies muffin gummi bears dragée I love jelly beans tart. 
          Jelly chocolate cotton candy. Chocolate cake bonbon sesame snaps cake 
          donut toffee marshmallow jelly icing. Candy carrot cake lemon drops cake. 
          Candy marshmallow cupcake donut croissant chupa chups bonbon donut ice cream. 
          Chocolate cake muffin macaroon tootsie roll jelly beans cake lemon drops. 
          Sweet cheesecake danish caramels chocolate cake chupa chups pudding cake 
          macaroon. Ice cream chocolate donut topping ice cream jelly beans donut. 
          Lemon drops macaroon cookie gummi bears.
        </Typography>
        <Typography as={Paragraph} fontStyle="italic" fontColor="pink">
          Chocolate bar carrot cake bear claw sesame snaps I love cheesecake biscuit.
        </Typography>
      </Wrapper>
    </Main>
  );
}

export default App;
