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
    icon: CreditCard,
  },
  {
    id: "in-person",
    title: "In-person payments",
    description: "Accept payments at physical locations.",
    icon: Store,
  },
  {
    id: "platform",
    title: "Platform / marketplace",
    description: "Build payment experiences for your users.",
    icon: Layers3,
  },
  {
    id: "payouts",
    title: "Payouts",
    description: "Send funds to customers or users.",
    icon: ArrowLeftRight,
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

        return (
            <button
                key={option.id}
                type="button"
                className={`option-card ${
                    selected === option.id ? "selected" : ""
                }`}
                onClick={() => onSelect(option.id)}
            >
                <div className="option-card-content">
                    <div className="option-icon">
                        <Icon size={24} />
                    </div>

                    <div>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                    </div>
                </div>
            </button>
        );
    })}
</div>
                    <p className="prototype-note">
                        {selected === "online"
                            ? "This prototype currently demonstrates the Online payments integration path."
                            : "This concept supports personalized paths across use cases. The interactive prototype currently demonstrates Online payments."}
                    </p>

                    <div className="info-strip">
                        <span className="info-circle">i</span>
                        <span>Not sure? You can change your answers anytime.</span>
                    </div>

                    <div className="question-footer">
                        <button
                            className="continue-button"
                            onClick={onContinue}
                            disabled={selected !== "online"}
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