import React from "react";
import { Button, Flex, Image, Typography } from "antd";
import { useStyle } from "../../themes/baseStyle";
import { FaUserGroup } from "react-icons/fa6";
import IMAGES from "../../constants/images";
import { IField } from "../../@types/entities/Field";
import { d3Splitting } from "../../utils/number";
import { bookingField } from "../../apis/booking";
import { toast } from "react-toastify";

interface FootballFieldProps {
  data: IField;
  dateInfo: {
    date: string;
    startTime: string;
    endTime: string;
  };
}
function FootballField(props: FootballFieldProps) {
  const { data, dateInfo } = props;
  const { styles } = useStyle();

  const handleBooking = async () => {
    await bookingField({
      body: {
        date: dateInfo.date,
        fieldId: data._id,
        startTime: dateInfo.startTime,
        endTime: dateInfo.endTime,
      },
      successHandler: {
        callBack(data) {
          toast.success("Đặt sân thành công!");
        },
      },
    });
  };

  return (
    <Flex className={styles.borderGradient}>
      <Flex
        vertical
        style={{
          backgroundColor: "#fff",
          padding: "6px 8px",
          zIndex: 1,
          borderRadius: 6,
        }}
        gap={8}
      >
        <Image
          alt="item"
          preview={false}
          src={IMAGES.bg_item}
          style={{ borderRadius: 4, width: 232 }}
        />
        <Flex vertical>
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              fontWeight: 600,
              color: "rgba(2, 106, 167, 1)",
            }}
          >
            {data.name}
          </Typography.Title>
          <Typography.Text style={{ fontSize: 12, fontWeight: 600 }}>
            Môn thể thao: {data.sport}
          </Typography.Text>
          <Typography.Text
            style={{ fontSize: 12, color: "rgba(77, 127, 203, 1)" }}
          >
            Vị trí: {data.location}
          </Typography.Text>
        </Flex>

        <Flex justify="space-between">
          <Flex gap={8}>
            <Flex
              style={{
                padding: "3px 6px",
                backgroundColor: "rgba(0, 91, 144, 1)",
                borderRadius: 2,
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  margin: 0,
                  lineHeight: "normal",
                }}
              >
                {`${d3Splitting(data.price)} VNĐ`}
              </Typography.Text>
            </Flex>
            <Flex
              align="center"
              gap={4}
              style={{
                padding: "3px 6px",
                backgroundColor: "rgba(38, 150, 216, 1)",
                borderRadius: "2px",
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  margin: 0,
                  lineHeight: "normal",
                }}
              >
                {data.capacity}
              </Typography.Text>
              <FaUserGroup style={{ fontSize: 10, color: "#fff" }} />
            </Flex>
          </Flex>
          <Button
            onClick={handleBooking}
            style={{ height: 20, cursor: "pointer" }}
          >
            Đặt sân
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FootballField;
