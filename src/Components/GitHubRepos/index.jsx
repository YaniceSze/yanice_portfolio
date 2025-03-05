import React, { useEffect, useState } from "react";
import axios from "axios";

const devicons = {
  Git: '<i class="devicon-git-plain" style="color: #555"></i>',
  Github: '<i class="devicon-github-plain" style="color: #1688f0"></i>',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  // Add other languages as needed
};

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

  const renderDevicon = (language) => {
    return language && devicons[language] ? (
      <span
        dangerouslySetInnerHTML={{ __html: devicons[language] }}
        className="mr-2"
      ></span>
    ) : null;
  };

  return (
    <div className="h-full bg-gray-700 text-gray-200">
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

      <div>
        <h2 className="text-xl text-center text-gray-100">
          {search ? "Search Results" : "All Repositories"}
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 p-6">
          {(search ? filteredRepos : repos).map((repo) => (
            <li
              key={repo.id}
              className="w-full lg:w-1/3 p-4 rounded-xl border bg-gray-900 border-gray-300 dark:border-gray-300 shadow-md hover:shadow-lg transform hover:scale-105 transition"
            >
              <h3 className="text-xs md:text-xl font-semibold text-blue-500 mb-2 text-center">
                {repo.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 text-center mb-3">
                {repo.description}
              </p>
              <div className="flex text-xs md:text-sm justify-center gap-4 mb-2">
                {repo.language && (
                  <span className="text-gray-500 flex items-center">
                    {renderDevicon(repo.language)}
                  </span>
                )}
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
    </div>
  );
};

export default GitHubRepos;