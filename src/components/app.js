import { h, Component } from "preact";

import Header from "./header";
import Section from "./section";
import ResourceLink from "./resourceLink";
import Layout from "./layout";

import { sections } from "./data.json";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header title="Resource Links" />
        <Layout>
          <Section>
            {sections.map(({ heading, links }) => {
              return (
                <Section heading={heading}>
                  {links.map(({ url, heading, description }) =>
                    <ResourceLink
                      url={url}
                      heading={heading}
                      description={description}
                    />
                  )}
                </Section>
              );
            })}
          </Section>
        </Layout>
      </div>
    );
  }
}
