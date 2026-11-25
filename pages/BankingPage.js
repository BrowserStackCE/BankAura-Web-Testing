const { BasePage } = require("./BasePage");

class BankingPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole("heading", { name: "Banking", exact: true });
    this.subtitle = page.getByText(
      "Manage your accounts, transfers, and payments",
    );
    // Sub-tabs are plain buttons without test ids (names observed)
    this.subTabs = {
      Accounts: page.getByRole("button", { name: "Accounts", exact: true }),
      Transfer: page.getByRole("button", { name: "Transfer", exact: true }),
      Beneficiaries: page.getByRole("button", {
        name: "Beneficiaries",
        exact: true,
      }),
      "Bill Pay": page.getByRole("button", { name: "Bill Pay", exact: true }),
      Cards: page.getByRole("button", { name: "Cards", exact: true }),
      Statements: page.getByRole("button", {
        name: "Statements",
        exact: true,
      }),
    };

    // Accounts tab
    this.totalBalanceLabel = page.getByText("TOTAL BALANCE");
    this.searchInput = page.getByPlaceholder("Search transactions...");
    // Accessible names are lowercase in the a11y tree ("all", "credit", "debit")
    this.filterButtons = {
      All: page.getByRole("button", { name: /^all$/i }),
      Credit: page.getByRole("button", { name: /^credit$/i }),
      Debit: page.getByRole("button", { name: /^debit$/i }),
    };
    this.exportButton = page.getByRole("button", { name: "Export" });
    // Transaction rows show a type label (observed: BILL_PAY, SWIFT) and a
    // signed amount; debit amounts read like "-$122.00"
    this.transactionRows = page.getByText(/^(BILL_PAY|SWIFT)$/);
    this.debitAmounts = page.getByText(/^-\$[\d,]+\.\d{2}$/);
    this.noTransactionsMessage = page.getByText("No transactions found");

    // Transfer tab (ids / data-testid observed)
    this.transferHeading = page.getByRole("heading", { name: "Fund Transfer" });
    this.fromAccountSelect = page.getByTestId("from-account-select");
    this.toAccountInput = page.getByTestId("to-account-input");
    this.amountInput = page.getByTestId("transfer-amount-input");
    this.methodSelect = page.getByTestId("transfer-method-select");
    this.remarksInput = page.getByTestId("transfer-remarks-input");
    this.initiateTransferButton = page.getByRole("button", {
      name: "Initiate Transfer",
    });

    // Beneficiaries tab
    this.beneficiariesHeading = page.getByRole("heading", {
      name: "Saved Beneficiaries",
    });
    this.addBeneficiaryButton = page.getByRole("button", {
      name: "Add Beneficiary",
    });

    // Bill Pay tab
    this.payBillsHeading = page.getByRole("heading", { name: "Pay Bills" });
    this.billCategoryButtons = (name) =>
      page.getByRole("button", { name, exact: true });
    this.providerInput = page.getByPlaceholder(
      "e.g. National Grid, Comcast, AT&T",
    );

    // Cards tab
    this.cardManagementHeading = page.getByRole("heading", {
      name: "Card Management",
    });
    this.requestCardButton = page.getByRole("button", { name: "Request Card" });

    // Statements tab
    this.statementHeading = page.getByRole("heading", {
      name: "Download Statement",
    });
    this.pdfFormatButton = page.getByRole("button", { name: /^PDF/ });
    this.excelFormatButton = page.getByRole("button", { name: /^Excel/ });
  }

  /** @param {"Accounts"|"Transfer"|"Beneficiaries"|"Bill Pay"|"Cards"|"Statements"} name */
  async openSubTab(name) {
    await this.subTabs[name].click();
  }

  async filterBy(name) {
    await this.filterButtons[name].click();
  }

  async search(text) {
    await this.searchInput.fill(text);
  }
}

module.exports = { BankingPage };
