import React, { useEffect, useState, useContext } from "react";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { ReviewContext } from "../../contextApi/ReviewsContext";
import { toast } from "react-toastify";
import { IoStarSharp } from "react-icons/io5";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const DesignerPage = () => {
  const [designers, setDesigners] = useState([]);
  const { reviews, getDesignerReviews, createReview } = useContext(ReviewContext);
  const [newReview, setNewReview] = useState({ comment: "", rating: 5 });

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/designer/`);
        setDesigners(data);

        if (data.length > 0) {
          getDesignerReviews(data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching designers:", error);
      }
    };
    fetchDesigners();
  }, []);

  // Submit review
  const handleReviewSubmit = async (designerId) => {
    if (!newReview.comment) {
      toast.error("Please add a comment");
      return;
    }

    try {
      await createReview({
        designerId,
        comment: newReview.comment,
        rating: newReview.rating,
        productId: null,
      });

      toast.success("Review submitted successfully ");

      setNewReview({ comment: "", rating: 5 });
    } catch (error) {
      toast.error("Something went wrong while submitting review");
    }
  };

  return (
    <>
      <HeroSection title={"Designer Page"} />
      <section className="designer-page">
        {designers.map((designer) => (
          <div key={designer._id} className="designer-page-card">
            <div className="profile-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
                alt="Designer Photo"
                className="profile-img"
              />
              <div className="profile-info">
                <h3>{designer.userId?.name || "Designer Name"}</h3>
                <p>
                  {designer.specialization || "Interior Designer"} |{" "}
                  {designer.yearsOfExperience || 0}+ Years Experience
                </p>
              </div>
            </div>

            <div className="profile-body">
              <h4>About</h4>
              <p>{designer.about || "No description available."}</p>

              <h4>Portfolio Highlights</h4>
              <div className="designer-portfolio-grid">
                <img src={`${API_URL}${designer.image}`} alt="Designer Portfolio" />
              </div>

              <h4>Available Time Slots</h4>
              {designer.availableTimeSlots && designer.availableTimeSlots.length > 0 ? (
                designer.availableTimeSlots.map((slot) => (
                  <p key={slot.date}>
                    {slot.date}: {slot.times.join(", ")}
                  </p>
                ))
              ) : (
                <p>No time slots available.</p>
              )}

              <h4>Consultation Fee</h4>
              <p>$150 per hour</p>

              {/* Reviews Section */}
              <h4>Reviews</h4>
              {reviews.designers[designer._id] && reviews.designers[designer._id].length > 0 ? (
                reviews.designers[designer._id].map((r) => (
                  <div key={r._id} className="review">
                    <p>
                      <strong>{r.userId?.name || "Anonymous"}</strong>{" "}
                      {Array(r.rating).fill().map((_, i) => (
                        <IoStarSharp key={i} className="inline text-yellow-500" />
                      ))}
                      <br />"{r.comment}"
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}

              {/* Add Review Form */}
              <div className="add-review">
                <textarea
                  placeholder="Write your review..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                />
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                >
                  <option value="" disabled >stars</option>
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
                <button onClick={() => handleReviewSubmit(designer._id)}>Submit Review</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default DesignerPage;
