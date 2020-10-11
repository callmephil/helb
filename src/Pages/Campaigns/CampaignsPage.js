import React, { Fragment, useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import { CampaignCardTwo } from "./Components/CampaignCard";
import PageHeadings from "../Components/PageHeadings";

import useAxios from "axios-hooks";
import CardSkeleton from "../Components/CardSkeleton";
import _ from "lodash";
import { getTypeFromUrl } from "../../Utils/Script";

import SearchExampleCategory from "../Laws/Components/Filter";


export function CardWrapper({ type, url, labels }) {
  const [{ data, loading, error }] = useAxios(`https://helbpipeline.herokuapp.com/${type}/${encodeURIComponent(url)}`);

  if (loading) return <CardSkeleton />;
  if (error) return <p>error</p>; 

  if (data === null) return <Fragment />; 

  return <CampaignCardTwo type={type} url={url} labels={labels} {...data} />;
}

export default function CampaignsPage() {
  const [{ data, loading }] = useAxios(`./assets/static/campaigns.json`);
  const [result, setResults] = useState([]);
  const [noresult, setNoResults] = useState(false);

  useEffect(() => {
    setResults(data);
  }, [data]);

  if (loading) return <p>Loading</p>;

  console.log(result);

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Campaigns"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}>
      </PageHeadings>

      <SearchExampleCategory source={data} _setResults={setResults} setNoResults={setNoResults} />


      <Card.Group stackable doubling itemsPerRow={3}>
        {_.map(result, ({ location, link, labels }) => {
          const type = getTypeFromUrl(link);
          return <CardWrapper key={link} type={type} url={link} labels={labels} />;
        })}
      </Card.Group>
    </Container>
  );
}
