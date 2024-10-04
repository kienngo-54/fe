import React from "react";
import { Flex, Typography } from "antd";
import Container from "../../components/Container";
import { useStyle } from "../../themes/baseStyle";
import FootballField from "./FootballField";
import AppHeader from "../../components/Container/Header";
import AppFooter from "../../components/Container/Footer";

function HomePage() {
  const { styles } = useStyle();
  return (
    <>
      <AppHeader />
      {/* section 1 */}
      <Flex
        justify="center"
        // className={styles.twoBg}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            width: "100%",
            height: "60%",
            background:
              "linear-gradient(103deg, #2460BC 21.69%, #2A78D0 100.63%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: 0,
            width: "100%",
            height: "40%",
            backgroundColor: "#fff",
          }}
        />
        <Container>
          <Flex
            vertical
            gap={16}
            style={{
              marginTop: 35,
              zIndex: 1,
              marginBottom: 35,
              paddingRight: 16,
              paddingLeft: 16,
              position: "relative",
            }}
          >
            <Typography.Title
              level={3}
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 28,
                color: "#fff",
              }}
            >
              Cap kèo nhanh nào, User ơi !
            </Typography.Title>
            <Typography.Text
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: 16,
                color: "#fff",
              }}
            >
              Book sân sát giờ, chiến kèo nóng ngay và luôn
            </Typography.Text>
            <Flex style={{ padding: "10px" }}>
              <Flex className={styles.scrollableContent} gap={10}>
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      {/* section 2 */}
      <Flex
        justify="center"
        // className={styles.twoBg}
        style={{
          position: "relative",
          zIndex: 1,
          background:
            "linear-gradient(103deg, #2460BC 21.69%, #2A78D0 100.63%)",
        }}
      >
        <Container>
          <Flex
            vertical
            gap={16}
            style={{
              marginTop: 35,
              zIndex: 1,
              marginBottom: 35,
              paddingRight: 16,
              paddingLeft: 16,
              position: "relative",
            }}
          >
            <Typography.Title
              level={3}
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 28,
                color: "#fff",
              }}
            >
              Địa điểm gần nhà, chốt ngay kẻo muộn
            </Typography.Title>
            <Typography.Text
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: 16,
                color: "#fff",
              }}
            >
              Book sân sát giờ, chiến kèo nóng ngay và luôn
            </Typography.Text>
            <Flex style={{ padding: "10px" }}>
              <Flex className={styles.scrollableContent} gap={10}>
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      {/* section 3 */}
      <Flex
        justify="center"
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Container>
          <Flex
            vertical
            gap={16}
            style={{
              marginTop: 35,
              zIndex: 1,
              marginBottom: 35,
              paddingRight: 16,
              paddingLeft: 16,
              position: "relative",
            }}
          >
            <Typography.Title
              level={3}
              className={styles.textBodyPrimary}
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              Lên kế hoạch nhanh chóng
            </Typography.Title>
            <Typography.Text
              className={styles.textBodySecondary}
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: 16,
                color: "rgba(72, 70, 73, 1)",
              }}
            >
              Book sân sát giờ, chiến kèo nóng ngay và luôn
            </Typography.Text>
            <Flex style={{ padding: "10px" }}>
              <Flex className={styles.scrollableContent} gap={10}>
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
                <FootballField />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <AppFooter />
    </>
  );
}

export default HomePage;
