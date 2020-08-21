import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function FundingCard({ url, title, by, date }) {
    // const extractStringFromUrl = () => "";
  
    return (
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">{title}</Card.Header>
        </Card.Content>
        <Card.Content>
        {/* <iframe 
        title="kickstarter"
        src="https://www.kickstarter.com/projects/artistsliteracies/grief-deck-an-artists-card-set-for-communal-grieving/widget/card.html?v=2" 
        scrolling="no" 
        /> */}
          <embed
            src={`https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=${url}&image=1&coinfo=1&preview=1`}
            type="text/html"
          />
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name="share" />
            By {by}
          </div>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name="calendar outline" />
            Posted on {date}
          </div>
        </Card.Content>
      </Card>
    );
  };