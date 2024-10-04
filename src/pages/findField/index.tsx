import React from "react";
import { Flex, Typography } from "antd";
import Container from "../../components/Container";
import AppHeader from "../../components/Container/Header";
import AppFooter from "../../components/Container/Footer";
import Filter from "./Filter";

function FindFieldPage() {
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
              width: '100%'
            }}
          >
            <Typography.Title level={3} style={{ margin: 0 }}>
              Tìm sân
            </Typography.Title>
            <Filter />
          </Flex>
        </Container>
      </Flex>
      <AppFooter />
    </>
  );
}

export default FindFieldPage;
