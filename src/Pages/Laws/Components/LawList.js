import React from "react";
import _ from "lodash";
import { Accordion, Label } from "semantic-ui-react";

const lawAccordionTab = ({ key, title, content, definition, usages, tags, score }) => {
  const sub_sections = [
    { key: `definition-${key}`, title: "Definition", content: definition },
    { key: `usages-${key}`, title: "Usages", content: usages },
  ];

  const _score = score ? `(found ${score} occurence)` : '' 
  
  const SubPanel = (
    <div>
      {content}
      <Accordion.Accordion panels={sub_sections} />

      <div>
        {_.map(tags, (tag, key) => (
          <Label key={key} image className="labels">
            <img src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" alt="" />
            {tag}
          </Label>
        ))}
      </div>
    </div>
  );

  return { key: `panel-${key}`, title: `${title} ${_score}`, content: { content: SubPanel } };
};

function LawList({laws}) {
  const rootPanels = _.map(laws, (lawContent, key) => {
    return lawAccordionTab({ key, ...lawContent });
  });

  return (
    <Accordion fluid defaultActiveIndex={0} panels={rootPanels} styled />
  )
}

export default LawList;
