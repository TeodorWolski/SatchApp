import React from 'react';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';

const Root = () => (
  <div>
    <Heading>First root view 🦾!</Heading>
    <Paragraph>This is root view</Paragraph>
    <Button>ok!</Button>
  </div>
);
export default Root;
// \"settings": {
// "import/resolver": {
// "node": {
// "extensions": [".js", ".jsx", ".ts", ".tsx"],
// "moduleDirectory": ["node_modules", "src/"]
// }
// }
// },
