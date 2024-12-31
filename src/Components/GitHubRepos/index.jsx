import React, { useEffect, useState } from "react";
import axios from "axios";
 
const GitHubRepos = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [isForksHidden] = useState(true);
  const username = "YaniceSze";
  const maxPages = 3;
 
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [username]);
 
  useEffect(() => {
    const fetchRepos = async () => {
      let allRepos = [];
      for (let i = 1; i <= maxPages; i++) {
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${i}`
        );
        allRepos = allRepos.concat(res.data);
      }
      allRepos.sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          b.forks_count - a.forks_count
      );
      setRepos(allRepos);
    };
    fetchRepos();
  }, [username, maxPages]);
 
  const filteredRepos = repos.filter((repo) => {
    const repoName = repo.name.toLowerCase();
    return repoName.includes(search.toLowerCase()) && (!repo.fork || !isForksHidden);
  });
 
  return (
    <div className="h-screen bg-gray-900 text-gray-200">
      {profile && (
        <div
          className="flex md:mx-48 flex-col items-center rounded-t-lg p-6 shadow-lg"
          style={{
            backgroundImage: `url('https://t4.ftcdn.net/jpg/02/07/15/43/360_F_207154340_wLIJus4m3SBl5sAQmpqN3Um7REnUhskU.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={profile.avatar_url}
            alt="user avatar"
            className="rounded-full border-4 border-blue-500 w-36 h-36 shadow-md"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            <a href={profile.blog} className="text-blue-500 hover:underline">
              {profile.name} - {profile.login}
            </a>
          </h2>
          <p className="text-base md:text-xl text-center mt-2">{profile.bio}</p>
          <p className="mt-2">
            Followers: <strong>{profile.followers}</strong> | Repos:{" "}
            <strong>{profile.public_repos}</strong> | Gists:{" "}
            <strong>{profile.public_gists}</strong>
          </p>
        </div>
      )}
 
      <div className="flex justify-center my-6">
        <input
          type="text"
          className="p-2 rounded-full w-1/2 text-center border-2 bg-gray-500 border-blue-500 text-gray-200"
          placeholder="Search Repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
 
      {search ? (
        <div>
          <h2 className="text-xl text-center text-gray-100">Search Results</h2>
          <ul className="flex flex-wrap justify-center gap-6 p-6">
            {filteredRepos.map((repo) => (
              <li
                key={repo.id}
                className="w-full lg:w-1/3 p-4 rounded-xl border bg-gray-700 border-gray-300 dark:border-gray-300 shadow-md hover:shadow-lg transform hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold text-blue-500 mb-2 text-center">
                  {repo.name}
                </h3>
                <p className="text-sm text-black dark:text-gray-300 text-center mb-3">
                  {repo.description}
                </p>
                <div className="flex justify-center gap-4 mb-2">
                  {repo.stargazers_count > 0 && (
                    <a
                      href={`${repo.html_url}/stargazers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400"
                    >
                      ⭐ {repo.stargazers_count}
                    </a>
                  )}
                  {repo.language && <span className="text-gray-500">{repo.language}</span>}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 border-2 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:text-white transition"
                  >
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 border-2 text-white px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl text-center text-gray-100">All Repositories</h2>
          <ul className="flex flex-wrap justify-center gap-6 p-6">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="w-full lg:w-1/4 p-4 rounded-xl border bg-gray-700 border-gray-300 dark:border-gray-300 shadow-md hover:shadow-lg transform hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold text-blue-500 mb-2 text-center">
                  {repo.name}
                </h3>
                <p className="text-sm text-black dark:text-gray-300 text-center mb-3">
                  {repo.description}
                </p>
                <div className="flex justify-center gap-4 mb-2">
                  {repo.stargazers_count > 0 && (
                    <a
                      href={`${repo.html_url}/stargazers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400"
                    >
                      ⭐ {repo.stargazers_count}
                    </a>
                  )}
                  {repo.language && <span className="text-gray-500">{repo.language}</span>}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 border-2 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:text-white transition"
                  >
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 border-2 text-white px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
 
export default GitHubRepos;


// Ensure the `devicons` object remains the same as you shared previously
// Icon image
const devicons = {
    Git: '<i class="devicon-git-plain" style="color: #555"></i>',
    Github: '<i class="devicon-github-plain" style="color: #1688f0"></i>',
    Chrome: '<i class="devicon-chrome-plain" style="color: #1688f0"></i>',
    Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
    'C#': '<i class="devicon-csharp-plain colored"></i> C#',
    'C++': '<i class="devicon-cplusplus-plain colored"></i> C++',
    C: '<i class="devicon-c-plain colored"></i> C',
    Clojure: '<i class="devicon-clojure-plain colored"></i> Clojure',
    CoffeeScript: '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
    Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
    CSS: '<i class="devicon-css3-plain colored"></i> CSS',
    Dart: '<i class="devicon-dart-plain colored"></i> Dart',
    Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
    Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
    Elm: '<i class="devicon-elm-plain colored"></i> Elm',
    Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
    'F#': '<i class="devicon-fsharp-plain colored"></i> F#',
    Go: '<i class="devicon-go-plain colored"></i> Go',
    Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
    HTML: '<i class="devicon-html5-plain colored"></i> HTML',
    Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
    Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
    JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
    Julia: '<i class="devicon-julia-plain colored"></i> Julia',
    'Jupyter Notebook': '<i class="devicon-jupyter-plain colored"></i> Jupyter',
    Kotlin: '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
    Latex: '<i class="devicon-latex-plain colored"></i> Latex',
    Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
    Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
    Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
    Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
    ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
    OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
    Perl: '<i class="devicon-perl-plain colored"></i> Perl',
    PHP: '<i class="devicon-php-plain colored"></i> PHP',
    PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
    Processing: '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
    Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
    R: '<i class="devicon-r-plain colored"></i> R',
    Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
    Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
    Sass: '<i class="devicon-sass-original colored"></i> Sass',
    Scala: '<i class="devicon-scala-plain colored"></i> Scala',
    Shell: '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
    Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
    Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
    Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
    Swift: '<i class="devicon-swift-plain colored"></i> Swift',
    Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
    TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
    'Vim Script': '<i class="devicon-vim-plain colored"></i> Vim Script',
    Vue: '<i class="devicon-vuejs-plain colored"></i> Vue'
};

