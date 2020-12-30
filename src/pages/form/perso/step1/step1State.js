export const persostep1State = (values) => {
  const data = {
    thematic: "MAISON",
    questions: [
      {
        question: "5f555eea00a7c",
        response: values["5f555eea00a7c"],
      },
      {
        question: "5f556050d0a88",
        response: values["5f556050d0a88"],
      },
      {
        question: "5fe305634e6f2",
        response: values["5fe305634e6f2"],
      },
      {
        question: "5f55608002862",
        response: values["5f55608002862"],
      },
      {
        question: "5fe30bac50656",
        response: values["5fe30bac50656"],
      },
      {
        question: "5fe46949b764d",
        response: values["5fe46949b764d"],
      },
      {
        question: "5fe30b3a5a6b4",
        response: values["5fe30b3a5a6b4"],
      },
      {
        question: "5f555f180a442",
        response: values["5f555f180a442"],
      },
      {
        question: "5f7f230d75c78",
        response: values["5f7f230d75c78"],
      },
      {
        question: "5f555f8af3776",
        response: values["5f555f8af3776"],
      },
      {
        question: "5f7f2382ba8a0",
        response: values["5f7f2382ba8a0"],
      },
      {
        question: "5f555faf640d3",
        response: values["5f555faf640d3"],
      },
      {
        question: "5f7f23ce239c1",
        response: values["5f7f23ce239c1"],
      },
      {
        question: "5f55600ed2c60",
        response: values["5f55600ed2c60"],
      },
      {
        question: "5fe468b6e6a06",
        response: values["5fe468b6e6a06"],
      },
      {
        question: "5fec50d0b6047",
        response: values["5fec50d0b6047"],
      },
      {
        question: "5fec531f4416c",
        response: values["5fec531f4416c"],
      },
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    const actionsData = {
      actions: [
        {
          action: "5f60a1229564b",
          response: values["5f60a1229564b"],
        },
        {
          action: "5f7f26f4b6606",
          response: values["5f7f26f4b6606"],
        },
        {
          action: "5f7f271841ce5",
          response: values["5f7f271841ce5"],
        },
        {
          action: "5f7f2742cdf84",
          response: values["5f7f2742cdf84"],
        },
        {
          action: "5f60a1399f5ab",
          response: values["5f60a1399f5ab"],
        },
      ],
      settings: [
        {
          setting: "lunch-switch-1",
          response: values["lunch-switch-1"] || false,
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
