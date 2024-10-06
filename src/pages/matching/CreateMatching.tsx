import React, { useEffect, useState } from "react";
import { Button, Flex, Table, TableProps, Typography } from "antd";
import { getListBookingField } from "../../apis/booking";
import dayjs from "dayjs";
import { d3Splitting } from "../../utils/number";
import { IBooking } from "../../@types/entities/Booking";
import MatchingForm from "./MatchingForm";

function CreateMatching() {
  const [listBooking, setListBooking] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<{
    data: IBooking | null;
    open: boolean;
  }>({ data: null, open: false });
  async function getListBooking() {
    setLoading(true);
    await getListBookingField({
      successHandler: {
        callBack(data) {
          setListBooking(data.data);
        },
      },

      errorHandler: {
        callBack() {
          setListBooking([]);
        },
      },
    });
    setLoading(false);
  }

  useEffect(() => {
    getListBooking();
  }, []);

  const handleOpen = (record: IBooking) => () => {
    setSelected({ data: { ...record }, open: true });
  };

  const handleClose = () => {
    setSelected({ data: null, open: false });
  };

  const handleReload = () => {
    getListBooking();
  };

  const columns: TableProps<IBooking>["columns"] = [
    {
      title: "Tên sân",
      dataIndex: "fieldName",
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
      key: "usedDate",
      render: (_, record) =>
        `${record.startTime} -> ${record.endTime} ${record.date}`,
    },
    {
      title: "Giá tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => d3Splitting(totalPrice),
    },
    {
      title: "Ngày đặt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => dayjs(createdAt).format("HH:mm DD/MM/YYYY"),
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Button type="primary" disabled={record.match} onClick={handleOpen(record)}>
          Tìm người
        </Button>
      ),
    },
  ];
  return (
    <Flex vertical gap={24}>
      <Typography.Title level={3} style={{ margin: 0 }}>
        Cáp kèo
      </Typography.Title>
      <Table<any>
        columns={columns}
        dataSource={listBooking}
        loading={loading}
      />
      <MatchingForm
        open={selected.open}
        data={selected.data}
        onClose={handleClose}
        reload={handleReload}
      />
    </Flex>
  );
}

export default CreateMatching;
