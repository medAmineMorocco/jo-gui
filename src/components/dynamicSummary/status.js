const STATUS = { WAIT: "wait", PROCESS: "process", FINISH: "finish" };

export const getStatus = (index, current) => {
  if (index < current) return STATUS.FINISH;
  else if (index === current) return STATUS.PROCESS;
  else if (index > current || !current) return STATUS.WAIT;
};
