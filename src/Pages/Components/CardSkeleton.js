import React, { Fragment } from "react";
import { Loader, Card, Image } from "semantic-ui-react";

export default function CardSkeleton() {
  
  const textHolderWithLoader = () => {
    return (
      <Fragment>
        <Loader active inline="centered" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Fragment>
    );
  };

  const imageHolder = () => {
    return <Image src="https://react.semantic-ui.com/images/wireframe/white-image.png" />;
  };

  return (
    <Fragment>
      <Card
        image={imageHolder}
        description={textHolderWithLoader}
      />
    </Fragment>
  );
}
