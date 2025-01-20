import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRegistrationForm = () => {
  const [formData, setFormData] = useState({
    team_name: "",
    participants: [],
    payment_screenshot: null,
  });
  const navigate = useNavigate();
  const [teamLeader, setTeamLeader] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setmessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();
  const { entityType, entityObject } = location.state || {};

  if (!entityType || !entityObject) {
    return <div>Error: Missing registration details!</div>;
  }
  useEffect(() => {
    if (entityType === "competition") {
      setFormData((prev) => ({
        ...prev,
        competition_name: entityObject.competition_name,
        date: entityObject.date,
        participants: Array.from(
          { length: entityObject.maxplayersperteam - 1 },
          () => ({
            name: "",
            email: "",
          })
        ),
      }));
    } else if (entityType === "event") {
      setFormData((prev) => ({
        ...prev,
        event_name: entityObject.event_name,
        date: entityObject.date,
      }));
    }
  }, [entityType, entityObject]);

  useEffect(() => {
    setProgress(0);
    setLoading(false);
  }, []);

  const handleFileChange = (e) => {
    setFormData({ ...formData, payment_screenshot: e.target.files[0] });
  };

  const handleTeamLeaderChange = (e) => {
    const { name, value } = e.target;
    setTeamLeader((prev) => ({ ...prev, [name]: value }));
  };

  const handleParticipantsChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];

    updatedParticipants[index][field] = value;
    setFormData((prev) => ({ ...prev, participants: updatedParticipants }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formData.payment_screenshot) {
  //     setmessage("Please upload the payment screenshot.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     setProgress(20);

  //     const img = new FormData();
  //     img.append("file", formData.payment_screenshot);

  //     if (entityType === "competition") {
  //       const participantEmails = formData.participants
  //         .map((participant) => participant.email)
  //         .filter((email) => email && email.trim());

  //       participantEmails.push(teamLeader.email);

  //       const uniqueEmails = new Set(participantEmails);
  //       if (uniqueEmails.size !== participantEmails.length) {
  //         setmessage("All participant emails must be unique and valid.");
  //         setLoading(false);
  //         setProgress(0);
  //         return;
  //       }

  //       const response = await axios.post("/api/image/upload", img, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       // Filter out participants with empty or invalid email or name
  //       const filteredParticipants = formData.participants.filter(
  //         (participant) => participant.email?.trim() && participant.name?.trim()
  //       );

  //       setProgress(50);

  //       // Create the finalData object
  //       const finalData = {
  //         ...formData,
  //         participants: filteredParticipants,
  //         payment_screenshot: response.data.url,
  //         team_leader: teamLeader,
  //       };

  //       const res = await axios.post(
  //         "/api/teams/addteam",
  //         { ...finalData, competition_id: entityObject.id },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       setProgress(100);
  //       setSuccess(true);
  //     } else if (entityType === "event") {
  //       // addeventparticipant
  //       const response = await axios.post("/api/image/upload", img, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       const finalData = {
  //         ...teamLeader,
  //         event_id: entityObject.id,
  //         payment_screenshot: response.data.url,
  //       };
  //       setProgress(50);

  //       const res = await axios.post(
  //         "/api/events/addeventparticipant",
  //         finalData,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (res.status == 201) {
  //         setProgress(100);
  //         setSuccess(true);
  //       }
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setProgress(0);

  //     if (error.status == 306) {
  //       // setmessage(
  //       //   "Some of participant's email already exists in same competition's different team"
  //       // );
  //       toast.error(
  //         "Some of participant's email already exists in same competition's different team"
  //       );
  //     } else if (error.status == 305) {
  //       // setmessage("Team name already exists.");
  //       toast.error("Team name already exists.");
  //     } else if (error.status == 307) {
  //       // setmessage(
  //       //   "Team Leader email id already exists in same competition's different team"
  //       // );
  //       toast.error(
  //         "Team Leader email id already exists in same competition's different team"
  //       );
  //     } else if (error.status == 409) {
  //       // setmessage("Email already registered for this event");
  //       toast.error("Email already registered for this event");
  //     } else {
  //       // setmessage("Some Error occured. Please Try Again Later.");
  //       toast.error("Some Error occured. Please Try Again Later.");
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.payment_screenshot) {
      toast.error("Please upload the payment screenshot.");
      return;
    }

    try {
      setLoading(true);
      setProgress(20);

      const img = new FormData();
      img.append("file", formData.payment_screenshot);

      if (entityType === "competition") {
        const participantEmails = formData.participants
          .map((participant) => participant.email)
          .filter((email) => email && email.trim());

        participantEmails.push(teamLeader.email);

        const uniqueEmails = new Set(participantEmails);
        if (uniqueEmails.size !== participantEmails.length) {
          toast.error("All participant emails must be unique and valid.");
          setLoading(false);
          setProgress(0);
          return;
        }

        const response = await axios.post("/api/image/upload", img, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const filteredParticipants = formData.participants.filter(
          (participant) => participant.email?.trim() && participant.name?.trim()
        );

        setProgress(50);

        const finalData = {
          ...formData,
          participants: filteredParticipants,
          payment_screenshot: response.data.url,
          team_leader: teamLeader,
        };

        const res = await axios.post(
          "/api/teams/addteam",
          { ...finalData, competition_id: entityObject.id },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setProgress(100);
        toast.success("Registration successful for the competition!");
        setSuccess(true);
      } else if (entityType === "event") {
        const response = await axios.post("/api/image/upload", img, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const finalData = {
          ...teamLeader,
          event_id: entityObject.id,
          payment_screenshot: response.data.url,
        };
        setProgress(50);

        const res = await axios.post(
          "/api/events/addeventparticipant",
          finalData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (res.status === 201) {
          setProgress(100);
          toast.success("Registration successful for the event!");
          setSuccess(true);
          navigate("/");
        }
      }
    } catch (error) {
      setLoading(false);
      setProgress(0);

      switch (error.status) {
        case 306:
          toast.error(
            "Some participant's email already exists in another team for this competition."
          );
          break;
        case 305:
          toast.error("Team name already exists.");
          break;
        case 307:
          toast.error(
            "Team Leader's email already exists in another team for this competition."
          );
          break;
        case 409:
          toast.error("Email already registered for this event.");
          break;
        default:
          toast.error("An error occurred. Please try again later.");
          break;
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto  p-6 bg-white shadow-md rounded-lg">
      {/* {success ? (
        <main className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-first rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 6.707a1 1 0 00-1.414-1.414L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-green-600 text-lg font-bold mt-2">
              Registration Successful!
            </p>
          </div>
        </main>
      ) : (
        <> */}
      <h2 className="text-2xl font-bold text-center second mb-4">
        Register for{" "}
        {entityType === "competition"
          ? entityObject.competition_name
          : entityObject.event_name}
      </h2>
      {loading && (
        <div className="flex items-center justify-center my-4">
          <div className="w-20 h-20">
            {/* <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={buildStyles({
                    pathColor: rgba(62, 152, 199, `${progress / 100}`),
                    textColor: "#3e98c7",
                    trailColor: "#d6d6d6",
                  })}
                /> */}
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${progress / 100})`, // Corrected the alpha value format
                textColor: "#3e98c7",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
        </div>
      )}
      {/* <h3 className="first text-lg font-semibold mb-2">{message}</h3> */}
      <ToastContainer />
      <h3 className="second text-md">
        Min Players Required:{" "}
        <span className="font-medium">{entityObject.minplayersperteam}</span>
      </h3>
      <div></div>
      <h3 className="second text-md mt-3">
        We will contact you, once payment is verified
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 my-8">
        {/* Entity Name */}
        <div>
          <label className="block second font-semibold mb-2">
            {entityType === "competition" ? "Competition Name" : "Event Name"}
          </label>
          <input
            type="text"
            value={
              entityType === "competition"
                ? entityObject.competition_name
                : entityObject.event_name
            }
            disabled
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block second font-semibold mb-2">Date</label>
          <input
            type="text"
            value={entityObject.date}
            disabled
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Team Name (if competition) */}
        {entityType === "competition" && (
          <div>
            <label className="block second font-semibold mb-2">Team Name</label>
            <input
              type="text"
              value={formData.team_name}
              onChange={(e) =>
                setFormData({ ...formData, team_name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {/* Team Leader */}
        <div>
          <h3 className="text-lg font-semibold second mb-2">
            {entityType === "competitions"
              ? "Team Leader Information"
              : "Your Information"}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={teamLeader.name}
              onChange={handleTeamLeaderChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={teamLeader.email}
              onChange={handleTeamLeaderChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={teamLeader.phone}
              onChange={handleTeamLeaderChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Participants (if competition) */}
        {entityType === "competition" && entityObject.maxplayersperteam > 1 && (
          <div>
            <h3 className="text-lg font-semibold second mb-2">Participants</h3>
            {Array.from({
              length: entityObject.maxplayersperteam - 1,
            }).map((_, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                <input
                  type="text"
                  placeholder={`Participant ${index + 2} Name`}
                  value={formData.participants[index]?.name || ""}
                  onChange={(e) =>
                    handleParticipantsChange(index, "name", e.target.value)
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required={index + 1 <= entityObject.minplayersperteam - 1}
                />
                <input
                  type="email"
                  placeholder={`Participant ${index + 2} Email`}
                  value={formData.participants[index]?.email || ""}
                  onChange={(e) =>
                    handleParticipantsChange(index, "email", e.target.value)
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required={index + 1 <= entityObject.minplayersperteam - 1}
                />
              </div>
            ))}
          </div>
        )}

        {/* Payment Screenshot */}
        <div>
          <div className="mb-5 border m-2 p-2 flex ">
            <img
              src="../../ABL.svg"
              className="w-[25%] h-[25%] flex justify-start items-center"
            />
            <div>
              <p>Name: Ashhad Abid Akhtar</p>
              <p>IBAN: PK41ABPA0010116629260019</p>
              <p>ACC NO: 04580010116629260019</p>
            </div>
          </div>
          <label className="block second font-semibold mb-2">
            Upload Payment Screenshot
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Instructions */}
        <div className="second text-sm">
          <p>
            Please make sure to fill out all required fields. Team leader
            information is mandatory for competitions.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-first text-white rounded-md hover:bg-orange-500 duration-300 transition-all"
        >
          Submit
        </button>
      </form>
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default AddRegistrationForm;
