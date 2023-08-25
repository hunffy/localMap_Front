import axios from "axios";
import { BaseUrl } from "../utils/axiosConfig";
import {
  getEditorProposalParams,
  getLocationInfoParams,
  getStroeParams,
} from "../types/main/mainTypes";

export const getNearLocalStore = async (params: getStroeParams) => {
  const url = BaseUrl + "/restaurant/get_near_rest";
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    alert("위치 정보를 확인해주세요");
  }
};

export const getEventLocalStore = async (params: getStroeParams) => {
  const url = BaseUrl + "/restaurant/get_event_rest";
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    alert("위치 정보를 확인해주세요");
  }
};

export const getLocationInfo = async (params: getLocationInfoParams) => {
  const url = BaseUrl + "/hjd/search/";
  try {
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: params,
    });
    return response.data;
  } catch (error) {
    alert("헤더 오류를 확인해주세요");
  }
};

export const getEditorProposal = async (params: getEditorProposalParams) => {
  const url = BaseUrl + "/editor/list";
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    alert("오류를 확인해주세요");
  }
};
