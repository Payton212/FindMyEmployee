import { Candidate } from "../interfaces/Candidate.interface";
const SavedCandidates = () => {
  const savedCandidates = localStorage.getItem("Users");
let savedCandidatesArray: Candidate[] = [];

// Check if savedCandidates is not null before parsing
if (savedCandidates) {
  savedCandidatesArray = JSON.parse(savedCandidates);
} 
  const handleDeleteUser = (id: number | undefined) => {
    if (id !== undefined) {
      // Filter out the candidate with the specified id
      const newCandidates = savedCandidatesArray.filter(
        (candidate: Candidate) => candidate.id !== id
      );
      // Update local storage with the new candidates array
      localStorage.setItem("Users", JSON.stringify(newCandidates));
      window.location.reload();
    }
  }
  if (savedCandidatesArray) {
    return savedCandidatesArray.map((candidate: Candidate) => {
      return (
        <div className="savedCardContainer" key={candidate.id}>
          <div className="savedCandidateContainer">
            <div className="nameContainer">
              <h4 id="h4">Name</h4>
              {candidate.name ? (
                <p id="savedContent">{candidate.name}</p>
              ) : (
                <p id="savedContent">None</p>
              )}
            </div>
            <div className="imageConatiner">
              <h4 id="h4">Avatar</h4>
              <img id="savedAvatar" src={candidate.avatar_url} alt="avatar" />
            </div>
            <div className="locationContainer">
              <h4 id="h4">Location</h4>
              {candidate.location ? (
                <p id="savedContent">candidate.location</p>
              ) : (
                <p id="savedContent">None</p>
              )}
            </div>
            <div className="bioContainer">
              <h4 id="h4">Bio</h4>
              {candidate.bio ? (
                <p id="savedContent">{candidate.bio}</p>
              ) : (
                <p id="savedContent">None</p>
              )}
            </div>
            <div className="companyConatiner">
              <h4 id="h4">Company</h4>
              {candidate.company ? (
                <p id="savedContent"> {candidate.company}</p>
              ) : (
                <p id="savedContent">None</p>
              )}
            </div>

            {/*
          <h3>{candidate.login}</h3>
          <img id="savedAvatar" src={candidate.avatar_url} alt="avatar" />
          <div className="savedName">
          <p id="savedTagLine">
            <strong>Name</strong>
          </p>
          {candidate.name ? (
            <p id="savedContent">{candidate.name}</p>
          ) : (
            <p id="savedContent">None</p>
            )}</div>
          <div className="savedLocation">
          <p id="savedTagLine">
            <strong>Location</strong>
          </p>
          {candidate.location ? (
            <p id="savedContent">candidate.location</p>
          ) : (
            <p id="savedContent">None</p>
            )}</div>
          <div className="savedBio">
          <p id="savedTagLine">
            <strong>Bio</strong>
          </p>
          {candidate.bio ? (
            <p id="savedContent">{candidate.bio}</p>
          ) : (
            <p id="savedContent">None</p>
            )}</div>
          <div className="savedCompany">
          <p id="savedTagLine">
            <strong> Company</strong>
          </p>
          {candidate.company ? (
            <p id="savedContent"> {candidate.company}</p>
          ) : (
            <p id="savedContent">None</p>
          )}</div>
          */}
          </div>
          <div className="buttonContainer">
            <button
              id="buttonMinus"
              onClick={() => handleDeleteUser(candidate.id)}
            >
              -
            </button>
          </div>
        </div>
      );
    
    });
  }else{
    return <h1>No saved candidates</h1>
  }
  };
  


export default SavedCandidates;
