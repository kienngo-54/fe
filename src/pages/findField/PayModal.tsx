import { Modal } from "antd";
import React from "react";

import { PayPalButton } from "react-paypal-button-v2";
import { IField } from "../../@types/entities/Field";
import { bookingField, handlePaypalSuccess } from "../../apis/booking";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../constants/routes";

interface IPayModalProps {
  open: boolean;
  onClose: () => void;
  data: IField;
  dateInfo: {
    date: string;
    startTime: string;
    endTime: string;
  };
}

function PayModal(props: IPayModalProps) {
  const { open, onClose, data: fieldInfo, dateInfo } = props;
  const navigate = useNavigate();
  return (
    <Modal
      title="Đặt sân"
      open={open}
      footer={null}
      destroyOnClose
      closable={false}
    >
      <PayPalButton
        amount={fieldInfo.price}
        onSuccess={async (details: any, data: any) => {
          const result = await handlePaypalSuccess({
            body: {
              orderId: data.orderID,
            },
            successHandler: {
              callBack: async () => {
                await bookingField({
                  body: {
                    date: dateInfo.date,
                    fieldId: fieldInfo._id,
                    startTime: dateInfo.startTime,
                    endTime: dateInfo.endTime,
                  },
                  successHandler: {
                    callBack(data) {
                      toast.success("Đặt sân thành công!");
                    },
                  },
                });
                onClose();
                navigate(ROUTE.MATCHING);
              },
            },
          });
        }}
      />
    </Modal>
  );
}

export default PayModal;
