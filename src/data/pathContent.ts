export type PathStepContent = {
  eyebrow: string;
  title: string;
  intro: string;

  actions?: {
    title: string;
    description: string;
  }[];

  callout?: {
    title: string;
    description: string;
  };

  links?: {
    label: string;
    url: string;
  }[];

  whyItMatters: string;

  helpfulLinks: {
    label: string;
    url: string;
  }[];
};

export const pathContent: Record<number, PathStepContent> = {
  1: {
    eyebrow: "Step 1",
    title: "Set up your test account",
    intro:
      "Create a test environment so you can build and validate your integration without processing live payments.",

    actions: [
      {
        title: "Create your Adyen account",
        description: "Start with a test Customer Area account.",
      },
      {
        title: "Review your account structure",
        description:
          "Use your company account and merchant account setup to mirror how you plan to operate.",
      },
    ],

    callout: {
      title: "You only need this once",
      description:
        "If you already have a test account, you can move straight to API credentials.",
    },

    links: [
      {
        label: "Online payments integration checklist",
        url: "https://docs.adyen.com/online-payments/integration-checklist/",
      },
    ],

    whyItMatters:
      "Your test environment gives you a safe place to build and validate the integration before using live payment details.",

    helpfulLinks: [
      {
        label: "Online payments checklist",
        url: "https://docs.adyen.com/online-payments/integration-checklist/",
      },
      {
        label: "Development resources",
        url: "https://docs.adyen.com/development-resources/",
      },
    ],
  },

  2: {
    eyebrow: "Step 2",
    title: "Get your API credentials",
    intro:
      "Use an API key for server-side requests and a client key for your browser or app integration.",

    actions: [
      {
        title: "Open API credentials",
        description:
          "In your Customer Area, go to Developers → API credentials.",
      },
      {
        title: "Generate and store your API key",
        description:
          "Keep your API key on the server and never expose it in client-side code.",
      },
      {
        title: "Get your client key",
        description:
          "Use the client key from your credential for Adyen's client-side components.",
      },
    ],

    callout: {
      title: "Keep secrets server-side",
      description:
        "Your API key authenticates server requests and should not be included in frontend code.",
    },

    links: [
      {
        label: "API credentials",
        url: "https://docs.adyen.com/development-resources/api-credentials/",
      },
    ],

    whyItMatters:
      "API credentials identify and authorize your integration. Keep your API key server-side and use the client key only where intended in the client integration.",

    helpfulLinks: [
      {
        label: "API credentials",
        url: "https://docs.adyen.com/development-resources/api-credentials/",
      },
      {
        label: "Development resources",
        url: "https://docs.adyen.com/development-resources/",
      },
    ],
  },

  3: {
    eyebrow: "Step 3",
    title: "Choose your integration flow",
    intro:
      "For most online payment integrations, start with the Sessions flow.",

    callout: {
      title: "Recommended",
      description:
        "Sessions uses a single Checkout API request and supports most online payment integrations.",
    },

    links: [
      {
        label: "Build your integration",
        url: "https://docs.adyen.com/online-payments/build-your-integration/",
      },
      {
        label: "Sessions flow",
        url: "https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/",
      },
    ],

    whyItMatters:
      "The integration flow determines how your server and client exchange payment data. Sessions is the standard starting point for most online payment integrations.",

    helpfulLinks: [
      {
        label: "Sessions flow overview",
        url: "https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/",
      },
      {
        label: "Choose your integration",
        url: "https://docs.adyen.com/online-payments/build-your-integration/",
      },
      {
        label: "Advanced flow",
        url: "https://docs.adyen.com/online-payments/build-your-integration/advanced-flow/",
      },
    ],
  },

  4: {
    eyebrow: "Step 4",
    title: "Add checkout",
    intro:
      "Connect your server-side session to Adyen's client-side payment experience.",

    actions: [
      {
        title: "Create a payment session",
        description:
          "Call the Sessions endpoint from your server using your API credentials.",
      },
      {
        title: "Add Adyen Web",
        description:
          "Install the Adyen Web library and initialize checkout on your frontend.",
      },
      {
        title: "Render Drop-in",
        description:
          "Mount Drop-in in your payment page and pass it the session data.",
      },
    ],

    callout: {
      title: "Your integration has three parts",
      description:
        "Payment server, client application and webhook server work together to complete the payment lifecycle.",
    },

    links: [
      {
        label: "Sessions flow integration guide",
        url: "https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/",
      },
    ],

    whyItMatters:
      "This is where your server-side payment session connects to the checkout experience your shopper sees.",

    helpfulLinks: [
      {
        label: "Build your integration",
        url: "https://docs.adyen.com/online-payments/build-your-integration/",
      },
      {
        label: "Sessions flow",
        url: "https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/",
      },
    ],
  },

  5: {
    eyebrow: "Step 5",
    title: "Configure webhooks",
    intro:
      "Use webhooks to receive asynchronous payment events and keep your application state in sync.",

    actions: [
      {
        title: "Create your webhook endpoint",
        description:
          "Expose a server endpoint that can receive Adyen event notifications.",
      },
      {
        title: "Subscribe in the Customer Area",
        description:
          "Configure the endpoint for your test environment.",
      },
      {
        title: "Handle payment outcomes",
        description:
          "Use webhook events as the reliable source for payment status updates.",
      },
    ],

    callout: {
      title: "Don't rely only on the browser",
      description:
        "Payment results can continue after the shopper leaves your frontend, so server-side events matter.",
    },

    links: [
      {
        label: "Webhooks",
        url: "https://docs.adyen.com/development-resources/webhooks/",
      },
    ],

    whyItMatters:
      "Payments can complete asynchronously. Webhooks keep your backend synchronized with payment status changes and other Adyen events.",

    helpfulLinks: [
      {
        label: "Webhooks overview",
        url: "https://docs.adyen.com/development-resources/webhooks/",
      },
      {
        label: "Configure webhooks",
        url: "https://docs.adyen.com/development-resources/webhooks/configure-and-manage/",
      },
      {
        label: "Handle webhook events",
        url: "https://docs.adyen.com/development-resources/webhooks/handle-webhook-events/",
      },
    ],
  },

  6: {
    eyebrow: "Step 6",
    title: "Test your integration",
    intro:
      "Validate the full payment flow in Adyen's test environment before you accept live payments.",

    actions: [
      {
        title: "Run a successful payment",
        description:
          "Verify the client, server and webhook flow all complete as expected.",
      },
      {
        title: "Test failure scenarios",
        description:
          "Check refused payments, authentication flows and error handling.",
      },
      {
        title: "Confirm webhook handling",
        description:
          "Make sure your server receives and processes the expected events.",
      },
    ],

    callout: {
      title: "Test end to end",
      description:
        "Validate client-side, server-side and webhook behavior together before moving to production.",
    },

    links: [
      {
        label: "Testing resources",
        url: "https://docs.adyen.com/development-resources/testing/",
      },
    ],

    whyItMatters:
      "Testing the full payment lifecycle helps you catch integration issues before shoppers encounter them in production.",

    helpfulLinks: [
      {
        label: "Testing resources",
        url: "https://docs.adyen.com/development-resources/testing/",
      },
      {
        label: "Developer dashboard",
        url: "https://docs.adyen.com/development-resources/developer-dashboard/",
      },
    ],
  },

  7: {
    eyebrow: "Step 7",
    title: "Go live",
    intro:
      "Configure your live environment, verify production settings and run a real payment before launch.",

    actions: [
      {
        title: "Configure your live Customer Area",
        description:
          "Set up account, API communication, webhooks and payment methods for live.",
      },
      {
        title: "Switch to live credentials",
        description:
          "Use the API key and client key generated for your live environment.",
      },
      {
        title: "Run a real payment",
        description:
          "Verify the complete production flow before opening it to shoppers.",
      },
    ],

    callout: {
      title: "Test settings do not carry over",
      description:
        "Your live Customer Area needs its own credentials, webhooks and configuration.",
    },

    links: [
      {
        label: "Go-live checklist",
        url: "https://docs.adyen.com/online-payments/go-live-checklist/",
      },
    ],

    whyItMatters:
      "Your live environment has separate configuration from test, including credentials, webhooks and account settings.",

    helpfulLinks: [
      {
        label: "Go-live checklist",
        url: "https://docs.adyen.com/online-payments/go-live-checklist/",
      },
      {
        label: "Developer dashboard",
        url: "https://docs.adyen.com/development-resources/developer-dashboard/",
      },
    ],
  },
};