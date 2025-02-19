import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [viableUser, setViableUser] = useState<Candidate>();
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
        const data = await searchGithub();
        const newCandidate = data.map((candidate: Candidate) => {
          return { login: candidate.login };
        });
        setCandidates(newCandidate);
        console.log(newCandidate);

        const login = newCandidate[num]?.login 
        console.log(login);
        const newUser = await searchGithubUser(login);
        setViableUser(newUser);
    };
    fetchData();
  }, []);
  const handleClickUser = async (num: number) => {
    setNum(num );
    const login = candidates[num]?.login as string;
    const data = await searchGithubUser(login);
    if (data.login === undefined && num < candidates.length) {
      handleClickUser(num + 1);
    }
    setViableUser(data);
  };
const readLocalStorage = () => {
  const savedCandidates = localStorage.getItem("Users");
  if (savedCandidates) {
    return JSON.parse(savedCandidates);
  }
  return [];
};
  const handleClickKeepUser = async () => {
    const savedCandidates = readLocalStorage();
    if (viableUser !== undefined) {
      savedCandidates.push(viableUser as Candidate);
      localStorage.setItem("Users", JSON.stringify(savedCandidates));
    }
    handleClickUser(num + 1);
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <div>
        {viableUser ? (
          <>
            <div className="cardContainer">
              <div className="loginContainer">
                <h1 id="loginName"> {viableUser?.login}</h1>
              </div>
              <img id="avatar" src={viableUser?.avatar_url} alt="avatar" />
              <p id="tagLine">
                <strong>Name:</strong>
              </p>
              {viableUser?.name ? (
                <p id="tagContent">{viableUser?.name}</p>
              ) : (
                <p id="tagContent">None</p>
              )}
              <p id="tagLine">
                <strong>Location:</strong>
              </p>
              {viableUser?.location ? (
                <p id="tagContent">{viableUser.location}</p>
              ) : (
                <p id="tagContent">None</p>
              )}
              <p id="tagLine">
                <strong>Bio:</strong>
              </p>
              {viableUser?.bio ? (
                <p id="tagContent">{viableUser?.bio}</p>
              ) : (
                <p id="tagContent">None</p>
              )}
              <p id="tagLine">
                {" "}
                <strong> Company:</strong>
              </p>
              {viableUser?.company ? (
                <p id="tagContent"> {viableUser?.company}</p>
              ) : (
                <p id="tagContent">None</p>
              )}
            </div>
            <div className="buttonContainer">
              <button id="buttonPlus" onClick={() => handleClickKeepUser()}>
                +
              </button>
              <button id="buttonMinus" onClick={() => handleClickUser(num + 1)}>
                -
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </>
  );
};

export default CandidateSearch;
