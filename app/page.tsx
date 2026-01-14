export default function Home() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl font-bold mb-4 ">
          Hi, I'm Henry
        </h1>
        <p className="text-3xl">
          A developer
        </p>

        <img src="/images/programming.gif" alt="Coding gif"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="https://github.com/SportWizard" target="_blank">
          <img src="/images/github.png" alt="Github logo" width="50" height="50" />
        </a>
      </div>
    </>
  );
}
