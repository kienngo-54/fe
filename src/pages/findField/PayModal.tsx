import { Modal } from "antd";
import React from "react";

import { PayPalButton } from "react-paypal-button-v2";
import { IField } from "../../@types/entities/Field";
import { handlePaypalSuccess } from "../../apis/booking";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTE from "../../constants/routes";

interface IPayModalProps {
  open: boolean;
  onClose: () => void;
  data: IField;
}

function PayModal(props: IPayModalProps) {
  const { open, onClose, data } = props;
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
        amount={data.price}
        onSuccess={async (details: any, data: any) => {
          const result = await handlePaypalSuccess({
            body: {
              orderId: data.orderID,
            },
            successHandler: {
              callBack(data) {
                toast.success("Thanh toán thành công");
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
