export const getKoreanDate = () => {
  const today = new Date();
  today.setHours(today.getHours() + 9); // UTC 시간에 9시간 더함
  return today.toISOString().split("T")[0]; // 변환된 한국 시간 반환
};
