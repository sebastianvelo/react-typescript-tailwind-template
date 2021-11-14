import { AxiosRequestConfig, Method } from "axios";

const baseUrl = "http://localhost:5001/template/us-central1/default";

class APIRequest {
  static getLayout = (): AxiosRequestConfig => APIRequest.request("/layout");

  private static request = (resource: string, method: Method = "GET") => ({
    url: `${baseUrl}${resource}`,
    method
  });
}

export default APIRequest;
