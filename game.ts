import { select, Separator, input, confirm } from "@inquirer/prompts";
import chalk from "chalk";

const answer = await select({
  message: `WELCOME
   TO

   SWAGBALLS
   POLITICAL
   SIMULATOR
   2024`,
  choices: [
    {
      name: "Start",
      value: "start",
      description: "Start a new game",
    },
  ],
});

if ("start" == answer) {
  const charName = await input({
    message: "Enter the name of your character",
  });
  const confirmCharName = await confirm({
    message: `The name of your character is ${charName}. Is that correct?`,
  });

  const chooseParty = await select({
    message: "Select your party",
    choices: [
      {
        name: "Nova Svegbolska Partija",
        value: "nova",
        description:
          "Nova is the winner of SwagBalls 2024 November presidential elections. It is a splinter from NSP after NSP related controversy. It was known for always being the runner-up to the NSP, but now with most of NSP gone, they are determined to win these elections, however many voters consider them way too serious and are afraid of having their Soyjak Gold removed. Will you save the Nova from succumbing to hardcore LARP that once doomed SSBP?",
      },
      {
        name: "New Shartyist Party",
        value: "nsp",
        description:
          "NSP is a successor to the SSBP, the first party of the server. They are known for their love of corruption and fraud. It has come to a quick decline due to many members qutting the party or getting executed. Will you be able to bring back NSP to its prime?",
      },
      {
        name: "Independent",
        value: "ind",
        description:
          "Why join the big parties? Why are they so serious? Take matter into your won hands!",
      },
      new Separator(),
      {
        name: "PSPS",
        value: "psps",
        disabled: "(under development)",
      },
      {
        name: "OBM",
        value: "obm",
        disabled: "(under development)",
      },
      {
        name: "NEP",
        value: "nep",
        disabled: "(under development)",
      },
    ],
  });

  const confirmParty = await confirm({
    message: `You chose ${chooseParty}. Is that correct?`,
  });

  if (chooseParty == "ind") {
    const confirmChar = await confirm({
      message: `Your character is an independent named ${charName}. Is that correct?`,
    });
  } else {
    const confirmChar = await confirm({
      message: `Your character is ${charName} of ${chooseParty}`,
    });
  }

  console.log(`

    LET THE GAME BEGIN.

    `);
  for (let day = 1; day <= 5; day++) {
    console.log(`\nDay ${day}:`);
    console.log("Your current status is:");
    console.log(`Character: ${charName}`);
    console.log(`Party: ${chooseParty}`);

    // Turn Actions
    const action = await select({
      message: "What will you do today?",
      choices: [
        {
          name: "Campaign for votes",
          value: "campaign",
          description: "Make a few posters, post a few messages.",
        },
        {
          name: "Debate with rivals",
          value: "debate",
          description:
            "Big risk, even bigger reward. Participate in the election night debate on day 4!",
          disabled: day === 4 ? false : "Available on day 4",
        },
        {
          name: "Fundraise",
          value: "fundraise",
          description: "Gamble and win money!",
        },
        {
          name: "Sleep",
          value: "y",
          description: "Continue on to the next day.",
        },
        new Separator("\nParty specific options"),
        {
          name: "Balkan Rage",
          value: "crptn",
          description:
            "This is available only for NSP candidates. Generate money using questionable means and land it right into the pockets of your new supporters!",
        },
        {
          name: chalk.red("United Russia LARP"),
          value: "rig",
          description:
            "This is available only for NSP candidates. Weaponize an army of alt accounts and (possibly) win the election.",
        },
        new Separator(),
        {
          name: "I just want to grill!",
          value: "smr",
          description:
            "This is available only for Nova members. Gain the vote of members that just want to grill.",
        },
        {
          name: chalk.red("The House Always Wins"),
          value: "smr",
          description:
            "This is available only for Nova members. Make the moderators partake in tactical voting by watching pre-mature results and voting accordingly.",
        },
        new Separator(),
        {
          name: "Do nothing. Win.",
          value: "chr",
          description:
            "This is available only for independents. Gain the funding of the big parties and make them fight over your support!",
        },
        {
          name: chalk.red("Xertunites, flee the ship!"),
          value: "smr",
          description: "This is available only for independents. 1.",
        },
      ],
    });

    // checking for debate day
    function isDebateDay() {
      if (day === 5) {
        return true;
      } else {
        return false;
      }
    }

    // Resolve Action
    switch (action) {
      case "campaign":
        console.log("You campaigned and gained more supporters!");
        break;
      case "debate":
        break;
      case "fundraise":
        let number = Math.floor(Math.random() * 10);
        if (number == 5) {
          console.log(
            "After an endless night in a casino you've made enough money to buy more announcement channel posting permissions.",
          );
          action;
        } else {
          console.log(
            `Nothing happened, but you lost on some supporters. You rolled ${number}, but to win you needed to roll 5.`,
          );
          action;
        }
        action;
      case "rest":
        console.log(
          "You've done enough today. More greatness awaits us tommorow.",
        );
        break;
    }
  }
}
