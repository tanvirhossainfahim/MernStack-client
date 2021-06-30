import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Here are your favorite Blog
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Fahim">
                TH. FAHIM.
              </Link>
            </b>
          </span>
          <span>10 hours ago</span>
        </div>
        <p className="singlePostDesc">
        THE IMPACT OF MUSIC ON PERFORMANCE IN SPORT
        Athletes are constantly searching for ways to improve their performance. The desire to run faster, jump higher or lift more has them searching for the next edge.
        Many swear by listening to music whilst in the gym to help them achieve this. But does music actually help or hinder performance?
        MUSIC AND SPORT: THE BENEFITS Feel Fitter.
        Research has shown that listening to music whilst exercising can reduce your rate of perceived effort by 12% and improve your endurance by 15%.
          <br />
          <br />
          Listening to music improves an athlete’s performance by distracting them from the negative thoughts that can consume the mind and hinder performance. Recent research proved this, showing that basketball players who were prone to performing poorly under pressure converted more free-throw shots when they had listened to an upbeat piece of music beforehand, as this distracted them from the pressure of performing in front of a crowd.
          Activates Autopilot. Listening to music can encourage athletes to operate on autopilot, hence outside their conscious awareness. Having elite athletes operate on autopilot is beneficial, such that a recent study found that when elite golfers were asked to take a putt as quickly as possible (operating on autopilot) they had a higher success rate, in comparison to when they took their time. High pressure situations often lead to overthinking, but when an athlete operates on autopilot this does not occur and movements are performed naturally.
        </p>
      </div>
    </div>
  );
}
