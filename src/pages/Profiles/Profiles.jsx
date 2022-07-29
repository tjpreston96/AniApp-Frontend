import { useState, useEffect } from "react";
import * as profileService from "../../services/profileService";
import { DateTime } from "luxon";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [memberCount, setMemberCount] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles();
      setProfiles(profileData);
      setMemberCount(profileData.length);
    };
    fetchProfiles();
  }, []);

  const profileMap = profiles.map((profile) => {
    const partialEmail = profile.email.replace(
      /(\w{2})[\w.-]+@([\w.]+\w)/,
      "$1******@$2"
    );

    const formattedDate = DateTime.fromISO(profile.createdAt).toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

    return (
      <div className="col" key={profile._id}>
        <div class="card h-100" style={{ maxWidth: 540 }}>
          <div class="row g-0">
            <div class="col-4">
              <img
                src={profile.photo}
                class="img-fluid rounded-start h-100"
                alt="..."
                style={{ maxHeight: 130 }}
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">{profile.name}</h5>
                <p class="card-text">{partialEmail}</p>
                <p class="card-text">
                  <small class="text-muted">Created: {formattedDate}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="text-center text-white">Profile List</h1>
      <h5 className="text-center text-white">{memberCount} Profiles</h5>
      {profiles.length ? (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
          {profileMap}
        </div>
      ) : (
        <p>No profiles yet</p>
      )}
    </div>
  );
};

export default Profiles;
