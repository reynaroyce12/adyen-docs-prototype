import { useState } from "react";
import Layout from "./components/Layout";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import IntegrationPath from "./pages/IntegrationPath";

function App() {
  const [step, setStep] = useState(1);

  const [useCase, setUseCase] = useState("online");

  const [frontend, setFrontend] = useState("web");
  const [framework, setFramework] = useState("react");
  const [backend, setBackend] = useState("node");

  const [startingPoint, setStartingPoint] = useState("scratch");

  if (step === 4) {
    return (
      <Layout hideSidebar>
        <IntegrationPath
          useCase={useCase}
          frontend={frontend}
          framework={framework}
          backend={backend}
          startingPoint={startingPoint}
          onStartOver={() => setStep(1)}
        />
      </Layout>
    );
  }

  return (
    <Layout currentStep={step}>
      {step === 1 && (
        <StepOne
          selected={useCase}
          onSelect={setUseCase}
          onContinue={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          frontend={frontend}
          framework={framework}
          backend={backend}
          onFrontendChange={setFrontend}
          onFrameworkChange={setFramework}
          onBackendChange={setBackend}
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <StepThree
          selected={startingPoint}
          onSelect={setStartingPoint}
          useCase={useCase}
          frontend={frontend}
          framework={framework}
          backend={backend}
          onBack={() => setStep(2)}
          onChangeSetup={() => setStep(1)}
          onGenerate={() => setStep(4)}
        />
      )}
    </Layout>
  );
}

export default App;