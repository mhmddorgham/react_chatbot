import React from 'react';
import ChatBot from 'react-best-chatbot';
// Chatbot for Family Banking System
const Theme = {
  primaryColor: "#1D1D41",
  secondaryColor: "#D53634",
  textPrimaryColor: "#FFFFFF",
  textSecondaryColor: "#FFFFFF",
  background: "#F0F0F0",
  containerStyle: {
    width: 330,
    position: "fixed",
    bottom: 20,
    right: 20,
  },
};

const Options = {
  header: <span style={{ color: "#FFFFFF" }}>FBS Chatbot</span>
};
const CustomComponentWithBubble = ({ answers }) => {
  const { values } = answers;

  let safeAmount = parseInt(values.BankAmount) - parseInt(values.debits) - parseInt(values.internetBill) - parseInt(values.waterBil) - parseInt(values.otherBill)

  if (safeAmount > 0) {
    return (
      <div>
        Total amount in the bank after calculating all expenses = {safeAmount}.
        Amount Safe to spend = {safeAmount}
      </div>
    );
  } else {
    return (
      <div>
        Total amount in the bank after calculating all expenses = {safeAmount}.
        Cannot spend this month.
      </div>
    );
  }

};


const steps = [
  {
    id: 1,
    content: "Hi,Welcome to Family Banking System",
    goTo: 2,
  },
  {
    id: 2,
    content: "Services I provide:",
    options: [
      {
        content: "Show Expenses",
        value: 1,
        goTo: "expenses",
      },
      {
        content: "Show Transactions",
        value: 2,
        goTo: "transactions",
      },
      {
        content: "Calculate Safe Amount to spend",
        value: 3,
        goTo: "BankAmount",
      },
    ],
  },
  {
    id: "expenses",
    content: "Today's Expenses...",
    goTo: 4,
  },

  {
    id: "transactions",
    content: "Past Transactions...",
    goTo: 4,
  },
  {
    id: "BankAmount",
    content: "Type your Amount in Bank",
    receiveInput: true,
    goTo: "Salary",
  },
  {
    id: "Salary",
    content: "Type your salary in month",
    receiveInput: true,
    goTo: "internetBill",
  },
  {
    id: "internetBill",
    content: "Type your internet Bill in month",
    receiveInput: true,
    goTo: "waterBil",
  },
  {
    id: "waterBil",
    content: "Type your Water/Elect Bill in month",
    receiveInput: true,
    goTo: "otherBill",
  },
  {
    id: "otherBill",
    content: "Type your other expanses in month",
    receiveInput: true,
    goTo: "debits",
  },
  {
    id: "debits",
    content: "Type your debits in month",
    receiveInput: true,
    goTo: 3,
  },

  {
    id: 3,
    component: {
      content: CustomComponentWithBubble,
    },
    goTo: 4,
  },
  {
    id: 4,
    content: "Bye!",
    end: true,
  },
];



const Chatbot = () => {
  return (
    <div>
      <ChatBot options={Options} theme={Theme} steps={steps} />
    </div>


  );
};

export default Chatbot;
