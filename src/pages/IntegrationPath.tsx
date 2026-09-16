import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { pathContent } from "../data/pathContent";

import {
    Check,
    CreditCard,
    Code2,
    Server,
    UserRound,
    ExternalLink,
    ChevronRight,
    MessageSquareText,
    MoreVertical,
    Share2,
} from "lucide-react";

import {
    useCaseData,
    frontendData,
    frameworkData,
    backendData,
    startingPointData,
} from "../data/integrationData";

type IntegrationPathProps = {
    useCase: string;
    frontend: string;
    framework: string;
    backend: string;
    startingPoint: string;
    onStartOver: () => void;
};

const customTheme = {
    ...vscDarkPlus,

    'string': {
        color: '#5edc8a',
    },

    'attr-value': {
        color: '#5edc8a',
    },

    'template-string': {
        color: '#5edc8a',
    },
};

// const steps = [
//     {
//         number: 1,
//         title: "Set up your test account",
//         description: "Create your Adyen test environment",
//     },
//     {
//         number: 2,
//         title: "Get API credentials",
//         description: "Retrieve your API key and client key",
//     },
//     {
//         number: 3,
//         title: "Choose your integration flow",
//         description: "Select the right flow for your use case",
//     },
//     {
//         number: 4,
//         title: "Add checkout",
//         description:
//             frontend === "web"
//                 ? `Integrate Adyen into your ${frameworkLabel} app`
//                 : `Integrate Adyen into your ${frontendLabel} app`,
//     },
//     {
//         number: 5,
//         title: "Configure webhooks",
//         description: `Connect payment events to your ${backendLabel} server`,
//     },
//     {
//         number: 6,
//         title: "Test integration",
//         description: "Simulate successful and failed payments",
//     },
//     {
//         number: 7,
//         title: "Go live",
//         description: "Prepare your integration for production",
//     },
// ];

function IntegrationPath({
    useCase,
    framework,
    backend,
    startingPoint,
    onStartOver,
    frontend
}: IntegrationPathProps) {

    const useCaseInfo = useCaseData[useCase];
    const frontendInfo = frontendData[frontend];
    const frameworkInfo = frameworkData[framework];
    const backendInfo = backendData[backend];
    const startingInfo = startingPointData[startingPoint];

    const useCaseLabel = useCaseInfo?.label ?? useCase;
    const frontendLabel = frontendInfo?.label ?? frontend;
    const frameworkLabel = frameworkInfo?.label ?? framework;
    const backendLabel = backendInfo?.label ?? backend;
    const startingLabel = startingInfo?.label ?? startingPoint;

    const steps = [
        {
            number: 1,
            title: "Set up your test account",
            description: "Create your Adyen test environment",
        },
        {
            number: 2,
            title: "Get API credentials",
            description: "Retrieve your API key and client key",
        },
        {
            number: 3,
            title: "Choose your integration flow",
            description: "Select the right flow for your use case",
        },
        {
            number: 4,
            title: "Add checkout",
            description:
                frontend === "web"
                    ? `Integrate Adyen into your ${frameworkLabel} app`
                    : `Integrate Adyen into your ${frontendLabel} app`,
        },
        {
            number: 5,
            title: "Configure webhooks",
            description: `Connect payment events to your ${backendLabel} server`,
        },
        {
            number: 6,
            title: "Test integration",
            description: "Simulate successful and failed payments",
        },
        {
            number: 7,
            title: "Go live",
            description: "Prepare your integration for production",
        },
    ];

    const initialStep =
        startingPoint === "scratch"
            ? 1
            : startingPoint === "test-account"
                ? 2
                : 3;


    const [currentStep, setCurrentStep] = useState(initialStep);
    const [viewMode, setViewMode] = useState<"essential" | "full">("essential");
    const [activeCodeTab, setActiveCodeTab] = useState<
        "frontend" | "backend" | "curl"
    >("frontend");
    const stepContent = pathContent[currentStep];

    //     const codeExample = `// Create a session on your server
    // const response = await fetch('/api/create-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     amount: { value: 1000, currency: 'EUR' },
    //     reference: 'Your order reference'
    //   })
    // });`;

    const backendCode = `// Create a session on your server
const response = await fetch('/api/create-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: {
      value: 1000,
      currency: 'EUR'
    },
    reference: 'Your order reference'
  })
});`;
    const frontendCode = `// Initialize Adyen Checkout in your React app
const checkout = await AdyenCheckout({
  environment: "test",
  clientKey: "YOUR_CLIENT_KEY",
  session
});`;

    const curlCode = `curl https://checkout-test.adyen.com/v72/sessions \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

    const displayedCode =
        activeCodeTab === "frontend"
            ? frontendCode
            : activeCodeTab === "backend"
                ? backendCode
                : curlCode;

    const progress = Math.round((currentStep / steps.length) * 100);

    // const currentStepData = steps.find(
    //     (step) => step.number === currentStep
    // )!;

    const nextStep =
        currentStep < steps.length
            ? steps[currentStep]
            : null;

    function markAsComplete() {
        setCurrentStep((prev) => {
            return prev < steps.length ? prev + 1 : steps.length;
        });
    }
    function previousStep() {
        setCurrentStep((prev) => {
            return prev > 1 ? prev - 1 : 1;
        });
    }
    return (
        <div className="final-screen">
            {/* LEFT SIDEBAR */}
            <aside className="integration-sidebar">
                <button className="all-guides">← All guides</button>

                <div className="final-sidebar-title">
                    <div className="sidebar-title-row">
                        <h2>Guided integration path</h2>
                        <span className="beta-badge">Beta</span>
                    </div>

                    <p>
                        Get a personalized step-by-step path to build with Adyen.
                    </p>
                </div>

                <div className="final-step-list">
                    {steps.map((step) => {
                        const completed = step.number < currentStep;
                        const active = step.number === currentStep;

                        return (
                            <button
                                key={step.number}
                                type="button"
                                className={`final-step ${active ? "active" : ""}`}
                                onClick={() => setCurrentStep(step.number)}
                            >
                                <div
                                    className={`final-step-number ${completed ? "completed" : ""
                                        } ${active ? "active" : ""}`}
                                >
                                    {completed ? <Check size={14} /> : step.number}
                                </div>

                                <div className="final-step-copy">
                                    <h3>
                                        {step.number}. {step.title}
                                    </h3>

                                    <p>{step.description}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="restart-card">
                    <h3>Need a different setup?</h3>
                    <p>You can restart and create a new path anytime.</p>

                    <button onClick={onStartOver}>
                        ↻ Start over
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="integration-main">
                <div className="integration-title-row">
                    <div>
                        <span className="integration-eyebrow">
                            Guided integration path
                        </span>

                        <h1>Your integration path</h1>

                        <p>
                            A personalized guide to help you build with Adyen, faster.
                        </p>
                    </div>

                    <div className="integration-title-actions">
                        <button>
                            <Share2 size={16} />
                            Share
                        </button>

                        <button className="icon-button">
                            <MoreVertical size={17} />
                        </button>
                    </div>
                </div>

                <div className="integration-tags">
                    <div className="integration-tag">
                        <CreditCard size={15} />
                        <span>{useCaseLabel}</span>
                    </div>

                    <div className="integration-tag">
                        <Code2 size={15} />
                        <span>
                            {frontend === "web" ? frameworkLabel : frontendLabel}
                        </span>
                    </div>

                    <div className="integration-tag">
                        <Server size={15} />
                        <span>{backendLabel}</span>
                    </div>

                    <div className="integration-tag">
                        <UserRound size={15} />
                        <span>{startingLabel}</span>
                    </div>
                </div>

                <div className="final-progress-row">
                    <span>Step {currentStep} of 7</span>

                    <div className="final-progress-track">
                        <div
                            className="final-progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <span>{progress}% complete</span>
                </div>

                <section className="integration-content-card">
                    <span className="current-step-label">
                        {stepContent.eyebrow}
                    </span>

                    <h2>{stepContent.title}</h2>

                    <p className="step-intro">
                        {stepContent.intro}
                    </p>

                    {stepContent.actions && (
                        <div className="step-actions">
                            {stepContent.actions.map((action, index) => (
                                <div className="step-action" key={action.title}>
                                    <div className="step-action-number">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <strong>{action.title}</strong>
                                        <p>{action.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {stepContent.callout && (
                        <div className="recommended-box">
                            <div className="recommended-check">
                                <Check size={14} />
                            </div>

                            <div>
                                <strong>{stepContent.callout.title}</strong>
                                <p>{stepContent.callout.description}</p>
                            </div>
                        </div>
                    )}

                    {stepContent.links && (
                        <div className="step-links">
                            {stepContent.links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label}
                                    <ExternalLink size={14} />
                                </a>
                            ))}
                        </div>
                    )}

                    {/* <div className="recommended-box">
                        <div className="recommended-check">
                            <Check size={14} />
                        </div>

                        <div>
                            <strong>Recommended</strong>
                            <p>
                                The Sessions flow is recommended for most online payments
                                integrations.
                            </p>
                        </div>
                    </div> */}

                    {(currentStep === 3 || currentStep === 4) && (
                        <>
                            <div className="code-tabs">
                                <button
                                    className={activeCodeTab === "frontend" ? "active" : ""}
                                    onClick={() => setActiveCodeTab("frontend")}
                                >
                                    {frontend === "web"
                                        ? `${frameworkLabel} (Web)`
                                        : frontendLabel}
                                </button>

                                <button
                                    className={activeCodeTab === "backend" ? "active" : ""}
                                    onClick={() => setActiveCodeTab("backend")}
                                >
                                    {backendLabel}
                                </button>

                                <button
                                    className={activeCodeTab === "curl" ? "active" : ""}
                                    onClick={() => setActiveCodeTab("curl")}
                                >
                                    cURL
                                </button>
                            </div>

                            <div className="code-panel">
                                <div className="code-panel-header">
                                    <span>
                                        {activeCodeTab === "curl"
                                            ? "bash"
                                            : activeCodeTab === "backend"
                                                ? backendLabel
                                                : "JavaScript"}
                                    </span>

                                    <button
                                        onClick={() =>
                                            navigator.clipboard.writeText(displayedCode)
                                        }
                                    >
                                        Copy
                                    </button>
                                </div>

                                <SyntaxHighlighter
                                    language={
                                        activeCodeTab === "curl"
                                            ? "bash"
                                            : activeCodeTab === "backend"
                                                ? backendInfo?.language ?? "javascript"
                                                : "javascript"
                                    }
                                    style={customTheme}
                                    showLineNumbers
                                    customStyle={{
                                        margin: 0,
                                        padding: "10px 14px",
                                        background: "#172437",
                                        fontSize: "11px",
                                        lineHeight: "1.35",
                                        fontFamily:
                                            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
                                    }}
                                >
                                    {displayedCode}
                                </SyntaxHighlighter>
                            </div>
                        </>
                    )}

                    {/* <a
                        className="inline-doc-link"
                        href="https://docs.adyen.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Learn more about creating a payment session in our docs
                        <ExternalLink size={14} />
                    </a> */}

                    <div className="integration-card-footer">
                        <button className="back-button" onClick={previousStep}>
                            ← Previous step
                        </button>

                        <button className="mark-complete-button" onClick={markAsComplete}>
                            <Check size={16} />
                            Mark complete
                        </button>
                    </div>
                </section>
            </main>

            {/* RIGHT PANEL */}
            <aside className="integration-right-panel">
                <div className="view-toggle">
                    <button
                        className={viewMode === "essential" ? "active" : ""}
                        onClick={() => setViewMode("essential")}
                    >
                        Essential steps
                    </button>
                    <button
                        className={viewMode === "full" ? "active" : ""}
                        onClick={() => setViewMode("full")}
                    >
                        Full checklist
                    </button>
                </div>

                <div className="right-section">
                    <h3>Why this matters</h3>

                    <p>
                        {stepContent.whyItMatters}
                    </p>
                </div>

                <div className="right-section">
                    <h3>Helpful links</h3>

                    {stepContent.helpfulLinks.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}
                            <ExternalLink size={14} />
                        </a>
                    ))}
                </div>

                {/* <div className="right-section">
                    <h3>Why this matters</h3>

                    <p>
                        The integration flow determines how you collect payment details,
                        handle authentication and manage the payment lifecycle. The
                        Sessions flow makes it easy to get started and is suitable for most
                        use cases.
                    </p>
                </div>

                <div className="right-section">
                    <h3>Helpful links</h3>

                    <a
                        href="https://docs.adyen.com/online-payments/build-your-integration/sessions-flow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sessions flow overview
                        <ExternalLink size={14} />
                    </a>

                    <a
                        href="https://docs.adyen.com/online-payments/build-your-integration"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Choose your integration
                        <ExternalLink size={14} />
                    </a>

                    <a
                        href="https://docs.adyen.com/online-payments/build-your-integration/sessions-flow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Drop-in component ({frameworkLabel})
                        <ExternalLink size={14} />
                    </a>

                    <a
                        href="https://docs.adyen.com/online-payments/build-your-integration/advanced-flow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Advanced flow
                        <ExternalLink size={14} />
                    </a>
                </div> */}

                {nextStep && (
                    <div className="right-section next-up-section">
                        <span className="next-up-label">Next up</span>

                        <div className="next-up-row">
                            <ChevronRight size={16} />

                            <div>
                                <strong>
                                    Step {nextStep.number}. {nextStep.title}
                                </strong>

                                <p>{nextStep.description}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="final-help-card">
                    <MessageSquareText size={20} />

                    <div>
                        <h3>Need help?</h3>
                        <p>Join our Developer Community or contact support.</p>
                    </div>

                    <span>→</span>
                </div>
            </aside>
        </div>
    );
}

export default IntegrationPath;