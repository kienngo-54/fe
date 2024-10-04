import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  FormProps,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";
import { ESport } from "../../constants/sport";
import { EDistrict } from "../../constants/location";
import { ETimeFrame } from "../../constants/timeFrame";
import { findField } from "../../apis/field";
import dayjs from "dayjs";
import { IField } from "../../@types/entities/Field";
import FootballField from "./FootballField";

interface FieldType {
  date: string;
  timeFrame: string;
  location: string;
  sport: string;
}

function Filter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listField, setListField] = useState<IField[]>([]);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    // console.log({
    //   date: dayjs(values.date).format("YYYY-MM-DD"),
    //   location: values.location,
    //   sport: values.sport,
    //   page: 1,
    //   startTime: values.timeFrame.split(" - ")[0],
    //   endTime: values.timeFrame.split(" - ")[1],
    //   record: Number.MAX_SAFE_INTEGER,
    // });
    await findField({
      query: {
        date: dayjs(values.date).format("YYYY-MM-DD"),
        location: values.location,
        sport: values.sport,
        page: 1,
        startTime: values.timeFrame.split(" - ")[0],
        endTime: values.timeFrame.split(" - ")[1],
        record: Number.MAX_SAFE_INTEGER,
      },
      successHandler: {
        callBack(data) {
          setListField(data.data);
        },
      },
      errorHandler: {
        callBack(error) {
          setListField([]);
        },
      },
    });
    setIsLoading(false);
  };
  return (
    <Flex vertical style={{ width: "100%", flex: 1 }} gap={16}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item<FieldType>
              label="Môn thể thao"
              name="sport"
              style={{ marginBottom: 8 }}
              rules={[{ required: true, message: "Vui lòng môn thể thao" }]}
            >
              <Select
                placeholder="Chọn môn thể thao"
                options={Object.values(ESport).map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item<FieldType>
              label="Ngày"
              style={{ marginBottom: 8 }}
              name="date"
              rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
            >
              <DatePicker placeholder="Chọn ngày" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item<FieldType>
              label="Khung giờ"
              name="timeFrame"
              style={{ marginBottom: 8 }}
              rules={[{ required: true, message: "Vui lòng chọn khung giờ" }]}
            >
              <Select
                placeholder="Chọn khung giờ"
                options={Object.values(ETimeFrame).map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item<FieldType>
              label="Vị trí"
              name="location"
              style={{ marginBottom: 8 }}
              rules={[{ required: true, message: "Vui lòng chọn vị trí" }]}
            >
              <Select
                placeholder="Chọn vị trí"
                options={Object.values(EDistrict).map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item<FieldType> label="Hành động" style={{ marginBottom: 8 }}>
              <Button htmlType="submit" type="primary">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Flex>
        {listField.length > 0 ? (
          <>
            {listField.map((item) => (
              <FootballField />
            ))}
          </>
        ) : (
          <Typography.Text>Không tìm thấy sân</Typography.Text>
        )}
      </Flex>
    </Flex>
  );
}

export default Filter;
