import type { ApiContext, User } from "../../types/data";
import { fetcher } from "../../utils";

export type GetUserParams = {
  // 사용자 id
  id: number;
};

// 사용자 API (개별 취득)
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  // 사용자 API
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getUser;
