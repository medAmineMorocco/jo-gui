export const persostep6State = (values) => {
  const data = {
    thematic: "DEPLACEMENT",
    questions: [
      {
        question: "5fe09867744e9",
        response: values["5fe09867744e9"],
      },
      {
        question: "5f5575ba93b32",
        response: values["5f5575ba93b32"],
      },
      {
        question: "5f5575dc9b4ac",
        response: values["5f5575dc9b4ac"],
      },
      {
        question: "5f55763a2d2b1",
        response: values["5f55763a2d2b1"],
      },
      {
        question: "5f55776c56494",
        response: values["5f55776c56494"],
      },
      {
        question: "5f557851c481e",
        response: values["5f557851c481e"],
      },
      {
        question: "5f5578d055227",
        response: values["5f5578d055227"],
      },
      {
        question: "5f5578e039aea",
        response: values["5f5578e039aea"],
      },
      {
        question: "5f55791c16575",
        response: values["5f55791c16575"],
      },
      {
        question: "5f55797b8b5f2",
        response: values["5f55797b8b5f2"],
      },
      {
        question: "5f55799ed06a0",
        response: values["5f55799ed06a0"],
      },
      {
        question: "5f5579c25b653",
        response: values["5f5579c25b653"],
      },
      {
        question: "5f5579df87f62",
        response: values["5f5579df87f62"],
      },
      {
        question: "5f5579f265cce",
        response: values["5f5579f265cce"],
      },
      {
        question: "5f557a0b076f3",
        response: values["5f557a0b076f3"],
      },
      {
        question: "5f557a34ea334",
        response: values["5f557a34ea334"],
      },
      {
        question: "5f557a44eafc4",
        response: values["5f557a44eafc4"],
      },
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    const actionsData = {
      actions: [
        {
          action: "5f60aa994d161",
          response: values["5f60aa994d161"],
        },
        {
          action: "5f60aaad99c98",
          response: values["5f60aaad99c98"],
        },
        {
          action: "5f60aac6c60bf",
          response: values["5f60aac6c60bf"],
        },
        {
          action: "5f60aadf53101",
          response: values["5f60aadf53101"],
        },
      ],
      settings: [
        {
          setting: "deplacement-switch-1",
          response: values["deplacement-switch-1"] || false,
        },
        {
          setting: "deplacement-switch-2",
          response: values["deplacement-switch-2"] || false,
        },
        {
          setting: "deplacement-switch-3",
          response: values["deplacement-switch-3"] || false,
        },
      ],
    };
    return {
      ...data,
      ...actionsData,
    };
  } else {
    return data;
  }
};
