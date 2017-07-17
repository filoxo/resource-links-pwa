import { h, Component } from "preact";

import Header from "./header";
import Section from "./section";
import ResourceLink from "./resourceLink";
import Layout from "./layout";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header title="Resource Links" />
        <Layout>
          <Section>
            <ResourceLink
              url={"https://test.com"}
              heading={"Wow such title"}
              description="Lorem ipsum dolor amet"
            />
            <ResourceLink url={"https://test.com"} heading={"Wow such title"} />
            <ResourceLink url={"https://test.com"} heading={"Wow such title"} />
          </Section>
        </Layout>
      </div>
    );
  }
}
