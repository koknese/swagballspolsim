import { select, Separator, input, confirm } from "@inquirer/prompts";

let thing = true;

const action = await select({
  message: "What will you do today?",
  choices: [
    {
      name: "Campaign for votes",
      value: "campaign",
      description: "Increase your popularity.",
    },
    {
      name: "Debate with rivals",
      value: "debate",
      description: "Challenge your opponents publicly.",
    },
    {
      name: "Fundraise",
      value: "fundraise",
      description: "Raise money for your campaign.",
    },
    {
      name: "Rest",
      value: "rest",
      description: "Take a break to plan your next move.",
    },
    new Separator(),
    {
      name: "Test",
      value: "tst",
      disabled: test() ? false : true,
    },
  ],
});

function test() {
  if (thing === false) {
    return true;
  }
}
