import axios, { AxiosRequestConfig } from "axios";

const fetchData = async (
  url: string,
  method: AxiosRequestConfig["method"] = "GET",
  body?: Record<string, any>
) => {
  const { data } = await axios({
    method,
    data: body,
    url,
  });

  return data;
};

export default fetchData;
