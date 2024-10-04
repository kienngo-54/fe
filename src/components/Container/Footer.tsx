import { Divider, Flex, Image, Typography } from "antd";
import React from "react";
import IMAGES from "../../constants/images";
import Container from ".";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";

function AppFooter() {
  return (
    <Flex
      justify="center"
      style={{
        background: "linear-gradient(103deg, #2460BC 21.69%, #2A78D0 100.63%)",
      }}
    >
      <Container>
        <Flex
          style={{
            padding: "70px 16px",
            borderBottom: "1px solid #fff",
            marginBottom: 14,
          }}
          align="center"
          justify="space-between"
        >
          <Image preview={false} src={IMAGES.full_logo_horizontal} />
          <Flex align="center" gap={20}>
            <Typography.Text
              style={{
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Follow Sportvenue:
            </Typography.Text>
            <FacebookFilled style={{ fontSize: 24, color: "#fff" }} />
            <TwitterSquareFilled style={{ fontSize: 24, color: "#fff" }} />
            <YoutubeFilled style={{ fontSize: 24, color: "#fff" }} />
            <InstagramFilled style={{ fontSize: 24, color: "#fff" }} />
          </Flex>
        </Flex>
        <Flex gap={25} style={{ marginBottom: 20, padding: "0 16px" }} wrap>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Terms of Use
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Terms of Use
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Pricavy Policy
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Cookie Settings
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Ad Choices
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Accessibility & CC
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            About
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Newsletters
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Transcripts
          </Typography.Text>
        </Flex>
        <Flex>
          <Typography.Text
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "#fff",
              paddingBottom: 32,
            }}
          >
            © 2023 Sportvenue. Discovery Company. ALL Right Reserved
          </Typography.Text>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AppFooter;
