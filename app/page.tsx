export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-9rem)]">
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm Henry
        </h1>
        <p className="text-3xl">
          A developer
        </p>

        <img src="/images/programming.gif" alt="Coding gif" />
      </div>

      <div className="flex justify-center">
        <a href="https://github.com/SportWizard" target="_blank">
          <img src="/images/github.png" alt="Github logo" width="50" height="50" />
        </a>
      </div>
    </>
  );
}
