export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error(errorRes.message ?? "API 요청 중에 에러 발생!");
    throw error;
  }

  return res.json();
};
