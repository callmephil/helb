import React from "react";
import _ from "lodash";
import { Accordion, Label } from "semantic-ui-react";

const laws = [
  {
    title: "First Law",
    content: "First Content Law",
    definition: "This is the first law",
    usages: "this is applied all the time",
    tags: ["health", "energy"],
  },
  {
    title: "Second Law",
    content: "Second Content Law",
    definition: "This is the Second law",
    usages: "this is applied all the time",
    tags: ["health", "energy"],
  },
  {
    title: "Third Law",
    content: "Third Content Law",
    definition: "This is the Third law",
    usages: "this is applied all the time",
    tags: ["health", "energy"],
  },
];

const lawAccordionTab = ({ key, title, content, definition, usages, tags }) => {
  const sub_sections = [
    { key: `definition-${key}`, title: "Definition", content: definition },
    { key: `usages-${key}`, title: "Usages", content: usages },
  ];

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

  return { key: `panel-${key}`, title: title, content: { content: SubPanel } };
};

const rootPanels = _.map(laws, (lawContent, key) => {
  return lawAccordionTab({ key, ...lawContent });
});

const LawList = () => <Accordion fluid defaultActiveIndex={0} panels={rootPanels} styled />;

export default LawList;
