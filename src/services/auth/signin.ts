import type { ApiContext, User } from "../../types/data";
import { fetcher } from "../../utils";

export type SigninParams = {
  username: string;
  password: string;
};

// 인증 api 로그인
const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signin;
