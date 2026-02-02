export default function NeuroElysium() {
    return (
        <div className="card">
            <h1 className="text-center text-2xl">Neuro Elysium</h1>

            <div className="project-showcase">
                <iframe
                    width="500"
                    height="281.25"
                    src="https://www.youtube.com/embed/WLwVHcd24Vo"
                    allowFullScreen
                />

                <a href="https://github.com/SportWizard/Neuro-Elysium" target="_blank">
                    <img src="/images/github.png" alt="Github logo" width="50" height="50" />
                </a>
            </div>

            <p>
                This mod allows Neuro-sama to play Disco Elysium using the Neuro SDK.
            </p>
        </div>
    )
}