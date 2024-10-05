import { Avatar, Button, Dropdown, Flex, Image, Typography } from "antd";
import React from "react";
import Container from ".";
import IMAGES from "../../constants/images";
import {
  BellFilled,
  HomeOutlined,
  SafetyOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useStyle } from "../../themes/baseStyle";
import { useAppDispatch, useAppSelector } from "../../redux";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../constants/routes";
import { clearData } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

function AppHeader() {
  const { styles } = useStyle();
  const userInfo = useAppSelector((s) => s.auth.storage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Flex
      justify="center"
      style={{
        background: "linear-gradient(103deg, #2460BC 21.69%, #2A78D0 100.63%)",
        borderBottom: "1px solid #FFF",
      }}
    >
      <Container>
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "18px 16px" }}
        >
          <Image
            preview={false}
            src={IMAGES.full_logo_horizontal}
            style={{ height: 46 }}
          />
          {userInfo ? (
            <Flex align="center" gap={20}>
              <Typography.Paragraph
                style={{
                  height: "auto",
                  color: "#FFF",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Tạo kèo bóng đá nhanh nào!
              </Typography.Paragraph>
              <BellFilled style={{ height: 20, width: 20, color: "#fff" }} />
              <Flex style={{ height: 40 }} gap={8} align="center">
                <Avatar size={40} icon={<UserOutlined />} />
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: "Chỉnh sửa thông tin",
                      },
                      {
                        key: "2",
                        label: "Lịch sử đấu kèo",
                      },
                      {
                        key: "3",
                        label: "Đăng xuất",
                        onClick: () => {
                          dispatch(clearData());
                          navigate(ROUTE.LOGIN);
                        },
                      },
                    ],
                  }}
                >
                  <Flex vertical>
                    <Typography.Paragraph
                      style={{
                        color: "#FFF",
                        margin: 0,
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                    >
                      {userInfo.username}
                    </Typography.Paragraph>
                    <Typography.Paragraph
                      style={{
                        color: "#FFF",
                        margin: 0,
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                    >
                      Hội trưởng
                    </Typography.Paragraph>
                  </Flex>
                </Dropdown>
              </Flex>
            </Flex>
          ) : (
            <Flex>
              <Button
                onClick={() => {
                  navigate(ROUTE.LOGIN);
                }}
              >
                Đăng nhập
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex
          justify="flex-start"
          align="center"
          style={{ padding: "18px 16px 24px 16px" }}
          gap={48}
        >
          <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
            <HomeOutlined style={{ fontSize: 20, color: "#fff" }} />
            <Link to={ROUTE.HOME}>
              <Typography.Paragraph
                className={styles.textBodyPrimary}
                style={{ color: "#fff", fontWeight: 600, margin: 0 }}
              >
                Trang chủ
              </Typography.Paragraph>
            </Link>
          </Flex>
          <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
            <SafetyOutlined style={{ fontSize: 20, color: "#fff" }} />
            <Link to={ROUTE.MATCHING}>
              <Typography.Paragraph
                className={styles.textBodyPrimary}
                style={{ color: "#fff", fontWeight: 600, margin: 0 }}
              >
                Cáp kèo - Tìm đối thủ
              </Typography.Paragraph>
            </Link>
          </Flex>
          <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
            <SearchOutlined style={{ fontSize: 20, color: "#fff" }} />
            <Link to={ROUTE.FIND_FIELD}>
              <Typography.Paragraph
                className={styles.textBodyPrimary}
                style={{ color: "#fff", fontWeight: 600, margin: 0 }}
              >
                Tìm sân
              </Typography.Paragraph>
            </Link>
          </Flex>
          <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
            <TeamOutlined style={{ fontSize: 20, color: "#fff" }} />
            <Link to={ROUTE.MY_TEAM}>
              <Typography.Paragraph
                className={styles.textBodyPrimary}
                style={{ color: "#fff", fontWeight: 600, margin: 0 }}
              >
                Tạo đội bóng
              </Typography.Paragraph>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AppHeader;
