import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full pt-3 mb-10 flex justify-between items-center ">
        <h1 className="text-3xl font-bold">
          Article<span className="blue_gradient">Sum</span>
        </h1>
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/zyahiat/articlesum")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with ArticleSum, an open-source article summarizer that
        transforms lengthy articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
