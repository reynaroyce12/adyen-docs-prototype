import {
    CreditCard,
    Code2,
    FileText,
    UserRound,
    KeyRound,
    Check,
    MessageSquareText,
} from "lucide-react";

const startingOptions = [
    {
        id: "scratch",
        title: "Starting from scratch",
        description: "I'm new to Adyen and haven't set anything up yet.",
        detail:
            "We'll guide you through account setup, configuration and integration.",
        icon: FileText,
    },
    {
        id: "test-account",
        title: "I already have a test account",
        description: "I've created a test account in Adyen.",
        detail:
            "We'll skip account setup and focus on integration steps for your environment.",
        icon: UserRound,
    },
    {
        id: "credentials",
        title: "I already have API credentials",
        description: "I have API credentials (API key, client key, or both).",
        detail:
            "We'll take you directly to integration and implementation resources.",
        icon: KeyRound,
    },
];

const useCaseLabels: Record<string, string> = {
    online: "Online payments",
    "in-person": "In-person payments",
    platform: "Platform / marketplace",
    payouts: "Payouts",
};

// const frontendLabels: Record<string, string> = {
//     web: "Web",
//     ios: "iOS",
//     android: "Android",
//     "react-native": "React Native",
//     flutter: "Flutter",
// };

const frameworkLabels: Record<string, string> = {
    react: "React",
    vue: "Vue",
    angular: "Angular",
    vanilla: "Vanilla JavaScript",
};

// const backendLabels: Record<string, string> = {
//     node: "Node.js",
//     java: "Java",
//     python: "Python",
//     go: "Go",
//     dotnet: ".NET",
// };

type StepThreeProps = {
    selected: string;
    onSelect: (value: string) => void;

    useCase: string;
    frontend: string;
    framework: string;
    backend: string;

    onBack: () => void;
    onGenerate: () => void;
    onChangeSetup: () => void;
};

function StepThree({ selected, onSelect, useCase, framework, onBack, onGenerate, onChangeSetup }: StepThreeProps) {
    // const [selected, setSelected] = useState("scratch");

    const useCaseLabel = useCaseLabels[useCase] ?? useCase;
    // const frontendLabel = frontendLabels[frontend] ?? frontend;
    const frameworkLabel = frameworkLabels[framework] ?? framework;
    // const backendLabel = backendLabels[backend] ?? backend;

    return (
        <div className="step-page">
            {/* Top header */}
            <div className="step-header">
                <div>
                    <span className="eyebrow">GUIDED INTEGRATION PATH</span>

                    <h1>Where are you starting?</h1>

                    <p>
                        Select the option that best matches your current progress so we can
                        tailor the next steps.
                    </p>

                    {/* Setup chips */}
                    <div className="setup-summary-bar">
                        <div className="setup-summary-item">
                            <CreditCard size={17} />
                            <span>{useCaseLabel}</span>
                        </div>

                        <div className="setup-summary-separator" />

                        <div className="setup-summary-item">
                            <Code2 size={17} />
                            <span>{frameworkLabel}</span>
                        </div>

                        <div className="setup-summary-separator" />

                        <button
                            className="setup-summary-change"
                            onClick={onChangeSetup}
                        >
                            Change
                        </button>
                    </div>
                </div>

                <div className="step-progress">
                    <span>Step 3 of 3</span>

                    <div className="progress-bars">
                        <span className="active" />
                        <span className="active" />
                        <span className="active" />
                    </div>
                </div>
            </div>

            <div className="step-three-layout">
                {/* Main question card */}
                <section className="question-card step-three-card">
                    <h2>3. Where are you starting?</h2>

                    <p className="question-subtitle">
                        Select the option that best matches your current progress so we can
                        tailor the next steps.
                    </p>

                    <div className="starting-options">
                        {startingOptions.map((option) => {
                            const Icon = option.icon;
                            const isSelected = selected === option.id;

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => onSelect(option.id)}
                                    className={`starting-card ${isSelected ? "selected" : ""
                                        }`}
                                >
                                    <div className="starting-icon">
                                        <Icon size={26} strokeWidth={1.8} />
                                    </div>

                                    <div className="starting-copy">
                                        <h3>{option.title}</h3>
                                        <p>{option.description}</p>
                                        <span>{option.detail}</span>
                                    </div>

                                    <div
                                        className={`radio ${isSelected ? "selected-radio" : ""
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <div className="info-strip">
                        <span className="info-circle">i</span>
                        <span>You can update your setup at any time.</span>
                    </div>

                    <div className="question-footer step-three-footer">
                        <button
                            className="back-button"
                            onClick={onBack}
                        >
                            ← Back
                        </button>

                        <button
                            className="continue-button"
                            onClick={onGenerate}
                        >
                            Generate my path <span>→</span>
                        </button>
                    </div>
                </section>

                {/* Right side */}
                <aside className="step-three-side">
                    {/* Setup summary */}
                    <div className="summary-card green-summary">
                        <h3>Your setup so far</h3>

                        <div className="summary-row">
                            <div className="summary-icon">
                                <CreditCard size={20} />
                            </div>

                            <span>Online payments</span>

                            <div className="summary-check">
                                <Check size={14} />
                            </div>
                        </div>

                        <div className="summary-row">
                            <div className="summary-icon react-icon">
                                <Code2 size={20} />
                            </div>

                            <span>React</span>

                            <div className="summary-check">
                                <Check size={14} />
                            </div>
                        </div>

                        <div className="summary-row">
                            <div className="summary-icon">
                                <FileText size={20} />
                            </div>

                            <span>Personalized path</span>

                            <div className="summary-radio" />
                        </div>
                    </div>

                    {/* What you'll get */}
                    <div className="summary-card">
                        <h3>What you'll get</h3>

                        <BenefitRow
                            title="Relevant docs links"
                            subtitle="Curated for your use case"
                        />

                        <BenefitRow
                            title="Code examples for your stack"
                            subtitle="Copy and adapt to get started"
                        />

                        <BenefitRow
                            title="Recommended next steps"
                            subtitle="A clear path to follow"
                        />

                        <BenefitRow
                            title="Helpful implementation tips"
                            subtitle="Best practices from our experts"
                        />
                    </div>

                    {/* Help */}
                    <div className="side-help-card">
                        <MessageSquareText size={21} />

                        <div>
                            <h3>Need help?</h3>
                            <p>Join our Developer Community or contact support.</p>
                        </div>

                        <span>→</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

type BenefitRowProps = {
    title: string;
    subtitle: string;
};

function BenefitRow({ title, subtitle }: BenefitRowProps) {
    return (
        <div className="benefit-row">
            <div className="benefit-check">
                <Check size={13} />
            </div>

            <div>
                <strong>{title}</strong>
                <span>{subtitle}</span>
            </div>
        </div>
    );
}

export default StepThree;