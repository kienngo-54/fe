import React from "react";
import AppHeader from "../../components/Container/Header";
import { Flex, Typography } from "antd";
import Container from "../../components/Container";
import AppFooter from "../../components/Container/Footer";
import CreateMatching from "./CreateMatching";
import FindMatching from "./FindMatching";

function MatchingPage() {
  return (
    <>
      <AppHeader />
      <Flex style={{ padding: "0 24px", minHeight: "calc(100vh - 442px)" }}>
        <Container>
          <Flex
            gap={16}
            vertical
            style={{
              padding: "24px 0",
              width: "100%",
            }}
          >
            <CreateMatching />
            <FindMatching />
          </Flex>
        </Container>
      </Flex>
      <AppFooter />
    </>
  );
}

export default MatchingPage;
