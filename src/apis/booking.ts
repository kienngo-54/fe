import { callApi } from ".";
import {
  TApiProps,
  TResponseDataArr,
  TResponseDataObj,
  TResponseErrorCommon,
} from "../@types/apis";
import { RDBookingField, RDCommon } from "../@types/apis/RequestData";
import END_POINT from "../constants/endpoint";

export const bookingField = async ({
  name = "bookingField",
  body,
  successHandler,
  errorHandler,
}: {
  name?: string;
  body: RDBookingField["body"];
  successHandler?: TApiProps<
    RDBookingField,
    TResponseDataObj<any>,
    any
  >["successHandler"];
  errorHandler?: TApiProps<
    RDBookingField,
    TResponseDataObj<any>,
    TResponseErrorCommon<undefined>
  >["errorHandler"];
}) => {
  const result = await callApi<RDBookingField, TResponseDataObj<any>>({
    name,
    data: {
      body,
    },
    path: END_POINT.BOOKING_FIELD,
    method: "POST",
    successHandler,
    errorHandler,
  });

  return result;
};

export const getListBookingField = async ({
  name = "getListBookingField",
  successHandler,
  errorHandler,
}: {
  name?: string;

  successHandler?: TApiProps<
    RDCommon,
    TResponseDataObj<any>,
    any
  >["successHandler"];
  errorHandler?: TApiProps<
    RDCommon,
    TResponseDataObj<any>,
    TResponseErrorCommon<undefined>
  >["errorHandler"];
}) => {
  const result = await callApi<RDCommon, TResponseDataObj<any>>({
    name,
    path: END_POINT.BOOKING_FIELD,
    method: "GET",
    successHandler,
    errorHandler,
  });

  return result;
};
