import { Globe } from "lucide-react";

const frontendOptions = [
  {
    id: "web",
    title: "Web",
    description: "For websites and web applications.",
    type: "lucide",
  },
  {
    id: "ios",
    title: "iOS",
    description: "For native iOS applications.",
    type: "devicon",
    iconClass: "devicon-apple-original",
  },
  {
    id: "android",
    title: "Android",
    description: "For native Android applications.",
    type: "devicon",
    iconClass: "devicon-android-plain colored",
  },
  {
    id: "react-native",
    title: "React Native",
    description: "For cross-platform mobile apps.",
    type: "devicon",
    iconClass: "devicon-react-original colored",
  },
  {
    id: "flutter",
    title: "Flutter",
    description: "For cross-platform mobile apps.",
    type: "devicon",
    iconClass: "devicon-flutter-plain colored",
  },
];

const frameworkOptions = [
  {
    id: "react",
    title: "React",
    description: "Popular JavaScript library.",
    iconClass: "devicon-react-original colored",
  },
  {
    id: "vue",
    title: "Vue.js",
    description: "Progressive JavaScript framework.",
    iconClass: "devicon-vuejs-plain colored",
  },
  {
    id: "angular",
    title: "Angular",
    description: "Full-featured framework.",
    iconClass: "devicon-angularjs-plain colored",
  },
  {
    id: "vanilla",
    title: "Vanilla JavaScript",
    description: "No framework.",
    iconClass: "devicon-javascript-plain colored",
  },
];

const backendOptions = [
  {
    id: "node",
    title: "Node.js",
    description: "JavaScript runtime environment.",
    iconClass: "devicon-nodejs-plain colored",
  },
  {
    id: "java",
    title: "Java",
    description: "For JVM-based server applications.",
    iconClass: "devicon-java-plain colored",
  },
  {
    id: "python",
    title: "Python",
    description: "Popular for backend services.",
    iconClass: "devicon-python-plain colored",
  },
  {
    id: "go",
    title: "Go",
    description: "Simple and efficient server-side development.",
    iconClass: "devicon-go-original-wordmark colored",
  },
  {
    id: "dotnet",
    title: ".NET",
    description: "For Microsoft-based applications.",
    iconClass: "devicon-dotnetcore-plain colored",
  },
];

type StepTwoProps = {
  frontend: string;
  framework: string;
  backend: string;

  onFrontendChange: (value: string) => void;
  onFrameworkChange: (value: string) => void;
  onBackendChange: (value: string) => void;

  onBack: () => void;
  onContinue: () => void;
};

function StepTwo({
  frontend,
  backend,
  framework,
  onFrameworkChange,
  onFrontendChange,
  onBackendChange,
  onBack,
  onContinue,
}: StepTwoProps) {
  return (
    <div className="step-page">
      <div className="step-header">
        <div>
          <span className="eyebrow">GUIDED INTEGRATION PATH</span>

          <h1>What are you building with?</h1>

          <p>
            Tell us which technologies you're using so we can tailor the
            integration path to your setup.
          </p>
        </div>

        <div className="step-progress">
          <span>Step 2 of 3</span>

          <div className="progress-bars">
            <span className="active" />
            <span className="active" />
            <span />
          </div>
        </div>
      </div>

      <section className="question-card">
        <div className="technology-section">
          <div className="section-heading">
            <h2>Frontend / client</h2>
            <p>Where will your customers complete the payment?</p>
          </div>

          <div className="technology-grid frontend-grid">
            {frontendOptions.map((option) => {
              const selected = frontend === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onFrontendChange(option.id)}
                  className={`technology-card ${
                    selected ? "selected" : ""
                  }`}
                >
                  <div className="technology-card-top">
                    {option.type === "lucide" ? (
                      <Globe size={28} strokeWidth={1.8} />
                    ) : (
                      <i
                        className={`technology-devicon ${option.iconClass}`}
                      />
                    )}

                    <div
                      className={`radio ${
                        selected ? "selected-radio" : ""
                      }`}
                    />
                  </div>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {frontend === "web" && (
          <div className="framework-section">
            <p className="framework-question">
              Which frontend framework are you using?
            </p>

            <div className="framework-grid">
              {frameworkOptions.map((option) => {
                const isSelected = framework === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onFrameworkChange(option.id)}
                    className={`framework-card ${
                      isSelected ? "selected" : ""
                    }`}
                  >
                    <div className="framework-card-content">
                      <div className="framework-icon-wrap">
                        <i
                          className={`framework-devicon ${option.iconClass}`}
                        />
                      </div>

                      <div>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="framework-check">✓</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="technology-divider" />

        <div className="technology-section">
          <div className="section-heading">
            <h2>Backend / server</h2>
            <p>What are you using for your server-side integration?</p>
          </div>

          <div className="technology-grid backend-grid">
            {backendOptions.map((option) => {
              const selected = backend === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onBackendChange(option.id)}
                  className={`technology-card ${
                    selected ? "selected" : ""
                  }`}
                >
                  <div className="technology-card-top">
                    <i
                      className={`technology-devicon ${option.iconClass}`}
                    />

                    <div
                      className={`radio ${
                        selected ? "selected-radio" : ""
                      }`}
                    />
                  </div>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="question-footer step-two-footer">
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>

          <button className="continue-button" onClick={onContinue}>
            Continue <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default StepTwo;