import { useState } from "react";
import datafile from "../../../data";
import Nav from "../components/Nav";
import "./Card.css";

export default function Card() {
  const [data, setData] = useState(datafile);
  const [count, setCount] = useState(0);
  const [editState, setEditState] = useState(false);
  const [newState, setNewState] = useState(false);
  const [formData, setFormData] = useState({
    id: 26,
    name: { first: "", last: "" },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: [],
  });

  function prev() {
    count > 0 ? setCount((prevCount) => prevCount - 1) : null;
  }
  function next() {
    count + 1 === data.length ? null : setCount((prevCount) => prevCount + 1);
  }

  function edit(e) {
    console.log("hit editttt", e);
    console.log(data[count].name);
    console.log(editState);
    setEditState((prev) => !prev);
    console.log(editState);

    // setData(
    //   (prevData) => console.log(prevData)
    //     (
    //       (prevData[count].name.first = "bebz"),
    //       (prevData[count].name.last = "cool")
    //     )
    // );
  }

  const currentCard = (
    <div className="user-data">
      <div className="user-data-row1">
        <h1>
          {count + 1}/{data.length}
        </h1>
        {/* <h1>id: {data[count].id}</h1> */}
        <h1>
          {data[count].name.first} {data[count].name.last}
        </h1>
      </div>
      <div className="user-data-row2">
        <h2>From: </h2> {data[count].city} {data[count].country}
        <h2>Job Title: </h2> {data[count].title}
        <h2>Employer: </h2> {data[count].employer}
        <div className="user-data-row3">
          <h2>Favorite Movies: </h2>
          <ol>
            {data[count].favoriteMovies.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );

  function deleteCard(e) {
    console.log(e);
    console.log(count);
    console.log(data);
    let x = data.splice(count, 1);
    x;
    count === data.length ? prev() : next();
    setTimeout(() => prev(), 0.5);
    // prev();
    // setData((prev) => {
    //   let x = prev.splice(count, 1);
    //   return x;
    // });
  }

  function submitEdit(e) {
    e.preventDefault();
    console.log("hit submit");
    console.log(e);
  }

  const editCard = (
    <form className="user-data" onSubmit={(e) => submitEdit(e)}>
      <div className="user-data-row1">
        <h1>
          {count + 1}/{data.length}
        </h1>
        <input placeholder={data[count].name.first} />
        <input placeholder={data[count].name.last} />
      </div>
      <div className="user-data-row2">
        <h2>From: </h2> <input placeholder={data[count].city} />{" "}
        <input placeholder={data[count].country} />
        <h2>Job Title: </h2> <input placeholder={data[count].title} />
        <h2>Employer: </h2> <input placeholder={data[count].employer} />
        <div className="user-data-row3">
          <h2>Favorite Movies: </h2>
          <ol>
            {data[count].favoriteMovies.map((e, i) => (
              <input key={i} placeholder={e} />
            ))}
          </ol>
          <button onClick={(e) => submitEdit(e)}>Submit</button>
        </div>
      </div>
    </form>
  );

  function newUser() {
    setNewState((prev) => !prev);
  }

  function submitNewUser(e) {
    e.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        id: prev.id + 1,
      };
    });
    setData((prev) => {
      return [...prev, { ...formData }];
    });
    newUser();
    setCount(data.length);
  }

  //   function handleChange(e) {
  //     if (e.target.name === "first") {
  //       setFormData((prev) => {
  //         return {
  //           ...prev,
  //           name: { ...prev.name, first: e.target.value },
  //         };
  //       });
  //     } else if (e.target.name === "last") {
  //       setFormData((prev) => {
  //         return {
  //           ...prev,
  //           last: { ...prev.last, last: e.target.value },
  //         };
  //       });
  //     } else {
  //       setFormData((prev) => {
  //         return {
  //           ...prev,
  //           [e.target.name]: e.target.value,
  //         };
  //       });
  //     }
  //   }

  function handleChange(e) {
    let { value, name } = e.target;

    if (name === "first" || name === "last") {
      setFormData((prev) => {
        return {
          ...prev,
          name: { ...prev.name, [name]: value },
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }

  const newCard = (
    <form className="user-data" onSubmit={(e) => submitNewUser(e)}>
      <div className="user-data-row1">
        <h1>
          {data.length}/{data.length}
        </h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
          name="first"
          value={formData.name.first}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last"
          onChange={handleChange}
          value={formData.name.last}
        />
      </div>
      <div className="user-data-row2">
        <h2>From: </h2>{" "}
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={handleChange}
          value={formData.city}
        />{" "}
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={handleChange}
          value={formData.country}
        />
        <h2>Job Title: </h2>{" "}
        <input
          type="text"
          placeholder="Job Title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <h2>Employer: </h2>{" "}
        <input
          type="text"
          placeholder="Company"
          name="employer"
          onChange={handleChange}
          value={formData.employer}
        />
        <div className="user-data-row3">
          <h2>Favorite Movies: </h2>
          <textarea
            placeholder="List favorite movies separated with a comma"
            onChange={handleChange}
            name="favoriteMovies"
            value={formData.favoriteMovies}
          />
          <button>Submit</button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="card-container">
      <div className="card-container2">
        <div className="card-user-data">
          {newState ? newCard : editState ? editCard : currentCard}
        </div>
      </div>
      <div className="nav-container">
        <Nav
          cardCount={count}
          data={data}
          editFn={edit}
          prevFn={prev}
          nextFn={next}
          deleteFn={deleteCard}
          newFn={newUser}
        />
      </div>
    </div>
  );
}
