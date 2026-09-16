type SidebarProps = {
    currentStep: number;
};

function Sidebar({ currentStep }: SidebarProps) {
    const steps = [
        {
            number: 1,
            title: "Your setup",
            subtitle: "Tell us what you're building",
        },
        {
            number: 2,
            title: "Your path",
            subtitle: "Choose your technology",
        },
        {
            number: 3,
            title: "Start building",
            subtitle: "Tell us where you're starting",
        },
    ];

    return (
        <aside className="sidebar">
            <button className="all-guides">← All guides</button>

            <div className="sidebar-title-row">
                <h2>Guided integration path</h2>
                <span className="beta-badge">Beta</span>
            </div>

            <p className="sidebar-description">
                Get a personalized step-by-step path to build with Adyen.
            </p>

            <div className="steps">
                {steps.map((step) => {
                    const isActive = currentStep === step.number;
                    const isComplete = currentStep > step.number;

                    return (
                        <div className="step" key={step.number}>
                            <div
                                className={`step-number ${isActive ? "active" : ""
                                    } ${isComplete ? "complete" : ""}`}
                            >
                                {isComplete ? "✔" : step.number}
                            </div>

                            <div>
                                <h3>{step.title}</h3>
                                <p>{step.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="sidebar-help">
                <h3>Not sure where to start?</h3>
                <p>Explore our integration guides or browse by use case.</p>

                <a
                    href="https://docs.adyen.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-help-link"
                >
                    ↻ View all guides
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;