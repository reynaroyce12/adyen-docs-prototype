import {
    CreditCard,
    Store,
    Layers3,
    ArrowLeftRight,
} from "lucide-react";


const options = [
    {
        id: "online",
        title: "Online payments",
        description: "Accept payments online through web or mobile apps.",
        icon: CreditCard
    },
    {
        id: "in-person",
        title: "In-person payments",
        description: "Accept payments at physical locations (POS).",
        icon: Store
    },
    {
        id: "platform",
        title: "Platform / marketplace",
        description: "Enable payments for multiple businesses or sellers.",
        icon: Layers3
    },
    {
        id: "payouts",
        title: "Payouts",
        description: "Send money to users, partners or connected accounts.",
        icon: ArrowLeftRight
    },
];

type StepOneProps = {
    selected: string;
    onSelect: (value: string) => void;
    onContinue: () => void;
};


function StepOne({ selected, onSelect, onContinue }: StepOneProps) {
    // const [selected, setSelected] = useState("online");

    return (
        <div className="step-page">
            <div className="step-header">
                <div>
                    <span className="eyebrow">GUIDED INTEGRATION PATH</span>

                    <h1>Let’s build your integration path</h1>

                    <p>
                        Answer a few quick questions to get a personalized guide with the
                        most relevant steps, tools, and documentation.
                    </p>
                </div>

                <div className="step-progress">
                    <span>Step 1 of 3</span>

                    <div className="progress-bars">
                        <span className="active" />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            <div className="step-content-grid">
                <section className="question-card">
                    <h2>1. What are you building?</h2>

                    <p className="question-subtitle">
                        Choose the use case that best describes your integration.
                    </p>

                    <div className="option-grid">
                        {options.map((option) => {
                            const Icon = option.icon;
                            const isSelected = selected === option.id

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => onSelect(option.id)}
                                    className={`option-card ${isSelected ? "selected" : ""}`}
                                >
                                    <div className="option-top">
                                        <Icon size={28} strokeWidth={1.8} />

                                        <div
                                            className={`radio ${isSelected ? "selected-radio" : ""}`}
                                        />
                                    </div>

                                    <h3>{option.title}</h3>
                                    <p>{option.description}</p>
                                </button>
                            );
                        })}
                    </div>

                    <div className="info-strip">
                        <span className="info-circle">i</span>
                        <span>Not sure? You can change your answers anytime.</span>
                    </div>

                    <div className="question-footer">
                        <button
                            className="continue-button"
                            onClick={onContinue}
                        >
                            Continue <span>→</span>
                        </button>
                    </div>
                </section>

                <aside className="step-info-panel">
                    <div className="guide-card">
                        <div className="guide-graphic">
                            <div className="graphic-card back" />
                            <div className="graphic-card front">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>

                        <h3>A personalized guide, built for you</h3>

                        <ul>
                            <li>Relevant steps for your use case</li>
                            <li>Links to the exact docs you need</li>
                            <li>Code examples in your tech stack</li>
                            <li>Tips, gotchas and next steps</li>
                        </ul>
                    </div>

                    <div className="support-card">
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

export default StepOne;