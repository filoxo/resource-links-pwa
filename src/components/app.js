import { h, Component } from "preact";

import Header from "./header";
import Section from "./section";
import ResourceLink from "./resourceLink";
import Layout from "./layout";

import { sections as sectionsSrc } from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: this.getSectionSrc() };
    this.handleOnInput = this.handleOnInput.bind(this);
  }
  getSectionSrc = () => JSON.parse(JSON.stringify(sectionsSrc));
  handleOnInput($event) {
    const term = $event.target.value;
    let results = this.getSectionSrc();
    if (term !== "") {
      results = results.filter(section => {
        section.links = section.links.filter(
          ({ url, heading, description }) => {
            const termReg = new RegExp(term, "gi");
            return (
              url.match(termReg) ||
              heading.match(termReg) ||
              description.match(termReg)
            );
          }
        );
        return section.links.length > 0;
      });
    }
    this.setState({ sections: results });
  }
  render({}, { sections }) {
    return (
      <div id="app">
        <Header title="Resource Links" filter={this.handleOnInput} />
        <Layout>
          {sections.map(({ heading, links }) =>
            <Section heading={heading}>
              {links.map(link => <ResourceLink {...link} />)}
            </Section>
          )}
        </Layout>
      </div>
    );
  }
}
