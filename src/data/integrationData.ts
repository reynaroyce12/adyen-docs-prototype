export const useCaseData: Record<
  string,
  {
    label: string;
    description: string;
  }
> = {
  online: {
    label: "Online payments",
    description: "Accept payments through your website or app",
  },

  "in-person": {
    label: "In-person payments",
    description: "Accept payments at physical locations",
  },

  platform: {
    label: "Platform / marketplace",
    description: "Build payment experiences for your users",
  },

  payouts: {
    label: "Payouts",
    description: "Send funds to customers or users",
  },
};

export const frontendData: Record<
  string,
  {
    label: string;
  }
> = {
  web: {
    label: "Web",
  },

  ios: {
    label: "iOS",
  },

  android: {
    label: "Android",
  },

  "react-native": {
    label: "React Native",
  },

  flutter: {
    label: "Flutter",
  },
};

export const frameworkData: Record<
  string,
  {
    label: string;
  }
> = {
  react: {
    label: "React",
  },

  vue: {
    label: "Vue.js",
  },

  angular: {
    label: "Angular",
  },

  vanilla: {
    label: "Vanilla JavaScript",
  },
};

export const backendData: Record<
  string,
  {
    label: string;
    language: string;
  }
> = {
  node: {
    label: "Node.js",
    language: "javascript",
  },

  java: {
    label: "Java",
    language: "java",
  },

  python: {
    label: "Python",
    language: "python",
  },

  go: {
    label: "Go",
    language: "go",
  },

  dotnet: {
    label: ".NET",
    language: "csharp",
  },
};

export const startingPointData: Record<
  string,
  {
    label: string;
    startStep: number;
  }
> = {
  scratch: {
    label: "Starting from scratch",
    startStep: 1,
  },

  "test-account": {
    label: "Test account ready",
    startStep: 2,
  },

  credentials: {
    label: "API credentials ready",
    startStep: 3,
  },
};