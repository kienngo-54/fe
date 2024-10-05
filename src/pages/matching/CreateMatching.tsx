import React, { useEffect, useState } from "react";
import { Button, Flex, Table, TableProps, Typography } from "antd";
import { getListBookingField } from "../../apis/booking";
import dayjs from "dayjs";

function CreateMatching() {
  const [listBooking, setListBooking] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getListBooking() {
      setLoading(true);
      await getListBookingField({
        successHandler: {
          callBack(data) {
            if (data.data) {
              setListBooking(data.data);
            } else {
              setListBooking([]);
            }
          },
        },
      });
      setLoading(false);
    }
    getListBooking();
  }, []);

  const columns: TableProps<any>["columns"] = [
    {
      title: "Tên sân",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Môn thể thao",
      dataIndex: "sport",
      key: "sport",
      render: (sport) => sport,
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "usedDate",
      key: "captain",
      render: (_, record) =>
        `${dayjs(record.startTime).format("DD/MM/YYYY")} ${dayjs(record.startTime).format("HH:mm")} - ${dayjs(record.endTime).format("HH:mm")}`,
    },
    {
      title: "Giá tiền",
      dataIndex: "members",
      key: "members",
      render: (totalPrice) => totalPrice,
    },
    {
      title: "Ngày đặt",
      dataIndex: "createdAt",
      key: "members",
      render: (createdAt) => dayjs(createdAt).format("HH:mm DD/MM/YYYY"),
    },
    {
      title: "Hành động",
      dataIndex: "members",
      key: "members",
      render: (_, record) => <Button type="primary">Tìm người</Button>,
    },
  ];
  return (
    <Flex vertical gap={24}>
      <Typography.Title level={3} style={{ margin: 0 }}>
        Cáp kèo
      </Typography.Title>
      <Table<any> columns={columns} dataSource={[]} loading={loading} />
    </Flex>
  );
}

export default CreateMatching;
